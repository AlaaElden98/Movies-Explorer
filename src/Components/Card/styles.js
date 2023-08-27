import {StyleSheet} from 'react-native';

import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from '../../Utilis/helperFunctions';
import Colors from '../../Constants/Colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  imageContainer: {},
  image: {
    width: responsiveWidth(40),
    height: responsiveHeight(25),
    borderRadius: 14,
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
    color: Colors.heavyDarkGray,
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
