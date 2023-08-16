/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {FlatList, TouchableOpacity} from 'react-native';

import {TheEnd} from '../TheEnd';
import {Loading} from '../Loading';
import {Card} from '../../Components/Card';
import {getDataAbout} from '../../Api/getData';
import {getImagesBaseUrl} from '../../Api/getImagesBaseUrl';
import {CustomActivityIndicator} from '../CustomActivityIndicator';

export const List = ({navigation, route}) => {
  const {isMovie, type} = route.params;
  const [movies, setMovies] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [theEnd, setTheEnd] = useState(0);
  const [imageBaseUrl, setImageBaseUrl] = useState();

  const getMovies = async () => {
    const data = await getDataAbout(isMovie, type, pageNumber);
    movies ? setMovies([...movies, ...data.results]) : setMovies(data.results);
    setTotalPages(data.total_pages);
  };

  useEffect(() => {
    getMovies();
  }, [pageNumber]);

  useEffect(async () => {
    const uri = await getImagesBaseUrl();
    setImageBaseUrl(uri);
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            parent: isMovie ? 'movie' : 'tv',
            id: item.id,
            imageBaseUrl: imageBaseUrl,
          });
        }}>
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
  return (
    <FlatList
      data={movies}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onEndReachedThreshold={0.5}
      onEndReached={fetchNextPage}
      style={{backgroundColor: 'white'}}
      ListFooterComponent={
        theEnd ? TheEnd : <CustomActivityIndicator size={30} />
      }
      ListEmptyComponent={
        <CustomActivityIndicator size={60} style={{marginTop: '50%'}} />
      }
    />
  );
};

List.propTypes = {
  isMovie: PropTypes.bool,
  type: PropTypes.number,
};
