import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import {List} from '../Components/List';

const Tab = createMaterialTopTabNavigator();

const TvShowsScreen = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Popular"
        component={List}
        initialParams={{isMovie: false, type: 1}}
      />
      <Tab.Screen
        name="Top Rated"
        component={List}
        initialParams={{isMovie: false, type: 2}}
      />
    </Tab.Navigator>
  );
};

export default TvShowsScreen;
