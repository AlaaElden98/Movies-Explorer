import React from 'react';
import {FlatList, Text, View} from 'react-native';
import PropTypes from 'prop-types';
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
    number_of_episodes,
    number_of_seasons,
  } = props;

  const DATA = [
    runtime
      ? {
          title: 'Duration',
          body: runtime ? convertMinutesToReadableTime(runtime) : '-',
        }
      : {title: 'Seasons', body: number_of_seasons},

    number_of_episodes ? {title: 'Episodes', body: number_of_episodes} : {},
    {title: 'Genres', body: getGenresNames(genres)},
    {title: 'Language', body: language[original_language]},
    {title: 'Status', body: status},
    {
      title: 'Date',
      body: release_date && release_date != '' ? release_date : '-',
    },
    {
      title: 'Budget',
      body: budget == 0 || !budget ? '-' : converToDollars(budget),
    },
    {
      title: 'Revenue',
      body: revenue == 0 || !revenue ? '-' : converToDollars(revenue),
    },
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

DetailsRow.propTypes = {
  runtime: PropTypes.number,
  release_date: PropTypes.string,
  original_language: PropTypes.string.isRequired,
  genres: PropTypes.array.isRequired,
};
