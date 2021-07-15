import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View, Text} from 'react-native';

import {PosterRow} from '../PosterRow';
import {ButtonsRow} from '../ButtonsRow';
import {DetailsRow} from '../DetailsRow.js/index.js';
import {styles} from './styles';

export const DetailsCard = props => {
  const {
    id,
    parent,
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
      <ButtonsRow homepage={homepage} title={title} id={id} parent={parent} />
      <DetailsRow
        runtime={runtime}
        status={status}
        revenue={revenue}
        release_date={release_date}
        budget={budget}
        original_language={original_language}
        genres={genres}
      />
      {overview && (
        <View style={styles.overvieContainer}>
          <Text style={styles.overviewTitle}>Overview</Text>
          <Text style={styles.overviewBody}>{overview}</Text>
        </View>
      )}
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
