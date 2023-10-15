import {StyleSheet} from 'react-native';

import Colors from '../../Constants/Colors';
import {responsiveFontSize} from '../../Utilis/helperFunctions';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overvieContainer: {padding: 10, margin: 1},
  overviewTitle: {fontSize: responsiveFontSize(2.8), color: 'black'},
  overviewBody: {
    fontSize: responsiveFontSize(2.2),
    color: Colors.heavyDarkGray,
  },
});
