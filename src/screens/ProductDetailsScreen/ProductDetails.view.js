import React, { Component } from 'react';
import { View, ScrollView, Image, Text, TouchableOpacity } from 'react-native';
import { COLORS, IMAGES } from '../../assets';
import styles from './ProductDetails.styles';
import { formatMoney } from '../../utils/formatCurrency';
import { capitalizeFirstLetter } from '../../utils/stringUtils';

import ScreenIds from '../../navigation/screenIds';

import Icon from 'react-native-vector-icons/Ionicons';
import UserPartials from '../../components/UserPartials/UserPartials.component';
import RelatedContainer from '../../components/RelatedContainer/RelatedContainer.component';
import Spinner from '../../components/Common/LoadingIndicator/Loading.conponent';

class ProductDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      item: props.navigation.getParam('item', {})
    }
  }

  componentWillReceiveProps(nextProps) {
    const { pending } = nextProps;
    const { pending: previousPending } = this.props;
    if (!pending && pending !== previousPending) {
      this.setState({
        isLoading: false,
      })
    }
  }

  componentDidMount() {
    const { getRelatedProduct } = this.props;
    getRelatedProduct(this.state.item.product_id);
  }

  navigateToMessage = (item) => {
    this.props.navigation.navigate(ScreenIds.THREAD, { item });
  }
  
  navigateToCart = (item) => {
    this.props.addProductToCart(item);
    this.props.navigation.navigate(ScreenIds.CART);
  }
  
  addToCart = (item) => {
    this.props.addProductToCart(item);
  }
  
  onNavigateToDetails = (item, title, navigation) => {
    navigation.push(ScreenIds.PRODUCT_DETAILS, { item, title });
  }

  render() {
    const { isLoading, item } = this.state;
    const { listRelatedProduct, navigation } = this.props;
    return (
      <View style={styles.container}>
        <Spinner
          visible={isLoading}
          textStyle={{ color: COLORS.white }}
          cancelable={!isLoading}
        />
        <ScrollView contentContainerStyle={styles.scroll}>
          <Image
            source={item.uri ? { uri: item.uri } : IMAGES.PRODUCT}
            style={styles.image}
            resizeMode="contain"
          />
          <View style={styles.dataContainer}>
            <Text style={styles.timeLocation}>Ho Chi Minh, VietNam • 2 tiếng trước</Text>
            <View style={styles.namePrice}>
              <Text style={styles.nameText}>{capitalizeFirstLetter(item.product_name)}</Text>
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
              avatarUrl={IMAGES.ICON_APP}
              navigateToCart={() => this.navigateToCart(item)}
              navigateToMessage={() => this.navigateToMessage(item)}
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
            <RelatedContainer
              data={listRelatedProduct.slice(0, 20)}
              navigation={navigation}
              onNavigateToDetails={this.onNavigateToDetails} />
          </View>
        </ScrollView>
        <TouchableOpacity style={styles.button} onPress={() => this.addToCart(item)}>
          <Text style={styles.textButton}>Thêm vào giỏ hàng</Text>
        </TouchableOpacity>
      </View>
    )
  }
};

export default ProductDetails;
