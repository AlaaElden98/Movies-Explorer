import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import SearchScreen from '../Screens/SearchScreen';
import DetailsScreen from '../Screens/DetailsScreen';

const SearchStack = createStackNavigator();

export function SearchStackScreen() {
  return (
    <SearchStack.Navigator>
      <SearchStack.Screen
        name="Search"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <SearchStack.Screen name="Details" component={DetailsScreen} />
    </SearchStack.Navigator>
  );
}
