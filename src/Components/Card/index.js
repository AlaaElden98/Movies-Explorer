import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';

export const Card = props => {
  const {imageUri, title, overview, rate, date} = props;
  return (
    <View style={styles.container}>
      <Image
        source={
          imageUri == 'NO_IMAGE'
            ? require('../../assests/NO_IMAGE.jpg')
            : {
                uri: imageUri,
              }
        }
        resizeMode="stretch"
        style={styles.image}
      />
      <View style={styles.rightSideContainer}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
        <Text numberOfLines={8} ellipsizeMode="tail" style={styles.overview}>
          {overview}
        </Text>
        <Text style={styles.rate}>{rate}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  imageUri: PropTypes.string,
  overview: PropTypes.string,
  rate: PropTypes.number.isRequired,
  date: PropTypes.string,
};
