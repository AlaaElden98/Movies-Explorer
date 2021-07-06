import React from 'react';
import {SafeAreaView, Text, StatusBar, View, StyleSheet} from 'react-native';
import {responsiveFontSize} from '../Utilis/helperFunctions';
export const Header = props => {
  const {title, titleColor, backgroundColor} = props;

  return (
    <SafeAreaView
      style={{...styles.header, ...{backgroundColor: backgroundColor}}}>
      <Text style={{...styles.title, ...{color: titleColor}}}>{title}</Text>
      <View style={styles.divider} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    backgroundColor: 'black',
    height: 0.5,
  },
  title: {
    color: 'black',
    fontSize: responsiveFontSize(3),
    marginRight: 180,
  },
});
