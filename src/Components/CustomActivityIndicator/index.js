import React from 'react';
import {Platform, ActivityIndicator, View} from 'react-native';

import Colors from '../../Constants/Colors';

export const CustomActivityIndicator = ({
  style = {},
  size = 50,
  color = Colors.darkGray,
}) => (
  <View style={style}>
    {Platform.OS === 'ios' ? (
      <ActivityIndicator size="small" color={color} />
    ) : (
      <ActivityIndicator size={size} color={color} />
    )}
  </View>
);
