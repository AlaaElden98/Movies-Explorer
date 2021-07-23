import Config from 'react-native-config';

const API_KEY = Config.API_KEY;

const TMDB_BASE_URL = 'https://api.themoviedb.org';
const API_VERSION = 3;
const CONFIGURATION_PATH = 'configuration';
const MOVIE_PATH = 'movie';
const TV_PATH = 'tv';
const POPULAR_PATH = 'popular';
const TOP_RATED = 'top_rated';
const API_KEY_QUERY = 'api_key=';
const CREDITS_PATH = 'credits';
const PERSON_PATH = 'person';
export const generateUrl = (isMovie, type, pageNumber = 0) => {
  const url =
    TMDB_BASE_URL +
    '/' +
    API_VERSION +
    '/' +
    (isMovie ? MOVIE_PATH : TV_PATH) +
    '/' +
    (type == 1 ? POPULAR_PATH : TOP_RATED) +
    '?' +
    API_KEY_QUERY +
    API_KEY;
  return pageNumber == 0 ? url : url + `&page=${pageNumber}`;
};

export const generateConfigUrl = () => {
  return (
    TMDB_BASE_URL +
    '/' +
    API_VERSION +
    '/' +
    CONFIGURATION_PATH +
    '?' +
    API_KEY_QUERY +
    API_KEY
  );
};

export const generateDetailsUrl = (isMovie, ID) => {
  return (
    TMDB_BASE_URL +
    '/' +
    API_VERSION +
    '/' +
    (isMovie ? MOVIE_PATH : TV_PATH) +
    '/' +
    ID +
    '?' +
    API_KEY_QUERY +
    API_KEY
  );
};

export const generateCreditsUrl = (isMovie, ID) => {
  return (
    TMDB_BASE_URL +
    '/' +
    API_VERSION +
    '/' +
    (isMovie ? MOVIE_PATH : TV_PATH) +
    '/' +
    ID +
    '/' +
    CREDITS_PATH +
    '?' +
    API_KEY_QUERY +
    API_KEY
  );
};

export const generatePersonUrl = personId => {
  return (
    TMDB_BASE_URL +
    '/' +
    API_VERSION +
    '/' +
    PERSON_PATH +
    '/' +
    personId +
    '?' +
    API_KEY_QUERY +
    API_KEY
  );
};
