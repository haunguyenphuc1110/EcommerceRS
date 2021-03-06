import React from 'react';
import { TouchableOpacity, View, Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProductDetails from './ProductDetails.view';
import CartHeader from '../../components/Common/CartHeader/CartHeader.component';
import { connect } from 'react-redux';
import { COLORS } from '../../assets';
import { capitalizeFirstLetter } from '../../utils/stringUtils';

import { addProductToCart } from '../../store/actions/cartDataActions';
import { getRelatedProduct } from '../../store/actions/productDataActions';

const ProductDetailsScreen = (props) => (<ProductDetails {...props}/>);

const mapStateToProps = state => {
  return {
    categoryDataLvl1: state.homeReducer.listCategoryLvl1,
    recommendationData: state.homeReducer.listProduct,
    cartData: state.cartReducer.listProduct,
    listRelatedProduct: state.productReducer.listRelatedProduct,
    pending: state.productReducer.pending
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addProductToCart: (product) => dispatch(addProductToCart(product)),
    getRelatedProduct: (payload) => dispatch(getRelatedProduct(payload))
  };
};

ProductDetailsScreen.navigationOptions = ({ navigation }) => {
  return {
    title: capitalizeFirstLetter(navigation.getParam('title', 'Chi tiết sản phẩm')),
    headerTransparent: false,
    headerRight: (
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity>
          <View
            style={{ marginRight: 10 }}
          >
            <Icon
              name={'ios-heart-empty'}
              size={Platform.OS === 'ios' ? 26 : 20}
              color='white'
            />
          </View>
        </TouchableOpacity>
        <CartHeader navigation={navigation} color={COLORS.white}/>
      </View>
    ),
    headerRightContainerStyle: {
      ...Platform.select({
        ios: {
          paddingRight: 9,
          paddingVertical: 12
        },
        android: {
          paddingRight: 10,
          paddingVertical: 12
        }
      })
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailsScreen);