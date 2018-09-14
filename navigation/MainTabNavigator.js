import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import RainyScreen from '../screens/RainyScreen';
import MemoriesScreen from '../screens/MemoriesScreen'; 
import AddItem from '../screens/AddItem'; 
//import ListItem from '../screens/MemoriesScreen'; 

const HomeStack = createStackNavigator({
  Home: HomeScreen,
  AddItemScreen: AddItem, 
  //ListItemScreen: ListItem
});

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-heart${focused ? '' : '-outline'}`
          : 'md-heart'
      }
    />
  ),
};

const RainyStack = createStackNavigator({
  RainyDay: RainyScreen,
});

RainyStack.navigationOptions = {
  tabBarLabel: 'Rainy Day',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-rainy${focused ? '' : '-outline'}` : 'md-rainy'}
    />
  ),
};

const MemoriesStack = createStackNavigator({
  Settings: MemoriesScreen,
});

MemoriesStack.navigationOptions = {
  tabBarLabel: 'Memories',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-camera${focused ? '' : '-outline'}` : 'md-camera'}
    />
  ),
};



export default createBottomTabNavigator({
  HomeStack,
  RainyStack,
  MemoriesStack,
});
