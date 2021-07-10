import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {getDataAbout} from '../Api/getData';
import {Card} from '../Components/Card';
import {getImagesBaseUrl} from '../Api/getImagesBaseUrl';
import DetailsScreen from './DetailsScreen';

const MoviesScreen = ({navigation}) => {
  const [movies, setMovies] = useState();
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [theEnd, setTheEnd] = useState(0);
  const [imageBaseUrl, setImageBaseUrl] = useState();

  const getMovies = async () => {
    const data = await getDataAbout(1, 1, pageNumber);
    movies ? setMovies([...movies, ...data.results]) : setMovies(data.results);
    setTotalPages(data.total_pages);
  };

  useEffect(() => {
    getMovies();
  }, [pageNumber]);

  useEffect(async () => {
    const uri = await getImagesBaseUrl();
    setImageBaseUrl(uri);
    console.log('AAAAAA');
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {details: item})}>
        <Card
          title={item.title}
          overview={item.overview}
          rate={item.vote_average}
          date={item.release_date}
          imageUri={
            item.poster_path != null
              ? imageBaseUrl + 'original' + item.poster_path
              : null
          }
        />
      </TouchableOpacity>
    );
  };
  const fetchNextPage = () => {
    pageNumber < totalPages ? setPageNumber(pageNumber + 1) : setTheEnd(1);
  };
  return (
    <SafeAreaView>
      <FlatList
        data={movies}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={fetchNextPage}
      />
    </SafeAreaView>
  );
};

export default MoviesScreen;
