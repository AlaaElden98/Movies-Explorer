import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MyListScreen from '../Screens/MyListScreen';
import DetailsScreen from '../Screens/DetailsScreen';

const MyListStack = createStackNavigator();

export function MyListStackScreen() {
  return (
    <MyListStack.Navigator>
      <MyListStack.Screen
        name="MyList"
        component={MyListScreen}
        options={{title: 'My list'}}
      />
      <MyListStack.Screen name="Details" component={DetailsScreen} />
    </MyListStack.Navigator>
  );
}
