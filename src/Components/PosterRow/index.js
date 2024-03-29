import React from 'react';
import PropTypes from 'prop-types';
import ImageView from 'react-native-image-viewing';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';

import {styles} from './styles';

export const PosterRow = props => {
  const {
    rate,
    title,
    images,
    onPress,
    onClose,
    tagline,
    showImage,
    backgroundImage,
  } = props;
  return (
    <View>
      <TouchableOpacity
        style={styles.container}
        activeOpacity={0.8}
        onPress={onPress}>
        <ImageBackground
          source={
            backgroundImage === 'NO_IMAGE'
              ? require('../../assests/NO_IMAGE.jpg')
              : {
                  uri: backgroundImage,
                }
          }
          resizeMode={backgroundImage === 'NO_IMAGE' ? 'contain' : 'cover'}
          style={styles.image}>
          <View style={styles.imageInfo}>
            <View>
              <Text style={styles.title}>{title}</Text>
              {tagline === '' || !tagline ? null : (
                <Text style={styles.tagline}>{`"${tagline}"`}</Text>
              )}
              <Text style={styles.tagline}>{` Rate    ${rate}/10`}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity>
      {images.length ? (
        <ImageView
          images={images}
          imageIndex={0}
          visible={showImage}
          onRequestClose={onClose}
        />
      ) : null}
    </View>
  );
};

PosterRow.propTypes = {
  tagline: PropTypes.string,
  rate: PropTypes.number.isRequired,
  images: PropTypes.array.isRequired,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  showImage: PropTypes.bool.isRequired,
  backgroundImage: PropTypes.string.isRequired,
};
