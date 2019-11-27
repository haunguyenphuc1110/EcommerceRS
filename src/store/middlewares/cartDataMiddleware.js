import CONSTANT from '../constants';
import { addExistProductToCart } from '../actions/cartDataActions';

const cartMiddleware = store => next => action => {
  switch (action.type) {
    case CONSTANT.ADD_PRODUCT_CART:
      let { cartReducer } = store.getState();
      let product = cartReducer.listProduct.find(item => item.product_id === action.payload.product_id);
      if (!product) {
        next(action);
      }
      else {
        const indexProduct = cartReducer.listProduct.findIndex(item => item.product_id === action.payload.product_id);
        product.quantity += 1;
        cartReducer.listProduct[indexProduct] = product;
        next(addExistProductToCart(cartReducer.listProduct));
      }
      break;

    default:
      next(action);

  }
}

export default cartMiddleware;
