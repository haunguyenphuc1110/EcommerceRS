import CONSTANT from '../constants';
import { addExistProductToCart, removeProductCart, updateCartQuantity } from '../actions/cartDataActions';

const cartMiddleware = store => next => action => {
  var { cartReducer } = store.getState();
  var product;
  switch (action.type) {
    case CONSTANT.ADD_PRODUCT_CART:
      product = cartReducer.listProduct.find(item => item.product_id === action.payload.product_id);
      if (!product) {
        next(action);
        next(updateCartQuantity(cartReducer.cartQuantity + 1));
      }
      else {
        const indexProduct = cartReducer.listProduct.findIndex(item => item.product_id === action.payload.product_id);
        product.quantity += 1;
        cartReducer.listProduct[indexProduct] = product;
        next(addExistProductToCart(cartReducer.listProduct));
        next(updateCartQuantity(cartReducer.cartQuantity + 1));
      }
      break;

    case CONSTANT.REMOVE_PRODUCT_CART:
      let listProduct = cartReducer.listProduct.filter(item => item.product_id !== action.payload);
      product = cartReducer.listProduct.find(item => item.product_id === action.payload);
      let cartQuantity = cartReducer.cartQuantity - product.quantity;
      next(removeProductCart(listProduct));
      next(updateCartQuantity(cartQuantity));
      break;

    default:
      next(action);

  }
}

export default cartMiddleware;
