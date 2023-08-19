/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {View, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import {getImagesBaseUrl} from '../Api/getImagesBaseUrl';
import {ImageComponent} from '../Components/ImageComponent';
import {getListFromAsyncStorage} from '../redux/myListSlice';
import {responsiveHeight, responsiveWidth} from '../Utilis/helperFunctions';

const MyListScreen = ({navigation, route}) => {
  const dispatch = useDispatch();

  const getMyList = () => {
    dispatch(getListFromAsyncStorage());
  };

  const [imageBaseUrl, setImageBaseUrl] = useState();

  useEffect(async () => {
    const uri = await getImagesBaseUrl();
    setImageBaseUrl(uri);
  }, []);
  useEffect(() => {
    getMyList();
  }, []);

  const DATA = useSelector(state => state.myList.items);

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Details', {
          parent: item.parent,
          id: item.id,
          imageBaseUrl: imageBaseUrl,
        });
      }}>
      <ImageComponent
        uri={imageBaseUrl + 'original' + item.poster_path}
        resizeMode="cover"
        style={styles.image}
      />
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1, margin: 10}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    margin: 5,
    borderRadius: 15,
    width: responsiveWidth(30),
    height: responsiveHeight(30),
  },
});
export default MyListScreen;
