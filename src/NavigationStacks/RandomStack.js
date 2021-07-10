import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import RandomScreen from '../Screens/RandomScreen';
import DetailsScreen from '../Screens/DetailsScreen';

const RandomStack = createStackNavigator();

export function RandomStackScreen() {
  return (
    <RandomStack.Navigator>
      <RandomStack.Screen name="Random" component={RandomScreen} />
      <RandomStack.Screen name="Details" component={DetailsScreen} />
    </RandomStack.Navigator>
  );
}
