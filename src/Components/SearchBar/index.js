import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import {View, SafeAreaView, TextInput, ToastAndroid} from 'react-native';
import {useDispatch} from 'react-redux';

import {responsiveFontSize} from '../../Utilis/helperFunctions';
import {getSearchResults} from '../../Api/getSearchResults';
import {
  addResults,
  clearResults,
  updateQuery,
} from '../../redux/searchResultsSlice';
import {styles} from './styles';

const HandleEmptySearch = () => {
  Platform.OS == 'android'
    ? ToastAndroid.show('Empty search', ToastAndroid.SHORT)
    : Toast.show({
        text1: 'Empty search',
      });
};
export const SearchBar = () => {
  const [text, onChangeText] = useState('');
  const dispatch = useDispatch();

  const updateSearchState = async () => {
    const data = await getSearchResults(text, 1);
    const searchResults = data.results;
    searchResults.length > 0
      ? dispatch(addResults(searchResults))
      : dispatch(clearResults());
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.searchBarContainer}>
        <Ionicons
          name="search"
          size={responsiveFontSize(3)}
          color="grey"
          onPress={() => {
            text ? updateSearchState() : HandleEmptySearch();
            dispatch(updateQuery(text));
          }}
        />
        <TextInput
          style={styles.searchBar}
          onChangeText={onChangeText}
          value={text}
          placeholder="Search for movies, tv shows, or actors"
          returnKeyType="search"
          onSubmitEditing={() => {
            text ? updateSearchState() : HandleEmptySearch();
            dispatch(updateQuery(text));
          }}
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
