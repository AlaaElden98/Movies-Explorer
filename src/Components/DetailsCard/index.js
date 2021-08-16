import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {ScrollView, View, Text} from 'react-native';

import {PosterRow} from '../PosterRow';
import {ButtonsRow} from '../ButtonsRow';
import {DetailsRow} from '../DetailsRow';
import {CastRow} from '../CastRow';
import {ImageUrl} from '../../Utilis/helperFunctions';
import {PersonModal} from '../PersonModal';
import {styles} from './styles';
import {getDetails} from '../../Api/getDetails';

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
  const [personId, setPersonId] = useState();
  const [images, setImages] = useState([]);

  useEffect(async () => {
    let backDrops = [];

    const data = await getDetails(parent == 'movie' ? true : false, id, true);

    for (let i = 0; i < data.backdrops.length; ++i) {
      backDrops.push({
        uri: ImageUrl(imageBaseUrl, data.backdrops[i].file_path),
      });
    }
    setImages(backDrops);
  }, []);
  const handleModal = personId => {
    showModal(true);
    setPersonId(personId);
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        <PosterRow
          images={images}
          onPress={() => setShowImage(true)}
          onClose={() => setShowImage(false)}
          showImage={showImage}
          backgroundImage={
            backdrop_path ? ImageUrl(imageBaseUrl, backdrop_path) : 'NO_IMAGE'
          }
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
        {(overview || overview != '') && (
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
          id={personId}
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
