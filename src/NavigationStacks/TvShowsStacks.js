import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import TvShowsScreen from '../Screens/TvShowsScreen';
import DetailsScreen from '../Screens/DetailsScreen';

const TvShowsStack = createStackNavigator();

export function TvShowsStackScreen() {
  return (
    <TvShowsStack.Navigator>
      <TvShowsStack.Screen
        name="TvShows"
        component={TvShowsScreen}
        options={{title: 'Tv shows'}}
      />
      <TvShowsStack.Screen name="Details" component={DetailsScreen} />
    </TvShowsStack.Navigator>
  );
}
