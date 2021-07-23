import React from 'react';
import {StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {List} from '../Components/List';

const Tab = createMaterialTopTabNavigator();

const MoviesScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Popular"
        component={List}
        initialParams={{isMovie: true, type: 1}}
      />
      <Tab.Screen
        name="Top Rated"
        component={List}
        initialParams={{isMovie: true, type: 2}}
      />
    </Tab.Navigator>
  );
};

export default MoviesScreen;
