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
import ProfileScreen from '../screens/ProfileScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';
import SearchScreen from '../screens/SearchScreen';
import MessageScreen from '../screens/MessageScreen';


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
    [ScreenIds.MESSAGE]: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarLabel: 'Tin nhắn',
        tabBarIcon: ({ tintColor }) => (
          <Icon name='comment' color={tintColor} size={18} />
        )
      }
    },
    // [ScreenIds.NOTIFICATION]: {
    //   screen: HomeScreen,
    //   navigationOptions: {
    //     tabBarLabel: 'Thông báo',
    //     tabBarIcon: ({ tintColor }) => (
    //       <Icon name='bell' color={tintColor} size={18} />
    //     )
    //   }
    // },
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
    [ScreenIds.SEARCH]: {
      screen: SearchScreen
    },
    [ScreenIds.CART]: {
      screen: CartScreen
    },
    // [Navigations.SETTING]: {
    //   screen: Setting
    // },
    // [Navigations.CHANGE_PASSWORD]: {
    //   screen: ChangePassword
    // },
    // [Navigations.LIST_ITEM]: {
    //   screen: ListItem
    // },
    // [Navigations.PIZZA_DETAIL]: {
    //   screen: PizzaDetail
    // },
    // [Navigations.LIST_TOPPING]: {
    //   screen: ListTopping
    // },
    // [Navigations.OTHER_DETAIL]: {
    //   screen: OtherDetail
    // },
    // [Navigations.PAYMENT]: {
    //   screen: Payment
    // },
    // [Navigations.BILL]: {
    //   screen: Bill
    // },
    // [Navigations.MANAGE_ORDER]: {
    //   screen: ManageOrder
    // },
    // [Navigations.ORDER_DETAIL]: {
    //   screen: OrderDetail
    // }
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