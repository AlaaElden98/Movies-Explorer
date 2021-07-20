import React from 'react';
import {FlatList, Text, View} from 'react-native';

import {
  convertMinutesToReadableTime,
  converToDollars,
  getGenresNames,
} from '../../Utilis/helperFunctions';
import language from '../../Constants/language.json';
import {styles} from './styles';

export const DetailsRow = props => {
  const {
    runtime,
    status,
    revenue,
    release_date,
    budget,
    original_language,
    genres,
  } = props;

  const DATA = [
    {
      title: 'Duration',
      body: runtime ? convertMinutesToReadableTime(runtime) : '-',
    },
    {title: 'Genres', body: getGenresNames(genres)},
    {title: 'Language', body: language[original_language]},
    {title: 'Status', body: status},
    {title: 'Date', body: release_date},
    {title: 'Budget', body: budget == 0 ? '-' : converToDollars(budget)},
    {title: 'Revenue', body: revenue == 0 ? '-' : converToDollars(revenue)},
  ];
  const renderItem = ({item}) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.body}>{item.body}</Text>
      </View>
    );
  };
  return (
    <View>
      <FlatList
        data={DATA}
        keyExtractor={item => item.title}
        renderItem={renderItem}
        horizontal={true}
      />
    </View>
  );
};
