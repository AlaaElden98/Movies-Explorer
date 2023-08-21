import {StyleSheet} from 'react-native';

import {responsiveHeight, responsiveWidth} from '../../Utilis/helperFunctions';

export const styles = StyleSheet.create({
  personContainer: {
    flex: 1,
    padding: 2,
    borderRadius: 14,
    overflow: 'hidden',
    alignItems: 'center',
  },
  personImage: {
    borderRadius: 14,
    width: responsiveWidth(30),
    height: responsiveHeight(25),
  },
});
