import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Chat from './Chat';
import Profile from './Profile';
import More from './More';

export default function App() {
  const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

  return (
<NavigationContainer>
<Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="More" component={More} />
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