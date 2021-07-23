import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from 'react-native';

import {getDataAbout} from '../Api/getData';
import {Card} from '../Components/Card';
import {getImagesBaseUrl} from '../Api/getImagesBaseUrl';
import {responsiveFontSize} from '../Utilis/helperFunctions';

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
  }, []);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            parent: 'movie',
            id: item.id,
            imageBaseUrl: imageBaseUrl,
          });
        }}>
        <Card
          title={item.title}
          overview={item.overview}
          rate={item.vote_average}
          date={item.release_date}
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
    <SafeAreaView>
      <View style={styles.seperator} />
      <View style={styles.header}>
        <Text style={{fontSize: responsiveFontSize(3)}}>Most Popular</Text>
      </View>
      <FlatList
        data={movies}
        numColumns={0}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        onEndReachedThreshold={0.5}
        onEndReached={fetchNextPage}
        style={{backgroundColor: 'white'}}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  header: {
    padding: 15,
    backgroundColor: 'white',
  },
  seperator: {
    height: 0.5,
    backgroundColor: 'grey',
  },
});
export default MoviesScreen;
