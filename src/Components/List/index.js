import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';

import {getDataAbout} from '../../Api/getData';
import {Card} from '../../Components/Card';
import {getImagesBaseUrl} from '../../Api/getImagesBaseUrl';

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
    <View>
      <FlatList
        data={movies}
        numColumns={0}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={fetchNextPage}
        style={{backgroundColor: 'white'}}
      />
    </View>
  );
};

List.propTypes = {
  isMovie: PropTypes.bool,
  type: PropTypes.number,
};
