import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const IconOnTop = props => {
  const {name, size, color, title, titleSize} = props;
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name={name} size={size} color={color} />
      <Text style={{fontSize: titleSize}}>{title}</Text>
    </View>
  );
};

export const Touchable = props => {
  const {
    onPress,
    title,
    titleSize,
    iconName,
    iconPlace = 'top',
    iconSize = 18,
    iconColor = 'black',
  } = props;

  return (
    <TouchableOpacity onPress={onPress}>
      {iconName && iconPlace === 'top' && (
        <IconOnTop
          name={iconName}
          size={iconSize}
          color={iconColor}
          title={title}
          titleSize={titleSize}
        />
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
