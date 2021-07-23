import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View, Text} from 'react-native';

import {PosterRow} from '../PosterRow';
import {ButtonsRow} from '../ButtonsRow';
import {DetailsRow} from '../DetailsRow';
import {CastRow} from '../CastRow';
import {ImageUrl} from '../../Utilis/helperFunctions';
import {PersonModal} from '../PersonModal';
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
    cast, // [name, profile_path, id]
    name,
    number_of_episodes,
    first_air_date,
    number_of_seasons,
  } = props.details;
  const imageBaseUrl = props.imageBaseUrl;

  const [showImage, setShowImage] = useState(false);
  const [modal, showModal] = useState(false);
  const [ids, setId] = useState();
  const images = [
    {uri: ImageUrl(imageBaseUrl, poster_path)},
    {uri: ImageUrl(imageBaseUrl, backdrop_path)},
  ];
  const handleImage = () => {
    setShowImage(!showImage);
  };
  const handleModal = ids => {
    console.log(ids);
    showModal(true);
    setId(ids);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <PosterRow
          images={images}
          onPress={handleImage}
          showImage={showImage}
          backgroundImage={ImageUrl(imageBaseUrl, backdrop_path)}
          title={parent == 'movie' ? title : name}
          tagline={tagline}
          rate={vote_average}
        />
        <ButtonsRow homepage={homepage} title={title} id={id} parent={parent} />
        <DetailsRow
          runtime={runtime}
          status={status}
          revenue={revenue}
          release_date={parent == 'movie' ? release_date : first_air_date}
          budget={budget}
          original_language={original_language}
          genres={genres}
          number_of_episodes={number_of_episodes}
          number_of_seasons={number_of_seasons}
        />
        {overview && (
          <View style={styles.overvieContainer}>
            <Text style={styles.overviewTitle}>Overview</Text>
            <Text style={styles.overviewBody}>{overview}</Text>
          </View>
        )}
        <CastRow
          cast={cast}
          imageBaseUrl={imageBaseUrl}
          handleModal={id => handleModal(id)}
        />
      </ScrollView>
      {modal && (
        <PersonModal
          id={ids}
          onClosed={() => showModal(false)}
          imageBaseUrl={imageBaseUrl}
        />
      )}
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
