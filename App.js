import React, {useEffect} from 'react';
import {LogBox} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store';
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';
import {NavigationContainer} from '@react-navigation/native';

import {ButtomTabs} from './src/Components/ButtomTabs';

LogBox.ignoreLogs(['Reanimated 2']);
LogBox.ignoreLogs(['Encountered two children']);

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ButtomTabs />
        <Toast />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
