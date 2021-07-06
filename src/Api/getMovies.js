import axios from 'axios';
import {
  TMDB_BASE_URL,
  API_VERSION,
  MOVIE_PATH,
  POPULAR_PATH,
  API_KEY_QUERY,
} from './constants';
import Config from 'react-native-config';

const API_KEY = Config.API_KEY;
const URL =
  TMDB_BASE_URL +
  '/' +
  API_VERSION +
  '/' +
  MOVIE_PATH +
  '/' +
  POPULAR_PATH +
  '?' +
  API_KEY_QUERY +
  API_KEY;

export const getPopularMovies = () => {
  axios
    .get(URL)
    .then(response => {
      console.log(response.status);
    })
    .catch(error => {
      console.log(error);
    })
    .then(() => {
      console.log('FINALLY');
    });
};
