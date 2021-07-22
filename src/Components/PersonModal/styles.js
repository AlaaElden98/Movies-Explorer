import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from '../../Utilis/helperFunctions';

export const styles = StyleSheet.create({
  container: {padding: 10, margin: 15},
  mainInfoContainer: {flexDirection: 'row'},
  image: {
    width: responsiveWidth(35),
    height: responsiveHeight(35),
    borderRadius: 30,
  },
  mainInfo: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'space-evenly',
  },
  head: {
    fontSize: responsiveFontSize(3),
  },
  body: {
    fontSize: responsiveFontSize(2.3),
    color: '#525252',
  },
  biographyContainer: {
    flex: 1,
    marginTop: 15,
  },
});
