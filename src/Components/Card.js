import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, Image, StyleSheet} from 'react-native';

import {responsiveFontSize, responsiveWidth} from '../Utilis/helperFunctions';

export const Card = props => {
  const {imageUri, title, overview, rate, date} = props;
  return (
    <View style={styles.container}>
      <Image
        source={
          imageUri == 'NO_IMAGE'
            ? require('../assests/NO_IMAGE.jpg')
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 10,
    margin: 8,
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 0,
  },
  imageContainer: {},
  image: {
    width: responsiveWidth(30),
    height: responsiveWidth(65),
    borderRadius: 8,
  },
  title: {
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  overview: {fontSize: responsiveFontSize(2)},
  rate: {},
  date: {fontSize: responsiveFontSize(2), color: 'grey', fontStyle: 'italic'},
  rightSideContainer: {flex: 1},
});

Card.propTypes = {
  title: PropTypes.string,
  imageUri: PropTypes.string,
  overview: PropTypes.string,
  rate: PropTypes.string,
  date: PropTypes.string,
};
