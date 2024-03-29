import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';

import {getDetails} from '../Api/getDetails';
import {getCredits} from '../Api/getCredits';
import {DetailsCard} from '../Components/DetailsCard';
import {CustomActivityIndicator} from '../Components/CustomActivityIndicator';

const DetailsScreen = ({route}) => {
  const {parent, id, imageBaseUrl} = route.params;
  const [details, setDetails] = useState();

  useEffect(() => {
    async function getMovieDetail() {
      const data = await getDetails(parent === 'movie' ? true : false, id);
      const credits = await getCredits(parent === 'movie' ? true : false, id);
      setDetails({...data, ...credits, id: id, parent: parent});
    }
    getMovieDetail();
  }, [id, parent]);

  return (
    <View style={{flex: 1}}>
      {details ? (
        <DetailsCard details={details} imageBaseUrl={imageBaseUrl} />
      ) : (
        <CustomActivityIndicator
          size={60}
          style={{flex: 1, justifyContent: 'center'}}
        />
      )}
    </View>
  );
};

DetailsScreen.propTypes = {
  parent: PropTypes.oneOf(['movie', 'tv']),
  id: PropTypes.number,
  imageUri: PropTypes.string,
};
export default DetailsScreen;
