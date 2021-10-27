import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <Text>Loading...</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
