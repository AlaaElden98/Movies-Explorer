import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import {getDataAbout} from '../Api/getData';
import {Header} from '../Components/Header';

const MoviesScreen = () => {
  getDataAbout(true, 1);
  return (
    <SafeAreaView>
      <Header title="Movies" backgroundColor="white" titleColor="black" />
      <Text>MoviesScreen</Text>
    </SafeAreaView>
  );
};

export default MoviesScreen;
