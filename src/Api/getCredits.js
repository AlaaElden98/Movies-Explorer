import axios from 'axios';

import {generateCreditsUrl} from './generateUrl';

/**
 *  get the data from API
 * @param {boolean} isMovie if true, the path = movies, otherwise path = tv shows
 * @param {number} ID the id of the movie/tv show we want it's detailes
 */

export const getCredits = async (isMovie, ID) => {
  const url = generateCreditsUrl(isMovie, ID);
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
