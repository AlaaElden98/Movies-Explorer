import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {ButtomTabs} from './src/Components/ButtomTabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ButtomTabs />
    </NavigationContainer>
  );
};

export default App;
