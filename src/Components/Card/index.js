import React from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

import {styles} from './styles';
import {
  reverseDate,
  getRateColor,
  responsiveWidth,
  responsiveFontSize,
} from '../../Utilis/helperFunctions';
import {ImageComponent} from '../ImageComponent';
import language from '../../Constants/language.json';

export const Card = props => {
  const {imageUri, title, rate, date, original_language} = props;
  return (
    <View style={styles.container}>
      <ImageComponent
        uri={imageUri}
        style={styles.image}
        resizeMode="stretch"
      />
      <View style={styles.rightSideContainer}>
        <Text numberOfLines={3} ellipsizeMode="tail" style={styles.title}>
          {title}
        </Text>
        <View style={styles.row}>
          <Ionicons
            name="language"
            size={responsiveFontSize(2)}
            color="grey"
            style={{paddingRight: responsiveWidth(2)}}
          />
          <Text style={styles.date}>{language[original_language]}</Text>
        </View>
        {date && date !== '' ? (
          <View style={styles.row}>
            <Ionicons
              name="calendar"
              size={responsiveFontSize(2)}
              color="grey"
              style={{paddingRight: responsiveWidth(2)}}
            />
            <Text style={styles.date}>{reverseDate(date)}</Text>
          </View>
        ) : null}
        <View
          style={[styles.rateContainer, {backgroundColor: getRateColor(rate)}]}>
          <Text style={styles.rate}>{rate === 0 ? 'N/A' : rate}</Text>
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
