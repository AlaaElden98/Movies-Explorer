import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import Config from 'react-native-config';
const MoviesScreen = () => {
  console.log(Config.API_KEY);
  return (
    <SafeAreaView>
      <Text>MoviesScreen</Text>
    </SafeAreaView>
  );
};

export default MoviesScreen;
