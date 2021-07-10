import React from 'react';
import {Text, View} from 'react-native';

const DetailsScreen = ({navigation, route}) => {
  const details = route.params.details;
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
};

export default DetailsScreen;
