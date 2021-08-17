import React, {useState, useCallback} from 'react';
import {
  View,
  ToastAndroid,
  Platform,
  Share,
  Alert,
  Linking,
} from 'react-native';
import Toast from 'react-native-toast-message';
import {useDispatch, useSelector} from 'react-redux';

import {addMovie, removeMovie, addTv, removeTv} from '../../redux/myListSlice';
import {responsiveFontSize} from '../../Utilis/helperFunctions';
import {Touchable} from '../Touchable';
import {styles} from './styles';

export const ButtonsRow = props => {
  const {homepage, title, id, parent, poster_path} = props;
  const dispatch = useDispatch();

  const myList = useSelector(state =>
    parent == 'movie' ? state.myList.movies : state.myList.tv,
  );

  const itemInList = myList.find(itemInList => itemInList.id === id);

  const [inMyList, setInMyList] = useState(itemInList ? true : false);

  const MyListIconName = inMyList ? 'check' : 'plus';

  const handleAddToList = () => {
    inMyList
      ? dispatch(parent == 'movie' ? removeMovie(id) : removeTv(id))
      : dispatch(
          parent == 'movie'
            ? addMovie({id: id, poster_path: poster_path})
            : addTv({id: id, poster_path: poster_path}),
        );

    setInMyList(!inMyList);

    const message = inMyList ? 'Removed from My list' : 'Added to My list';
    Platform.OS == 'android'
      ? ToastAndroid.show(message, ToastAndroid.SHORT)
      : Toast.show({
          text1: message,
        });
  };

  const handleShare = async () => {
    const url = `https://www.themoviedb.org/${parent}/${id}`;
    try {
      const result = await Share.share({
        message: `Enjoy watching "${title}", Here is the link '${url}'`,
        url: url,
      });
    } catch (error) {
      alert(error.message);
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
        titleSize={responsiveFontSize(2.2)}
        iconName={MyListIconName}
        iconPlace="top"
        iconSize={responsiveFontSize(4)}
      />
      <Touchable
        onPress={handleShare}
        title="Share"
        titleSize={responsiveFontSize(2.2)}
        iconName="share-variant"
        iconPlace="top"
        iconSize={responsiveFontSize(4)}
      />
      <Touchable
        onPress={handleOfficialPage}
        title="Official page"
        titleSize={responsiveFontSize(2.2)}
        iconName="web"
        iconPlace="top"
        iconSize={responsiveFontSize(4)}
      />
    </View>
  );
};
