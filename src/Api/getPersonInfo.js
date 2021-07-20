import axios from 'axios';

import {generatePersonUrl} from './generateUrl';

/**
 *  get the data from API
 * @param {number} pesonId the id of the person
 */

export const getPersonInfo = async personId => {
  const url = generatePersonUrl(personId);
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
