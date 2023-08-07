/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {getImagesBaseUrl} from '../Api/getImagesBaseUrl';
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
      <Image
        source={
          !item.poster_path
            ? require('../assests/NO_IMAGE.jpg')
            : {
                uri: imageBaseUrl + 'original' + item.poster_path,
              }
        }
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
    width: responsiveWidth(30),
    height: responsiveHeight(30),
    borderRadius: 15,
    margin: 5,
  },
});
export default MyListScreen;
