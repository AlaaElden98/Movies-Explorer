import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import {getPopularMovies} from '../Api/getMovies';
import {Header} from '../Components/Header';

const MoviesScreen = () => {
  return (
    <SafeAreaView>
      <Header title="Movies" backgroundColor="white" titleColor = 'black'/>
      <Text>MoviesScreen</Text>
    </SafeAreaView>
  );
};

export default MoviesScreen;
