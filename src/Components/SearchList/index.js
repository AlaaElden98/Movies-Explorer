import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

import {getSearchResults} from '../../Api/getSearchResults';

export const SearchList = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const query = useSelector(state => state.searchResults.query);

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

  const renderItem = ({item}) => {
    const name = item.name ? item.name : item.title;
    return (
      <View style={{margin: 20}}>
        <Text>{`Name : ${name}`}</Text>
      </View>
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
            : console.log('end')
        }
      />
    </View>
  );
};
