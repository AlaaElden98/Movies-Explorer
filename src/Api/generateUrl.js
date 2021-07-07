import Config from 'react-native-config';

const API_KEY = Config.API_KEY;

const TMDB_BASE_URL = 'https://api.themoviedb.org';
const API_VERSION = 3;
const CONFIGURATION_PATH = 'configuration';
const MOVIE_PATH = 'movie';
const TV_PATH = 'tv';
const POPULAR_PATH = 'popular';
const TOP_RATED = 'top_rated';
const LATEST = 'latest';
const API_KEY_QUERY = 'api_key=';

export const generateUrl = (isMovie, type, pageNumber = 0) => {
  const url =
    TMDB_BASE_URL +
    '/' +
    API_VERSION +
    '/' +
    (isMovie ? MOVIE_PATH : TV_PATH) +
    '/' +
    (type == 1 ? POPULAR_PATH : type == 2 ? TOP_RATED : LATEST) +
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
