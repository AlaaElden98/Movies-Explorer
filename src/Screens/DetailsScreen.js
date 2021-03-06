import React, {useState, useEffect} from 'react';
import {Text, View} from 'react-native';
import PropTypes from 'prop-types';

import {getDetails} from '../Api/getDetails';
import {getCredits} from '../Api/getCredits';
import {DetailsCard} from '../Components/DetailsCard';

const DetailsScreen = ({route}) => {
  const {parent, id, imageBaseUrl} = route.params;
  const [details, setDetails] = useState();
  const getMovieDetail = async () => {
    const data = await getDetails(parent == 'movie' ? true : false, id);
    const credits = await getCredits(parent == 'movie' ? true : false, id);
    setDetails({...data, ...credits, id: id, parent: parent});
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <View style={{flex: 1}}>
      {details ? (
        <DetailsCard details={details} imageBaseUrl={imageBaseUrl} />
      ) : (
        <Text>Loading...</Text>
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
