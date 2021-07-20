import {StyleSheet} from 'react-native';

import {responsiveHeight, responsiveWidth} from '../../Utilis/helperFunctions';

export const styles = StyleSheet.create({
  personContainer: {flex: 1, alignItems: 'center'},
  personImage: {width: responsiveWidth(30), height: responsiveHeight(25)},
});
