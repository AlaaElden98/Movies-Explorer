import React from 'react';
import {Text, FlatList, View, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {ImageUrl} from '../../Utilis/helperFunctions';
import {ImageComponent} from '../ImageComponent';

export const CastRow = props => {
  const {cast, imageBaseUrl, handleModal} = props;
  const handlePress = id => {
    handleModal(id);
  };

  const renderItem = ({item}) => {
    const imageUri = ImageUrl(imageBaseUrl, item.profile_path);
    return (
      <TouchableOpacity onPress={() => handlePress(item.id)}>
        <View style={styles.personContainer}>
          <ImageComponent uri={imageUri} style={styles.personImage} />
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
