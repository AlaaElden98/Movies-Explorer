import axios from 'axios';

import {generateConfigUrl} from './generateUrl';

export const getImagesBaseUrl = async () => {
  try {
    const response = await axios.get(generateConfigUrl());
    return response.data.images.secure_base_url;
  } catch (error) {}
};
