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
        name="Upcoming"
        component={List}
        initialParams={{isMovie: true, type: 3}}
      />
    </Tab.Navigator>
  );
};

export default MoviesScreen;
