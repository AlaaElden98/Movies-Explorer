import React from 'react';
import {Text, View} from 'react-native';

import {Header} from '../Components/Header';

const MyListScreen = () => {
  return (
    <View>
      <Header title="My list" backgroundColor="white" titleColor="black" />
      <Text>MyListScreen</Text>
    </View>
  );
};

export default MyListScreen;
