import React from 'react';
import {FlatList, Text, View} from 'react-native';
import PropTypes from 'prop-types';

import {styles} from './styles';
import {
  getGenresNames,
  converToDollars,
  convertMinutesToReadableTime,
} from '../../Utilis/helperFunctions';
import language from '../../Constants/language.json';

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
      : {title: 'Seasons', body: number_of_seasons ?? '-'},

    number_of_episodes ? {title: 'Episodes', body: number_of_episodes} : {},
    genres ? {title: 'Genres', body: getGenresNames(genres)} : {},
    original_language ? {title: 'Language', body: original_language} : {},
    status ? {title: 'Status', body: status} : {},
    release_date
      ? {
          title: 'Date',
          body: release_date && release_date !== '' ? release_date : '-',
        }
      : {},
    budget
      ? {
          title: 'Budget',
          body: budget === 0 || !budget ? '-' : converToDollars(budget),
        }
      : {},
    revenue
      ? {
          title: 'Revenue',
          body: revenue === 0 || !revenue ? '-' : converToDollars(revenue),
        }
      : {},
  ];

  const renderItem = ({item}) => {
    return (
      item && (
        <View style={styles.container}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.body}>{item.body}</Text>
        </View>
      )
    );
  };
  return (
    <View>
      <FlatList
        data={DATA}
        keyExtractor={item => item.title + item.body}
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
