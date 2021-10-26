import React, {useEffect, useState} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {pushToCurrentResults} from '../../redux/searchResultsSlice';
import {getSearchResults} from '../../Api/getSearchResults';

export const SearchList = () => {
  const [page, setPage] = useState(2);
  const dispatch = useDispatch();
  const searchResults = useSelector(state => state.searchResults.results);
  const query = useSelector(state => state.searchResults.query);
  const totalPages = useSelector(state => state.searchResults.totalPages);

  //   useEffect(() => {
  //     console.log('EFFECT');
  //     setPage(2);
  //   }, [query]);
  const fetchNextResultPage = async () => {
    console.log('pa', totalPages);
    // const data = await getSearchResults(query, page);
    // setPage(page + 1);
    // dispatch(pushToCurrentResults(data.results));
  };

  const renderItem = ({item}) => {
    return (
      <View style={{margin: 20}}>
        <Text>{item.media_type}</Text>
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
            ? fetchNextResultPage
            : console.log('End of results')
        }
      />
    </View>
  );
};
