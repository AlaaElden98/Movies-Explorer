import {StyleSheet} from 'react-native';
import {responsiveFontSize} from '../../Utilis/helperFunctions';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  text: {
    fontSize: responsiveFontSize(2),
    color: 'black',
  },
});
