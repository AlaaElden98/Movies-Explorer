import {StyleSheet} from 'react-native';

import Colors from '../../Constants/Colors';
import {responsiveFontSize} from '../../Utilis/helperFunctions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: 10,
  },
  title: {fontSize: responsiveFontSize(2.2)},
  body: {fontSize: responsiveFontSize(2), color: Colors.heavyDarkGray},
});
