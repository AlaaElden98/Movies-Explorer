import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import MoviesScreen from '../Screens/MoviesScreen';
import TvShowesScreen from '../Screens/TvShowesScreen';
import MyListScreen from '../Screens/MyListScreen';
import SuggestScreen from '../Screens/SuggestScreen';
import {
  BUTTOM_TABS_ACTIVE_BACKGROUND_COLOR,
  BUTTOM_TABS_ACTIVE_TINT_COLOR,
  BUTTOM_TABS_ICONS_SIZE,
  BUTTOM_TABS_LABELS_SIZE,
} from '../Constants/ButtomTabsVars';
import {responsiveFontSize, responsiveWidth} from '../Utilis/helperFunctions';

const Tab = createBottomTabNavigator();

export const ButtomTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Movies"
      tabBarOptions={{
        activeTintColor: BUTTOM_TABS_ACTIVE_TINT_COLOR,
        activeBackgroundColor: BUTTOM_TABS_ACTIVE_BACKGROUND_COLOR,
        labelStyle: {
          fontSize: responsiveFontSize(BUTTOM_TABS_LABELS_SIZE),
        },
      }}>
      <Tab.Screen
        name="Movies"
        component={MoviesScreen}
        options={{
          title: 'Movies',
          tabBarIcon: () => (
            <IoniconsIcon
              name="film"
              size={responsiveWidth(BUTTOM_TABS_ICONS_SIZE)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TvShows"
        component={TvShowesScreen}
        options={{
          title: 'Tv shows',
          tabBarIcon: () => (
            <MaterialIcons
              name="live-tv"
              size={responsiveWidth(BUTTOM_TABS_ICONS_SIZE)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Suggest"
        component={SuggestScreen}
        options={{
          title: 'Random',
          tabBarIcon: () => (
            <IoniconsIcon
              name="shuffle"
              size={responsiveWidth(BUTTOM_TABS_ICONS_SIZE)}
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyList"
        component={MyListScreen}
        options={{
          title: 'My list',
          tabBarIcon: () => (
            <IoniconsIcon
              name="list"
              size={responsiveWidth(BUTTOM_TABS_ICONS_SIZE)}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
