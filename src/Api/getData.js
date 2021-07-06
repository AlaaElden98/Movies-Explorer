import axios from 'axios';

import {generateUrl} from './generateUrl';

/**
 *  get the data from API
 * @param {boolean} isMovie if true, the path = movies, otherwise path = tv shows
 * @param {number} type 1 for popular, 2 for top rated, 3 for latest
 */
export const getDataAbout = (isMovie, type) => {
  const url = generateUrl(isMovie, type);
  axios
    .get(url)
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
