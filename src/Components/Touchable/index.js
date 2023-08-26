import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet, Image} from 'react-native';

const IconOnTop = props => {
  const {title, titleSize, iconSrc} = props;
  return (
    <View style={styles.container}>
      <Image source={iconSrc} />
      <Text style={{fontSize: titleSize}}>{title}</Text>
    </View>
  );
};

export const Touchable = props => {
  const {onPress, title, titleSize, iconSrc} = props;

  return (
    <TouchableOpacity onPress={onPress}>
      {iconSrc && (
        <IconOnTop title={title} titleSize={titleSize} iconSrc={iconSrc} />
      )}
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 10,
  },
});
