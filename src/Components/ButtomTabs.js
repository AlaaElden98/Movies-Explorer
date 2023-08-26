import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  MoviesStackScreen,
  SearchStackScreen,
  MyListStackScreen,
  TvShowsStackScreen,
} from '../NavigationStacks/index';
import Colors from '../Constants/Colors';
import {Film24, List24, Search24, Tv24} from '../assests';

const Tab = createBottomTabNavigator();

export const ButtomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Movies"
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: Colors.lightGrayishRed,
      }}>
      <Tab.Screen
        name="Movies"
        component={MoviesStackScreen}
        options={{
          tabBarIcon: () => <Image resizeMode="cover" source={Film24} />,
        }}
      />
      <Tab.Screen
        name="TvShows"
        component={TvShowsStackScreen}
        options={{
          tabBarIcon: () => <Image resizeMode="cover" source={Tv24} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackScreen}
        options={{
          tabBarIcon: () => <Image resizeMode="cover" source={Search24} />,
        }}
      />
      <Tab.Screen
        name="MyList"
        component={MyListStackScreen}
        options={{
          tabBarIcon: () => <Image resizeMode="cover" source={List24} />,
        }}
      />
    </Tab.Navigator>
  );
};
