import React, {useState} from 'react';
import PropTypes from 'prop-types';
import FastImage from 'react-native-fast-image';
import {View, StyleSheet, Image} from 'react-native';

import {CustomActivityIndicator} from './CustomActivityIndicator';
import {responsiveHeight, responsiveWidth} from '../Utilis/helperFunctions';

export const ImageComponent = props => {
  const {uri, style, resizeMode} = props;
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  const renderErrorHolder = () => (
    <Image
      source={require('../assests/NO_IMAGE.jpg')}
      resizeMode="contain"
      style={style || styles.image}
    />
  );

  const renderActivityIndicator = () => (
    <CustomActivityIndicator
      size={30}
      style={{flex: 1, justifyContent: 'center'}}
    />
  );

  let indicatorElement;
  if (error) {
    indicatorElement = renderErrorHolder();
  } else if (loading) {
    indicatorElement = renderActivityIndicator();
  }

  return (
    <View>
      {typeof uri === 'string' && uri.length > 0 && uri !== 'NO_IMAGE' ? (
        <FastImage
          source={{uri}}
          resizeMode={resizeMode || 'contain'}
          style={style || styles.image}
          onLoadStart={() => {
            setLoading(true);
            setError(false);
          }}
          onLoadEnd={() => setLoading(false)}
          onError={() => {
            setError(true);
            setLoading(false);
          }}
        />
      ) : (
        <View style={styles.emptyView} />
      )}
      <View style={styles.indicator}>{indicatorElement}</View>
    </View>
  );
};

export const styles = StyleSheet.create({
  image: {
    borderRadius: 15,
    width: responsiveWidth(30),
    height: responsiveHeight(25),
  },
  emptyView: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  indicator: {
    left: 0,
    right: 0,
    height: '100%',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
});

ImageComponent.propTypes = {
  uri: PropTypes.string,
  resizeMode: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
