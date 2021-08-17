import React, {useEffect, useState} from 'react';
import {Text, View, FlatList, Image, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

import {getImagesBaseUrl} from '../Api/getImagesBaseUrl';
import {responsiveHeight, responsiveWidth} from '../Utilis/helperFunctions';

const MyListScreen = () => {
  const DATA = useSelector(state => state.myList.items);
  const [imageBaseUrl, setImageBaseUrl] = useState();

  useEffect(async () => {
    const uri = await getImagesBaseUrl();
    setImageBaseUrl(uri);
  }, []);

  const renderItem = ({item}) => (
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
