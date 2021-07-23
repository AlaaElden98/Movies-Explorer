import axios from 'axios';

import {generateUrl} from './generateUrl';

/**
 *  get the data from API
 * @param {boolean} isMovie if true, the path = movies, otherwise path = tv shows
 * @param {number} type 1 for popular, 2 for top rated
 */
export const getDataAbout = async (isMovie, type, pageNumber) => {
  const url = generateUrl(isMovie, type, pageNumber);
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
