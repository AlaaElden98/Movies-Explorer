/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {FlatList, View, TouchableOpacity, StyleSheet} from 'react-native';

import {Card} from '../Card';
import {getSearchResults} from '../../Api/getSearchResults';
import {getImagesBaseUrl} from '../../Api/getImagesBaseUrl';
import {CustomActivityIndicator} from '../CustomActivityIndicator';

export const SearchList = ({navigation}) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [imageBaseUrl, setImageBaseUrl] = useState();
  const [loadMore, setLoadMore] = useState();

  const query = useSelector(state => state.search.query);

  const getSearch = async (pageNumber, newQuery = false) => {
    if (query === '' || !query) {
      setSearchResults([]);
      return;
    }
    const data = await getSearchResults(query, pageNumber);
    searchResults && !newQuery
      ? setSearchResults([...searchResults, ...data.results])
      : setSearchResults(data.results);
    setTotalPages(data.total_pages);
  };

  useEffect(() => {
    getSearch(1, true);
  }, [query]);

  useEffect(async () => {
    const uri = await getImagesBaseUrl();
    setImageBaseUrl(uri);
  }, []);

  const handleOnPressItem = item => {
    navigation.navigate('Details', {
      parent: item.media_type,
      id: item.id,
      imageBaseUrl: imageBaseUrl,
    });
  };

  const handleEndReached = () => {
    if (page < totalPages) {
      setLoadMore(true);
      setPage(page + 1);
      getSearch(page, false);
    } else {
      setLoadMore(false);
    }
  };

  const renderItem = ({item}) => {
    const mediaType = item.media_type;
    return (
      mediaType !== 'person' &&
      item.poster_path && (
        <TouchableOpacity
          onPress={() => handleOnPressItem(item)}
          style={styles.container}>
          <Card
            title={mediaType === 'movie' ? item.title : item.name}
            overview={item.overview}
            rate={item.vote_average}
            date={
              mediaType === 'movie' ? item.release_date : item.first_air_date
            }
            original_language={item.original_language}
            imageUri={
              item.poster_path
                ? imageBaseUrl + 'original' + item.poster_path
                : null
            }
          />
        </TouchableOpacity>
      )
    );
  };

  const renderFooter = () => {
    return loadMore && searchResults?.length > 0 ? (
      <CustomActivityIndicator size={30} />
    ) : (
      <View style={{padding: 5}} />
    );
  };

  return (
    <View>
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={handleEndReached}
        ListFooterComponent={renderFooter}
        contentContainerStyle={{paddingBottom: 100}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 14,
    overflow: 'hidden',
    marginHorizontal: 14,
    flexDirection: 'row',
    borderColor: '#efe7e7',
    backgroundColor: 'white',
  },
});
