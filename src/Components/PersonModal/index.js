import React, {useState, useEffect, useRef} from 'react';
import {ScrollView, Text, Image, View} from 'react-native';
import {Modalize} from 'react-native-modalize';

import {getPersonInfo} from '../../Api/getPersonInfo';
import {
  ImageUrl,
  responsiveHeight,
  CalculateAge,
} from '../../Utilis/helperFunctions';
import {styles} from './styles';

export const PersonModal = props => {
  const modalizeRef = useRef(null);
  const {id, onClosed, imageBaseUrl} = props;
  const [personInfo, setPersonInfo] = useState();
  // personInfo = {biography}
  const handleOpen = () => {
    if (modalizeRef.current) {
      modalizeRef.current.open();
    }
  };

  useEffect(() => {
    handleOpen();
  }, []);

  useEffect(async () => {
    const data = await getPersonInfo(id);
    setPersonInfo(data);
  }, []);

  return (
    <Modalize
      ref={modalizeRef}
      onClosed={onClosed}
      modalHeight={responsiveHeight(60)}>
      {personInfo ? (
        <ScrollView style={styles.container}>
          <View style={styles.mainInfoContainer}>
            <Image
              source={
                personInfo.profile_path
                  ? {uri: ImageUrl(imageBaseUrl, personInfo.profile_path)}
                  : require('../../assests/NO_IMAGE.jpg')
              }
              style={styles.image}
            />
            <View style={styles.mainInfo}>
              <Text style={styles.head}>{personInfo.name}</Text>
              {personInfo.known_for_department && (
                <Text style={styles.body}>
                  {personInfo.known_for_department}
                </Text>
              )}
              {personInfo.birthday && (
                <Text style={styles.body}>
                  {`${CalculateAge(personInfo.birthday)} years`}
                </Text>
              )}
              {personInfo.place_of_birth && (
                <Text style={styles.body}>{personInfo.place_of_birth}</Text>
              )}
            </View>
          </View>
          {personInfo.biography ? (
            <View style={styles.biographyContainer}>
              <Text style={styles.head}>Biography</Text>
              <Text style={styles.body}>{personInfo.biography}</Text>
            </View>
          ) : null}
        </ScrollView>
      ) : (
        <Text>Loading...</Text>
      )}
    </Modalize>
  );
};

