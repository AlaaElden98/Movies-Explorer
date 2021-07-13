import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ScrollView} from 'react-native';

import {PosterRow} from './PosterRow';

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
    backdrop_path,
    homepage, // could be null
    genres, // [id,name]
    cast, // [name, profile_path]
  } = props.details;

  const [showImage, setShowImage] = useState(false);
  const imageBaseUrl = props.imageBaseUrl;

  const ImageUrl = path => {
    return path != null ? imageBaseUrl + 'original' + path : 'NO_IMAGE';
  };

  const images = [{uri: ImageUrl(poster_path)}, {uri: ImageUrl(backdrop_path)}];
  const handleImage = () => {
    setShowImage(!showImage);
  };
  return (
    <ScrollView>
      <PosterRow
        images={images}
        onPress={handleImage}
        showImage={showImage}
        backgroundImage={ImageUrl(backdrop_path)}
        title={title}
        tagline={tagline}
        rate={vote_average}
      />
    </ScrollView>
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
