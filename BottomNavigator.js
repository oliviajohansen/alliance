import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home';
import Chat from './Chat';
import Profile from './Profile';
import More from './More';

const BottomNavigator = () => {
   const Tab = createBottomTabNavigator();
   
   return (
   <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="More" component={More} />
   </Tab.Navigator>
   )

}

export default BottomNavigator