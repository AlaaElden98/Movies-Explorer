import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MoviesScreen from '../Screens/MoviesScreen';
import DetailsScreen from '../Screens/DetailsScreen';

const MoviesStack = createStackNavigator();

export function MoviesStackScreen() {
  return (
    <MoviesStack.Navigator>
      <MoviesStack.Screen name="Movies" component={MoviesScreen} />
      <MoviesStack.Screen name="Details" component={DetailsScreen} />
    </MoviesStack.Navigator>
  );
}
