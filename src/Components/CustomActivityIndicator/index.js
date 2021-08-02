import React from 'react';
import {Platform, ActivityIndicator, View} from 'react-native';

export const CustomActivityIndicator = ({
  style = {},
  size = 50,
  color = '#999999',
}) => (
  <View style={style}>
    {Platform.OS === 'ios' ? (
      <ActivityIndicator size="small" color={color} />
    ) : (
      <ActivityIndicator size={size} color={color} />
    )}
  </View>
);
