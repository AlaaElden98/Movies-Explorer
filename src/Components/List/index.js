import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {useDispatch} from 'react-redux';
import {FlatList, StyleSheet, TouchableOpacity} from 'react-native';

import {TheEnd} from '../TheEnd';
import {Card} from '../../Components/Card';
import Colors from '../../Constants/Colors';
import {getDataAbout} from '../../Api/getData';
import {getImagesBaseUrl} from '../../Api/getImagesBaseUrl';
import {updateTrendingSearches} from '../../redux/searchSlice';
import {CustomActivityIndicator} from '../CustomActivityIndicator';

export const List = ({navigation, route}) => {
  const {isMovie, type} = route.params;
  const [movies, setMovies] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [theEnd, setTheEnd] = useState(0);
  const [imageBaseUrl, setImageBaseUrl] = useState();
  const dispatch = useDispatch();
  let firstTimeFetching = true;

  const getMovies = async () => {
    const data = await getDataAbout(isMovie, type, pageNumber);
    movies ? setMovies([...movies, ...data.results]) : setMovies(data.results);
    setTotalPages(data.total_pages);
    hanldeTrendingSearch(data.results);
  };

  useEffect(() => {
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageNumber]);

  useEffect(() => {
    async function fetchData() {
      const uri = await getImagesBaseUrl();
      setImageBaseUrl(uri);
    }
    fetchData();
  }, []);

  const handleOnPressItem = item => {
    navigation.navigate('Details', {
      parent: isMovie ? 'movie' : 'tv',
      id: item.id,
      imageBaseUrl: imageBaseUrl,
    });
  };

  const hanldeTrendingSearch = data => {
    if (firstTimeFetching && data && isMovie && type === 3) {
      const trendingMovies = data.slice(0, 15);
      dispatch(updateTrendingSearches(trendingMovies));
      firstTimeFetching = false;
    }
  };

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => handleOnPressItem(item)}
        activeOpacity={0.7}
        style={styles.container}
      >
        <Card
          title={isMovie ? item.title : item.name}
          overview={item.overview}
          rate={item.vote_average}
          date={isMovie ? item.release_date : item.first_air_date}
          original_language={item.original_language}
          imageUri={
            item.poster_path != null
              ? imageBaseUrl + 'original' + item.poster_path
              : 'NO_IMAGE'
          }
        />
      </TouchableOpacity>
    );
  };

  const fetchNextPage = () => {
    pageNumber < totalPages ? setPageNumber(pageNumber + 1) : setTheEnd(1);
  };

  return movies && movies.length ? (
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onEndReachedThreshold={0.5}
      onEndReached={fetchNextPage}
      style={{backgroundColor: Colors.lightGray}}
      ListFooterComponent={
        theEnd ? TheEnd : <CustomActivityIndicator size={30} />
      }
      ListEmptyComponent={
        <CustomActivityIndicator size={60} style={{marginTop: '50%'}} />
      }
    />
  ) : (
    <CustomActivityIndicator size={60} style={{marginTop: '50%'}} />
  );
};

List.propTypes = {
  isMovie: PropTypes.bool,
  type: PropTypes.number,
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
    backgroundColor: 'white',
    borderColor: Colors.lightGrayishRed2,
  },
});
