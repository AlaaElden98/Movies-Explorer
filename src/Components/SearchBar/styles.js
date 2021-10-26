import {StyleSheet} from 'react-native';

import {responsiveWidth, responsiveHeight} from '../../Utilis/helperFunctions';

export const styles = StyleSheet.create({
  searchBar: {
    height: responsiveHeight(8),
    width: responsiveWidth(70),
    margin: 10,
  },
  searchBarContainer: {
    backgroundColor: '#fafafa',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    paddingLeft: 15,
    borderRadius: 30,
    height: responsiveHeight(8),
    margin: 5,
  },
});
