import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MoviesScreen from '../Screens/MoviesScreen';
import TvShowesScreen from '../Screens/TvShowesScreen';
import MyListScreen from '../Screens/MyListScreen';
import SuggestScreen from '../Screens/SuggestScreen';

const Tab = createBottomTabNavigator();

export const ButtomTabs = () => {
  return (
    <Tab.Navigator initialRouteName="Movies">
      <Tab.Screen name="Movies" component={MoviesScreen} />
      <Tab.Screen name="TvShows" component={TvShowesScreen} />
      <Tab.Screen name="Suggest" component={SuggestScreen} />
      <Tab.Screen name="MyList" component={MyListScreen} />
    </Tab.Navigator>
  );
};
