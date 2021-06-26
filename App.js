import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Chat from './Chat';
import Profile from './Profile';
import More from './More';
import Buddy_up_industry from './BuddyUp/Buddy_up_industry';
import Buddy_up_interest from './BuddyUp/Buddy_up_interest';
import Buddy_up_country from './BuddyUp/Buddy_up_country';


const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Profile" component={Profile} />
      <HomeStack.Screen name="Buddy Up Industry" component={Buddy_up_industry} />
      <HomeStack.Screen name="Buddy Up Interest" component={Buddy_up_interest} />
      <HomeStack.Screen name="Buddy Up Country" component={Buddy_up_country} />
    </HomeStack.Navigator>
);

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={Profile} />
    </ProfileStack.Navigator>
);

const Chattack = createStackNavigator();

const ChatStackScreen = () => (
    <Chattack.Navigator>
      <Chattack.Screen name="Chat" component={Chat} />
    </Chattack.Navigator>
);

const MoreStack = createStackNavigator();

const MoreStackScreen = () => (
    <MoreStack.Navigator>
      <MoreStack.Screen name="More" component={More} />
      <MoreStack.Screen name="Chat" component={Chat} />
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