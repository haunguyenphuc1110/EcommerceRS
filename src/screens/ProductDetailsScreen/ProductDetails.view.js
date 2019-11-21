import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import Swiper from 'react-native-swiper';
import { COLORS, IMAGES } from '../../assets';
import styles from './ProductDetails.styles';

import ScreenIds from '../../navigation/screenIds';

import UserPartials from '../../components/UserPartials/UserPartials.component';

const navigateToMessage = (navigation) => {
  navigation.navigate(ScreenIds.THREAD);
}

const navigateToCart = (navigation) => {
  navigation.navigate(ScreenIds.CART);
}

const ProductDetails = (props) => (
  <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.scroll} bounces={false}>
      <Swiper
        style={styles.swiper}
        activeDotColor={COLORS.white}
        dotColor={COLORS.gray}
      >
        <Image
          source={{
            uri:
              'https://i.pinimg.com/564x/8f/27/44/8f27446e4f69541cb465e50b93dae15e.jpg'
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri:
              'https://i.pinimg.com/564x/6e/90/41/6e90412772257e9d16b18f6449d0b141.jpg'
          }}
          style={styles.image}
        />
        <Image
          source={{
            uri:
              'https://i.pinimg.com/564x/48/8a/ce/488acec32b6c8cf86fc034476b17b2bc.jpg'
          }}
          style={styles.image}
        />
      </Swiper>
      <View style={styles.dataContainer}>
        <Text style={styles.timeLocation}>Ho Chi Minh, VietNam • 2h ago</Text>
        <View style={styles.namePrice}>
          <Text style={styles.namePriceText}>Đồng hồ MVMTH</Text>
          <Text style={styles.namePriceText}>1.500.000 đ</Text>
        </View>
        <View style={styles.divider}/>
        <Text style={styles.description}>
          Selling my 2017 DJI Spark. Barely used, pretty new in condition and
          its the “Fly More Combo'. No Negotiations please.
        </Text>
        <Text style={styles.description}>
          Seize the Moment. Meet Spark, a mini drone that features all of DJI's
          signature technologies, allowing you to seize the moment whenever you
          feel inspired.
        </Text>
        <Text style={styles.readMore}>Read More</Text>
        <UserPartials
          name='Hau Nguyen'
          rating={4.6}
          avatarUrl={IMAGES.AVATAR}
          navigateToCart={() => navigateToCart(props.navigation)}
          navigateToMessage={() => navigateToMessage(props.navigation)}
        />
      </View>
    </ScrollView>
  </View>
);

export default ProductDetails;
