import React from 'react';
import {LogBox} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Toast from 'react-native-toast-message';

import {ButtomTabs} from './src/Components/ButtomTabs';

const Stack = createStackNavigator();
LogBox.ignoreLogs(['Reanimated 2']);

const App = () => {
  return (
    <NavigationContainer>
      <ButtomTabs />
      <Toast ref={ref => Toast.setRef(ref)} />
    </NavigationContainer>
  );
};

export default App;
