import {StyleSheet} from 'react-native';

import {
  responsiveFontSize,
  responsiveWidth,
} from '../../Utilis/helperFunctions';

export const styles = StyleSheet.create({
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
