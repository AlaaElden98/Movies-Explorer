import React, {useState, useCallback} from 'react';
import {
  View,
  Share,
  Alert,
  Linking,
  Platform,
  ToastAndroid,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';

import {styles} from './styles';
import {Touchable} from '../Touchable';
import {addItem, removeItem} from '../../redux/myListSlice';
import {responsiveFontSize} from '../../Utilis/helperFunctions';
import {Heart24, RedHeart24, Share24, World24} from '../../assests';

export const ButtonsRow = props => {
  const {homepage, title, id, parent, poster_path} = props;
  const dispatch = useDispatch();

  const myList = useSelector(state => state.myList.items);
  const itemInList =
    myList.length > 0 && myList.find(_itemInList => _itemInList.id === id);

  const [inMyList, setInMyList] = useState(itemInList ? true : false);

  const handleAddToList = () => {
    inMyList
      ? dispatch(removeItem(id))
      : dispatch(addItem({id: id, poster_path: poster_path, parent: parent}));
    setInMyList(!inMyList);
    const message = inMyList ? 'Removed from My list' : 'Added to My list';
    Platform.OS === 'android'
      ? ToastAndroid.show(message, ToastAndroid.SHORT)
      : Toast.show({
          text1: message,
        });
  };

  const handleShare = async () => {
    const url = `https://www.themoviedb.org/${parent}/${id}`;
    try {
      await Share.share({
        message: `Enjoy watching "${title}", Here is the link '${url}'`,
        url: url,
      });
    } catch (error) {
      Toast.show({
        type: 'info',
        text1: error.message,
        position: 'bottom',
      });
    }
  };
  const handleOfficialPage = useCallback(async () => {
    if (!homepage) {
      Alert.alert(
        'Sorry, the official page for this content is not availiable :/',
      );
      return;
    }
    // Checking if the link is supported for links with custom URL scheme.
    const supported = await Linking.canOpenURL(homepage);

    if (supported) {
      // Opening the link with some app, if the URL scheme is "http" the web link should be opened
      // by some browser in the mobile
      await Linking.openURL(homepage);
    } else {
      Alert.alert(`Don't know how to open this URL: ${homepage}`);
    }
  }, [homepage]);

  return (
    <View style={styles.container}>
      <Touchable
        onPress={handleAddToList}
        title="My list"
        iconSrc={inMyList ? RedHeart24 : Heart24}
        titleSize={responsiveFontSize(1.6)}
      />
      <Touchable
        onPress={handleShare}
        title="Share"
        titleSize={responsiveFontSize(1.6)}
        iconSrc={Share24}
      />
      <Touchable
        onPress={handleOfficialPage}
        title="Official page"
        titleSize={responsiveFontSize(1.6)}
        iconSrc={World24}
      />
    </View>
  );
};
