import React, {useState, useEffect} from 'react';
import {Text, ScrollView} from 'react-native';
import PropTypes from 'prop-types';

import {getDetails} from '../Api/getDetails';
import {getCredits} from '../Api/getCredits';
import {DetailsCard} from '../Components/DetailsCard';

const DetailsScreen = ({route}) => {
  const {parent, id, imageBaseUrl} = route.params;
  const [details, setDetails] = useState();
  const getMovieDetail = async () => {
    const data = await getDetails(parent == 'movies' ? true : false, id);
    const credits = await getCredits(parent == 'movies' ? true : false, id);
    setDetails({...data, ...credits});
  };
  useEffect(() => {
    getMovieDetail();
  }, []);
  return (
    <ScrollView>
      {details ? (
        <DetailsCard details={details} imageBaseUrl={imageBaseUrl} />
      ) : (
        <Text>Loading...</Text>
      )}
    </ScrollView>
  );
};

DetailsScreen.propTypes = {
  parent: PropTypes.oneOf(['movies', 'tv']),
  id: PropTypes.number,
  imageUri: PropTypes.string,
};
export default DetailsScreen;
