import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, SafeAreaView, TextInput} from 'react-native';

import {responsiveFontSize} from '../../Utilis/helperFunctions';
import {styles} from './styles';
export const SearchBar = () => {
  const [text, onChangeText] = useState('');
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.searchBarContainer}>
        <Ionicons
          name="search"
          size={responsiveFontSize(3)}
          color="grey"
          onPress={() => console.log(`Start Searching on ${text}`)}
        />
        <TextInput
          style={styles.searchBar}
          onChangeText={onChangeText}
          value={text}
          placeholder="Search for movies, tv shows, or actors"
          returnKeyType="search"
          onSubmitEditing={() => console.log('Start Searching')}
        />
        {text != '' && (
          <Ionicons
            name="close"
            size={responsiveFontSize(3)}
            color="grey"
            onPress={() => onChangeText('')}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
