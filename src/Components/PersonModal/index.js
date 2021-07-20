import React, {useState, useEffect, useRef} from 'react';
import {ScrollView, Text, Image, View} from 'react-native';
import {Modalize} from 'react-native-modalize';
import {getPersonInfo} from '../../Api/getPersonInfo';
import {responsiveHeight} from '../../Utilis/helperFunctions';

export const PersonModal = props => {
  const modalizeRef = useRef(null);
  const {id, onClosed} = props;
  const [personInfo, setPersonInfo] = useState();

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
        <ScrollView style={{padding: 20}}>
          <Text>{personInfo.name}</Text>
          <Text>{personInfo.biography}</Text>
        </ScrollView>
      ) : (
        <Text>Loading...</Text>
      )}
    </Modalize>
  );
};
