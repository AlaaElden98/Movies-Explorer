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

  const handleOnPressItem = item => {
    navigation.navigate('Details', {
      parent: item.parent,
      id: item.id,
      imageBaseUrl: imageBaseUrl,
    });
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => handleOnPressItem(item)}
      activeOpacity={0.7}>
      <ImageComponent
        uri={imageBaseUrl + 'original' + item.poster_path}
        resizeMode="stretch"
        style={styles.image}
      />
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        numColumns={3}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={{padding: 6}} />}
        columnWrapperStyle={styles.columnWrapper}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 15,
    width: responsiveWidth(30),
    height: responsiveHeight(30),
  },
  columnWrapper: {
    width: '100%',
    justifyContent: 'space-evenly',
  },
  contentContainer: {
    paddingVertical: 8,
    alignItems: 'flex-start',
  },
});
export default MyListScreen;
