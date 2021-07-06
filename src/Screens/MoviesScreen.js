import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';
import {getPopularMovies} from '../Api/getMovies';
const MoviesScreen = () => {
  getPopularMovies();
  return (
    <SafeAreaView>
      <Text>MoviesScreen</Text>
    </SafeAreaView>
  );
};

export default MoviesScreen;
