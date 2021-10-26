import React from 'react';
import {StyleSheet, View} from 'react-native';

import {SearchBar} from '../Components/SearchBar';
import {SearchList} from '../Components/SearchList';

const SearchScreen = () => {
  return (
    <View style={styles.screen}>
      <SearchBar />
      <SearchList />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {backgroundColor: 'white', flex: 1},
});
export default SearchScreen;
