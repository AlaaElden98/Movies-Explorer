import React, {useEffect, useState} from 'react';
import {FlatList, Text, View, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';

import {getSearchResults} from '../../Api/getSearchResults';
import {getImagesBaseUrl} from '../../Api/getImagesBaseUrl';

import {Card} from '../Card';

export const SearchList = ({navigation}) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [imageBaseUrl, setImageBaseUrl] = useState();

  const query = useSelector(state => state.search.query);

  const getSearch = async (pageNumber, newQuery = false) => {
    if (query === '' || !query) {
      setSearchResults();
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

  const renderItem = ({item}) => {
    const mediaType = item.media_type;
    return (
      mediaType !== 'person' && (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Details', {
              parent: mediaType,
              id: item.id,
              imageBaseUrl: imageBaseUrl,
            });
          }}>
          <Card
            title={mediaType === 'movie' ? item.title : item.name}
            overview={item.overview}
            rate={item.vote_average}
            date={
              mediaType === 'movie' ? item.release_date : item.first_air_date
            }
            original_language={item.original_language}
            imageUri={
              item.poster_path != null
                ? imageBaseUrl + 'original' + item.poster_path
                : 'NO_IMAGE'
            }
          />
        </TouchableOpacity>
      )
    );
  };

  return (
    <View>
      <FlatList
        data={searchResults}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={
          page < totalPages
            ? () => {
                setPage(page + 1);
                getSearch(page, false);
              }
            : null
        }
      />
    </View>
  );
};
