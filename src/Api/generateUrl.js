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

export const generateUrl = (isMovie, type) => {
  let typePath;
  switch (type) {
    case 1:
      typePath = POPULAR_PATH;
    case 2:
      typePath = TOP_RATED;
    case 3:
      typePath = LATEST;
      break;
    default:
      typePath = POPULAR_PATH;
  }
  const url =
    TMDB_BASE_URL +
    '/' +
    API_VERSION +
    '/' +
    (isMovie ? MOVIE_PATH : TV_PATH) +
    '/' +
    typePath +
    '?' +
    API_KEY_QUERY +
    API_KEY;

  return url;
};
