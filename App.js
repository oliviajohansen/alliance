import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import ChatRoom from './Chat/ChatRoom';
import ChatPage from './Chat/ChatPage';
import Profile from './Profile';
import More from './More';
import Buddy_up_industry from './BuddyUp/Buddy_up_industry';
import Buddy_up_interest from './BuddyUp/Buddy_up_interest';
import Buddy_up_country from './BuddyUp/Buddy_up_country';
import Alliance_academy from './AllianceAcademy/Alliance_academy';
import View_profile from './View_profile';
import { IconButton } from 'react-native-paper';

const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator>
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
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
);

const ChatStack = createStackNavigator();

const ChatStackScreen = () => (
    <ChatStack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#6646ee'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
          fontSize: 22
        }
      }}
      >
      <ChatStack.Screen
        name='Chat Page'
        component={ChatPage}
        options={({ navigation }) => ({
          headerRight: () => (
            <IconButton
              icon='message-plus'
              size={28}
              color='#ffffff'
              //onPress={() => navigation.navigate('AddRoom')}
            />
          )
        })}
      />
      <ChatStack.Screen name="Chat Room" component={ChatRoom} />
    </ChatStack.Navigator>
);

const MoreStack = createStackNavigator();

const MoreStackScreen = () => (
    <MoreStack.Navigator>
      <MoreStack.Screen name="More" component={More} />
    </MoreStack.Navigator>
);

export default function App() {
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

  return (
<NavigationContainer>
<Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Chat" component={ChatStackScreen} />
      <Tab.Screen name="Profile" component={ProfileStackScreen} />      
      <Tab.Screen name="More" component={MoreStackScreen} />
   </Tab.Navigator>
      {/* <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="More" component={More} />
      </Stack.Navigator> */}
</NavigationContainer>
      );
}