import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import LottieView from 'lottie-react-native';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

import {Card} from '../Card';
import {
  responsiveWidth,
  responsiveHeight,
  responsiveFontSize,
} from '../../Utilis/helperFunctions';
import Colors from '../../Constants/Colors';
import {SearchEmptyState, Trending21} from '../../assests';
import {getSearchResults} from '../../Api/getSearchResults';
import {getImagesBaseUrl} from '../../Api/getImagesBaseUrl';
import AnimatedSearch from '../../assests/animatedSearch2.json';
import {CustomActivityIndicator} from '../CustomActivityIndicator';

const RenderIndex = {
  InitialState: 0,
  Loading: 1,
  Results: 2,
};

export const SearchList = ({navigation}) => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchResults, setSearchResults] = useState([]);
  const [imageBaseUrl, setImageBaseUrl] = useState();
  const [loadMore, setLoadMore] = useState();
  const [renderIndex, setRenderIndex] = useState(RenderIndex.InitialState);
  let lottieRef = null;

  const query = useSelector(state => state.search.query);
  const trendingSearches = useSelector(state => state.search.trendingSearches);

  const getSearch = async (pageNumber, newQuery = false) => {
    if (!query) {
      setSearchResults([]);
      setRenderIndex(RenderIndex.InitialState);
      return;
    }
    if (newQuery) {
      if (lottieRef) lottieRef.play();
      setRenderIndex(RenderIndex.Loading);
    }
    const data = await getSearchResults(query, pageNumber);
    searchResults && !newQuery
      ? setSearchResults([...searchResults, ...data.results])
      : setSearchResults(data.results);
    setTotalPages(data.total_pages);
    setRenderIndex(RenderIndex.Results);
  };

  useEffect(() => {
    getSearch(1, true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  useEffect(() => {
    async function fetchData() {
      const uri = await getImagesBaseUrl();
      setImageBaseUrl(uri);
    }
    fetchData();
  }, []);

  const handleOnPressItem = item => {
    navigation.navigate('Details', {
      parent: item.media_type,
      id: item.id,
      imageBaseUrl: imageBaseUrl,
    });
  };

  const handleEndReached = () => {
    if (page < totalPages) {
      setLoadMore(true);
      setPage(page + 1);
      getSearch(page, false);
    } else {
      setLoadMore(false);
    }
  };

  const handleOnPressTrendingItem = item => {
    navigation.navigate('Details', {
      parent: 'movie',
      id: item.id,
      imageBaseUrl: imageBaseUrl,
    });
  };

  const renderItem = ({item}) => {
    const mediaType = item.media_type;
    return (
      mediaType !== 'person' &&
      item.poster_path && (
        <TouchableOpacity
          onPress={() => handleOnPressItem(item)}
          style={styles.container}
        >
          <Card
            title={mediaType === 'movie' ? item.title : item.name}
            overview={item.overview}
            rate={item.vote_average}
            date={
              mediaType === 'movie' ? item.release_date : item.first_air_date
            }
            original_language={item.original_language}
            imageUri={
              item.poster_path
                ? imageBaseUrl + 'original' + item.poster_path
                : null
            }
          />
        </TouchableOpacity>
      )
    );
  };

  const renderFooter = () => {
    return loadMore && searchResults?.length > 0 ? (
      <CustomActivityIndicator size={30} />
    ) : (
      <View style={{padding: 5}} />
    );
  };

  const renderLoading = () => (
    <LottieView
      ref={ref => {
        lottieRef = ref;
      }}
      source={AnimatedSearch}
      autoPlay
      loop
      style={{
        marginTop: '50%',
        alignSelf: 'center',
        height: responsiveHeight(10),
      }}
    />
  );

  const renderState = () => {
    switch (renderIndex) {
      case RenderIndex.InitialState:
        return renderInitialState();
      case RenderIndex.Results:
        return renderResultsList();
      case RenderIndex.Loading:
        return renderLoading();
      default:
        return renderInitialState();
    }
  };

  const renderInitialState = () => {
    return (
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.initialTitle}>Trending searches</Text>
          <Image source={Trending21} />
        </View>
        <View style={styles.trendingItemsContainer}>
          {trendingSearches.map((item, index) => (
            <TouchableOpacity
              key={index}
              activeOpacity={0.7}
              style={styles.trendingItem}
              onPress={() => handleOnPressTrendingItem(item)}
            >
              <Text style={styles.trendingTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  const renderEmptyState = () => (
    <View style={styles.emptyStateContainer}>
      <Image
        source={SearchEmptyState}
        style={{width: responsiveWidth(60), height: responsiveHeight(30)}}
        resizeMode="contain"
      />
      <Text style={styles.emptyStateText}>
        hmmm, we can't find the title you want!
      </Text>
    </View>
  );

  const renderResultsList = () => (
    <FlatList
      data={searchResults}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      onEndReachedThreshold={0.5}
      onEndReached={handleEndReached}
      ListFooterComponent={renderFooter}
      contentContainerStyle={{paddingBottom: responsiveHeight(2)}}
      ListEmptyComponent={renderEmptyState}
    />
  );

  return <View style={{flex: 1}}>{renderState()}</View>;
};

const styles = StyleSheet.create({
  container: {
    padding: 14,
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 14,
    overflow: 'hidden',
    marginHorizontal: 14,
    flexDirection: 'row',
    borderColor: Colors.lightGrayishRed2,
    backgroundColor: 'white',
  },
  trendingItem: {
    padding: 10,
    marginTop: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: Colors.lightRed,
  },
  trendingItemsContainer: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    marginHorizontal: 12,
  },
  emptyStateContainer: {
    flex: 1,
    paddingTop: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyStateText: {
    paddingTop: 10,
    color: Colors.darkGray,
    fontSize: responsiveFontSize(1.8),
  },
  initialTitle: {marginHorizontal: 10, fontSize: responsiveFontSize(1.8)},
  trendingTitle: {color: Colors.strongRed, fontSize: responsiveFontSize(1.5)},
});
