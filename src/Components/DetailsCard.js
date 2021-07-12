import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, StyleSheet} from 'react-native';

import {responsiveFontSize, responsiveWidth} from '../Utilis/helperFunctions';

export const DetailsCard = props => {
  const {
    title,
    overview, // could be null
    vote_average,
    status,
    tagline, // could be null
    revenue,
    runtime, //could be null
    release_date,
    budget,
    original_language,
    poster_path,
    homepage, // could be null
    genres, // [id,name]
    cast, // [name, profile_path]
  } = props.details;

  const imageBaseUrl = props.imageBaseUrl;

  const ImageUrl = path => {
    return path != null ? imageBaseUrl + 'original' + path : 'NO_IMAGE';
  };
  return (
    <View>
      <Text>{title}</Text>
      <Text>{vote_average}</Text>
      <Text>{cast[0].name}</Text>
      <Text>{homepage}</Text>
    </View>
  );
};

DetailsCard.propTypes = {
  title: PropTypes.string,
  overview: PropTypes.string,
  vote_average: PropTypes.number,
  status: PropTypes.oneOf([
    'Rumored',
    'Planned',
    'In Production',
    'Post Production',
    'Released',
    'Canceled',
  ]),
  tagline: PropTypes.string,
  revenue: PropTypes.number,
  runtime: PropTypes.number,
  release_date: PropTypes.string,
  budget: PropTypes.number,
  original_language: PropTypes.string,
  homepage: PropTypes.string,
  imageBaseUri: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.object),
  cast: PropTypes.arrayOf(PropTypes.object),
};
