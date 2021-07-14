import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Toast from 'react-native-toast-message';

import {ButtomTabs} from './src/Components/ButtomTabs';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <ButtomTabs />
      <Toast ref={ref => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};

export default App;
