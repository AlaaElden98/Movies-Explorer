import React from 'react';
import {Text, FlatList, View, TouchableOpacity} from 'react-native';

import {styles} from './styles';
import {ImageComponent} from '../ImageComponent';
import {ImageUrl} from '../../Utilis/helperFunctions';

export const CastRow = props => {
  const {cast, imageBaseUrl, handleModal} = props;
  const handlePress = id => {
    handleModal(id);
  };

  const renderItem = ({item}) => {
    if (!item.profile_path) return;
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

  const renderItemSeperator = () => <View style={{padding: 4}} />;

  return (
    <View>
      <FlatList
        data={cast}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        horizontal={true}
        ItemSeparatorComponent={renderItemSeperator}
        style={{paddingBottom: 20}}
      />
    </View>
  );
};
