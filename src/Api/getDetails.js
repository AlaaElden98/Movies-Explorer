import axios from 'axios';

import {generateDetailsUrl, generateImagesUrl} from './generateUrl';

/**
 *  get the data from API
 * @param {boolean} isMovie if true, the path = movies, otherwise path = tv shows
 * @param {number} ID the id of the movie/tv show we want it's detailes
 * @param {boolean} images if true, get images of movie/tv show
 */

export const getDetails = async (isMovie, ID, images = false) => {
  const url = images
    ? generateImagesUrl(isMovie, ID)
    : generateDetailsUrl(isMovie, ID);
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {}
};
