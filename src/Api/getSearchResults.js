import axios from 'axios';

import {generateSearchUrl} from './generateUrl';

/**
 *  get the data from API
 * @param {string} query the search query
 * @param {number} page the number of the page, default to one
 */

export const getSearchResults = async (query, page = 1) => {
  const url = generateSearchUrl(query, page);
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {}
};
