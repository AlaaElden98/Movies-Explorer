import React from 'react';
import {Text, FlatList, Image, View, TouchableOpacity} from 'react-native';

import {ImageUrl} from '../../Utilis/helperFunctions';
import {styles} from './styles';

export const CastRow = props => {
  const {cast, imageBaseUrl, handleModal} = props;
  //   cast = [name, profile_path, id]
  const handlePress = id => {
    handleModal(id);
  };
  const renderItem = ({item}) => {
    const imageUri = ImageUrl(imageBaseUrl, item.profile_path);
    return (
      <TouchableOpacity onPress={() => handlePress(item.id)}>
        <View style={styles.personContainer}>
          <Image
            source={
              imageUri == 'NO_IMAGE'
                ? require('../../assests/NO_IMAGE.jpg')
                : {uri: imageUri}
            }
            style={styles.personImage}
            resizeMode="contain"
          />
          <Text>{item.name}</Text>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <FlatList
        data={cast}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal={true}
      />
    </View>
  );
};
