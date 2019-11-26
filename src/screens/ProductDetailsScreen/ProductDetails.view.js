import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { COLORS, IMAGES } from '../../assets';
import styles from './ProductDetails.styles';
import { formatMoney } from '../../utils/formatCurrency';

import ScreenIds from '../../navigation/screenIds';

import Icon from 'react-native-vector-icons/Ionicons';
import UserPartials from '../../components/UserPartials/UserPartials.component';
import RecommendContainer from '../../components/RecommendContainer/RecommendContainer.component';

const navigateToMessage = (navigation) => {
  navigation.navigate(ScreenIds.THREAD);
}

const navigateToCart = (navigation) => {
  navigation.navigate(ScreenIds.CART);
}

const ProductDetails = (props) => {
  const item = props.navigation.getParam('item', {})
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll} bounces={false}>
        <Image
          source={item.uri ? { uri: item.uri } : IMAGES.DEFAULT}
          style={styles.image}
        />
        <View style={styles.dataContainer}>
          <Text style={styles.timeLocation}>Ho Chi Minh, VietNam • 2h ago</Text>
          <View style={styles.namePrice}>
            <Text style={styles.nameText}>{item.product_name}</Text>
            <Text style={styles.priceText}>{item.price ? formatMoney(item.price) : formatMoney(200000)}đ</Text>
          </View>
          <View style={styles.divider} />
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
        <View style={[styles.popularContainer, { marginTop: 20 }]}>
          <View style={styles.header}>
            <Icon
              name={'ios-gift'}
              color={COLORS.appColor}
              size={22} />
            <Text style={styles.title}>SẢN PHẨM LIÊN QUAN</Text>
          </View>
          <RecommendContainer data={props.categoryData} />
        </View>
      </ScrollView>
    </View>
  )
};

export default ProductDetails;
