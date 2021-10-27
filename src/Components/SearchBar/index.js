import React, {useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Toast from 'react-native-toast-message';
import {View, TextInput, ToastAndroid} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import {responsiveFontSize} from '../../Utilis/helperFunctions';
import {updateQuery} from '../../redux/searchSlice';
import {styles} from './styles';

export const SearchBar = () => {
  const [text, onChangeText] = useState('');
  const dispatch = useDispatch();
  const currentQuery = useSelector(state => state.search.query);

  const updateQueryState = async () => {
    if (currentQuery === text) return;
    dispatch(updateQuery(text));
  };

  const HandleEmptySearch = () => {
    Platform.OS == 'android'
      ? ToastAndroid.show('Empty search', ToastAndroid.SHORT)
      : Toast.show({
          text1: 'Empty search',
        });
    dispatch(updateQuery(''));
  };

  return (
    <View style={styles.searchBarContainer}>
      <Ionicons
        name="search"
        size={responsiveFontSize(3)}
        color="grey"
        onPress={() => {
          text ? updateQueryState() : HandleEmptySearch();
        }}
      />
      <TextInput
        style={styles.searchBar}
        onChangeText={onChangeText}
        value={text}
        placeholder="Search for movies, tv shows, or actors"
        returnKeyType="search"
        onSubmitEditing={() => {
          text ? updateQueryState() : HandleEmptySearch();
        }}
      />
      {text != '' && (
        <Ionicons
          name="close"
          size={responsiveFontSize(3)}
          color="grey"
          onPress={() => {
            onChangeText('');
            dispatch(updateQuery(''));
          }}
        />
      )}
    </View>
  );
};
