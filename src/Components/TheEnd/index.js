import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './styles';

export const TheEnd = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Okay i'm done, there is literally no more movies to show, you win!
    </Text>
  </View>
);
