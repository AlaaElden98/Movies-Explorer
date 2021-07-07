import React, {useEffect, useState} from 'react';
import {Text, View, SafeAreaView, FlatList} from 'react-native';

import {getDataAbout} from '../Api/getData';
import {Header} from '../Components/Header';
import {Card} from '../Components/Card';
import {getImagesBaseUrl} from '../Api/getImagesBaseUrl';

const MoviesScreen = () => {
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
      <Card
        title={item.title}
        overview={item.overview}
        rate={item.vote_average}
        date={item.release_date}
        imageUri={imageBaseUrl + 'original' + item.poster_path}
      />
    );
  };
  const fetchNextPage = () => {
    pageNumber < totalPages ? setPageNumber(pageNumber + 1) : setTheEnd(1);
  };
  return (
    <SafeAreaView>
      <Header title="Movies" backgroundColor="white" titleColor="black" />
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
