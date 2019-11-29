import CONSTANT from '../constants';
import { saveViewedProduct } from '../actions/homeDataActions';

const homeMiddleware = store => next => action => {
  switch (action.type) {
    case CONSTANT.SAVE_VIEWED_PRODUCT:
      let { homeReducer } = store.getState();
      let product = homeReducer.viewedProducts.find(item => item.product_id === action.payload.product_id);
      if (!product) {
        next(saveViewedProduct(action.payload));
      }
      break;

    default:
      next(action);

  }
}

export default homeMiddleware;
