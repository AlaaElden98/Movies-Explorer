import {StyleSheet} from 'react-native';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../Utilis/helperFunctions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
  },
  imageContainer: {},
  image: {
    width: responsiveWidth(30),
    height: responsiveHeight(25),
    borderRadius: 15,
  },
  title: {
    fontSize: responsiveFontSize(2.5),
    fontWeight: 'bold',
  },
  overview: {fontSize: responsiveFontSize(2)},
  rate: {
    fontSize: responsiveFontSize(2),
    color: 'white',
  },
  rateContainer: {
    backgroundColor: 'green',
    width: responsiveFontSize(8),
    alignItems: 'center',
    borderRadius: 15,
  },
  date: {
    fontSize: responsiveFontSize(2),
    color: '#525252',
    fontStyle: 'italic',
  },
  rightSideContainer: {
    marginLeft: 20,
    flex: 1,
    justifyContent: 'space-around',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
