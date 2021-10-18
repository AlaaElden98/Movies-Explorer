import React from 'react';

import {SafeAreaView, StyleSheet} from 'react-native';
import {SearchBar} from '../Components/SearchBar';
const SearchScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {backgroundColor: 'white', flex: 1},
});
export default SearchScreen;
