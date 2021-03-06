import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image} from 'react-native';

import {styles} from './styles';
import {reverseDate, getRateColor} from '../../Utilis/helperFunctions';
import language from '../../Constants/language.json';

export const Card = props => {
  const {imageUri, title, rate, date, original_language} = props;
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
        resizeMode="contain"
        style={styles.image}
      />

      <View style={styles.rightSideContainer}>
        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
        <Text style={styles.date}>{language[original_language]}</Text>
        {date && date != '' ? (
          <Text style={styles.date}>{reverseDate(date)}</Text>
        ) : null}
        <View
          style={[styles.rateContainer, {backgroundColor: getRateColor(rate)}]}>
          <Text style={styles.rate}>{rate == 0 ? 'N/A' : rate}</Text>
        </View>
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
