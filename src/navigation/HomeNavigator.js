import React from 'react';
import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator
} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome5';
import ScreenIds from './screenIds';
import { COLORS } from '../assets';

import HomeScreen from '../screens/HomeScreen';
import OfferScreen from '../screens/OfferScreen';
import ProfileScreen from '../screens/ProfileScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CategoryDetailsScreen from '../screens/CategoryDetailsScreen';
import MoreCategoryScreen from '../screens/MoreCategoryScreen';
import ListCategoryScreen from '../screens/ListCategoryScreen';
import CartScreen from '../screens/CartScreen';
import SearchScreen from '../screens/SearchScreen';
import MessageScreen from '../screens/MessageScreen';
import ThreadScreen from '../screens/ThreadScreen';
import SurveyScreen from '../screens/SurveyScreen';
import PaymentScreen from '../screens/PaymentScreen';
import BillScreen from '../screens/BillScreen';

const AppNavigator = createBottomTabNavigator(
  {
    [ScreenIds.HOME]: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarLabel: 'Trang chủ',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='home' color={tintColor} size={18} />
        ),
      }
    },
    [ScreenIds.OFFER]: {
      screen: OfferScreen,
      navigationOptions: {
        tabBarLabel: 'Ưu đãi',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='award' color={tintColor} size={18} />
        )
      }
    },
    [ScreenIds.MESSAGE]: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarLabel: 'Tin nhắn',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='comment' color={tintColor} size={18} />
        )
      }
    },
    [ScreenIds.PROFILE]: {
      screen: ProfileScreen,
      navigationOptions: {
        tabBarLabel: 'Tài khoản',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='user' color={tintColor} size={18} />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: COLORS.appColor,
      inactiveTintColor: COLORS.darkGray,
      style: {
        backgroundColor: COLORS.lightGray,
        borderTopWidth: 0,
        shadowOffset: { width: 5, height: 3 },
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5
      }
    },
    navigationOptions: {
      header: null
    }
  }
)

const MyStackNavigator = createStackNavigator(
  {
    [ScreenIds.APP]: {
      screen: AppNavigator
    },
    [ScreenIds.PRODUCT_DETAILS]: {
      screen: ProductDetailsScreen
    },
    [ScreenIds.CATEGORY_DETAILS]: {
      screen: CategoryDetailsScreen
    },
    [ScreenIds.SEARCH]: {
      screen: SearchScreen
    },
    [ScreenIds.CART]: {
      screen: CartScreen
    },
    [ScreenIds.THREAD]: {
      screen: ThreadScreen
    },
    [ScreenIds.SURVEY]: {
      screen: SurveyScreen
    },
    [ScreenIds.PAYMENT]: {
      screen: PaymentScreen
    },
    [ScreenIds.BILL]: {
      screen: BillScreen
    },
    [ScreenIds.MORE_CATEGORY]: {
      screen: MoreCategoryScreen
    },
    [ScreenIds.LIST_CATEGORY]: {
      screen: ListCategoryScreen
    }
  },
  {
    initialRouteName: ScreenIds.APP,
    defaultNavigationOptions: {
      headerTintColor: COLORS.white,
      headerStyle: {
        backgroundColor: COLORS.appColor,
      },
    }
  }
);

const HomeNavigator = createAppContainer(MyStackNavigator);

export default HomeNavigator;