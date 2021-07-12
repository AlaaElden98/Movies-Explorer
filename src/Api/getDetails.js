import axios from 'axios';

import {generateDetailsUrl} from './generateUrl';

/**
 *  get the data from API
 * @param {boolean} isMovie if true, the path = movies, otherwise path = tv shows
 * @param {number} ID the id of the movie/tv show we want it's detailes
 */

export const getDetails = async (isMovie, ID) => {
  const url = generateDetailsUrl(isMovie, ID);
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
