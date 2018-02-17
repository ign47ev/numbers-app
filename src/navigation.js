import React from 'react';
import { StackNavigator, TabNavigator } from 'react-navigation';
import Store from './screens/Store/Store';
import Favorites from './screens/Favorites/Favorites';
import Cart from './screens/Cart/Cart';
import Profile from './screens/Profile/Profile';
import Blank from './screens/Blank/Blank';

const TabNav = TabNavigator(
  {
    Store: {
      screen: Store,
      path: '/store',
    },
    Favorites: {
      screen: Favorites,
      path: '/favorites',
    },
    Cart: {
      screen: Cart,
      path: '/cart',
    },
    Profile: {
      screen: Profile,
      path: '/profile',
    },
  },
  {
    tabBarComponent: () => null,
    swipeEnabled: false,
    animationEnabled: false,
  }
);

export const Navigation = StackNavigator({
  Tabs: {
    screen: TabNav,
  },
  Blank: {
    screen: Blank,
    navigationOptions: {
      title: 'Blank',
    },
  },
}, {
  headerMode: 'none',
  navigationOptions: {
    header: null,
  },
});
