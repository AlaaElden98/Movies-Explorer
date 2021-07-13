import {StyleSheet} from 'react-native';

import {
  responsiveFontSize,
  responsiveHeight,
} from '../../Utilis/helperFunctions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    width: '100%',
    height: responsiveHeight(35),
    marginTop: 2,
  },
  imageInfo: {
    backgroundColor: '#00000040',
    flexDirection: 'row',
    height: '100%',
    alignItems: 'flex-end',
  },
  title: {
    color: 'white',
    fontSize: responsiveFontSize(3),
    fontWeight: 'bold',
    marginLeft: 10,
  },
  tagline: {
    color: 'white',
    fontSize: responsiveFontSize(1.7),
    marginLeft: 12,
  },
  iconContainer: {backgroundColor: 'red'},
});
