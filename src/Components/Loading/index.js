import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

import Colors from '../../Constants/Colors';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <Text style={{color: Colors.heavyDarkGray}}>Loading...</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
