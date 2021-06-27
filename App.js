import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "./Home";
import ChatRoom from "./Chat/ChatRoom";
import ChatPage from "./Chat/ChatPage";
import Profile from "./Profile/Profile";
import More from "./More";
import Buddy_up_industry from "./BuddyUp/Buddy_up_industry";
import Buddy_up_interest from "./BuddyUp/Buddy_up_interest";
import Buddy_up_country from "./BuddyUp/Buddy_up_country";
import Alliance_academy from "./AllianceAcademy/Alliance_academy";
import View_profile from "./Profile/View_profile";
import { IconButton } from "react-native-paper";

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#D96258",
      },
      headerTintColor: "#ffffff",
      headerTitleStyle: {
        fontSize: 22,
      },
    }}
  >
    <HomeStack.Screen name="Home" component={Home} />
    <HomeStack.Screen name="Profile" component={Profile} />
    <HomeStack.Screen name="Buddy Up Industry" component={Buddy_up_industry} />
    <HomeStack.Screen name="Buddy Up Interest" component={Buddy_up_interest} />
    <HomeStack.Screen name="Buddy Up Country" component={Buddy_up_country} />
    <HomeStack.Screen name="Alliance Academy" component={Alliance_academy} />
    <HomeStack.Screen name="View Profile" component={View_profile} />
  </HomeStack.Navigator>
);

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#D96258",
      },
      headerTintColor: "#ffffff",
      headerTitleStyle: {
        fontSize: 22,
      },
    }}
  >
    <ProfileStack.Screen name="Profile" component={Profile} />
  </ProfileStack.Navigator>
);

const ChatStack = createStackNavigator();

const ChatStackScreen = () => (
  <ChatStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#D96258",
      },
      headerTintColor: "#ffffff",
      headerTitleStyle: {
        fontSize: 22,
      },
    }}
  >
    <ChatStack.Screen
      name="Chat Page"
      component={ChatPage}
      options={({ navigation }) => ({
        headerRight: () => (
          <IconButton
            icon="message-plus"
            size={28}
            color="#ffffff"
            //onPress={() => navigation.navigate('AddRoom')}
          />
        ),
      })}
    />
    <ChatStack.Screen name="Chat Room" component={ChatRoom} />
  </ChatStack.Navigator>
);

const MoreStack = createStackNavigator();

const MoreStackScreen = () => (
  <MoreStack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: "#D96258",
      },
      headerTintColor: "#ffffff",
      headerTitleStyle: {
        fontSize: 22,
      },
    }}
  >
    <MoreStack.Screen name="More" component={More} />
  </MoreStack.Navigator>
);

export default function App() {
  const Stack = createStackNavigator();
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = focused
                ? "ios-information-circle"
                : "ios-information-circle-outline";
            } else if (route.name === "More") {
              iconName = focused ? "ios-list" : "ios-list-outline";
            } else if (route.name === "Chat") {
              iconName = focused ? "ios-chatbox" : "ios-chatbox-outline";
            } else {
              iconName = focused ? "ios-person" : "ios-person-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={"#D96258"} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: "#D96258",
          inactiveTintColor: "gray",
        }}
      >
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Chat" component={ChatStackScreen} />
        <Tab.Screen name="Profile" component={ProfileStackScreen} />
        <Tab.Screen name="More" component={MoreStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
