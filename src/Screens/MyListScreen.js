import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from '../Utilis/helperFunctions';
import Colors from '../Constants/Colors';
import {MyListEmptyState} from '../assests';
import {getImagesBaseUrl} from '../Api/getImagesBaseUrl';
import {ImageComponent} from '../Components/ImageComponent';
import {getListFromAsyncStorage} from '../redux/myListSlice';

const MyListScreen = ({navigation, route}) => {
  const dispatch = useDispatch();

  const getMyList = () => {
    dispatch(getListFromAsyncStorage());
  };

  const [imageBaseUrl, setImageBaseUrl] = useState();

  useEffect(() => {
    async function fetchData() {
      const uri = await getImagesBaseUrl();
      setImageBaseUrl(uri);
    }
    fetchData();
  }, []);

  useEffect(() => {
    getMyList();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      activeOpacity={0.7}
    >
      <ImageComponent
        uri={imageBaseUrl + 'original' + item.poster_path}
        resizeMode="stretch"
        style={styles.image}
      />
    </TouchableOpacity>
  );

  const handleOnPressEmptyState = () => {
    navigation.navigate('Movies');
  };

  const renderEmptyState = () => (
    <TouchableOpacity
      style={styles.emptyStateContainer}
      onPress={handleOnPressEmptyState}
      activeOpacity={0.9}
    >
      <Image
        source={MyListEmptyState}
        style={{width: responsiveWidth(70), height: responsiveHeight(35)}}
        resizeMode="cover"
      />
      <Text style={styles.emptyStateText}>
        Add Movies and Tv-shows to see them here!
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={{flex: 1}}>
      {DATA && DATA.length > 0 ? (
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          numColumns={3}
          contentContainerStyle={styles.contentContainer}
          ItemSeparatorComponent={() => <View style={{padding: 6}} />}
          columnWrapperStyle={styles.columnWrapper}
        />
      ) : (
        renderEmptyState()
      )}
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
  emptyStateContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyStateText: {
    width: '100%',
    color: Colors.darkGray,
    marginLeft: responsiveWidth(20),
    fontSize: responsiveFontSize(1.8),
  },
});
export default MyListScreen;
