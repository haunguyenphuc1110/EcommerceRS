import CONSTANTS from '../constants';
import { saveViewedProduct } from '../actions/userDataActions';

const homeMiddleware = store => next => action => {
  switch (action.type) {
    case CONSTANTS.SAVE_VIEWED_PRODUCT:
      let { userReducer } = store.getState();
      let product = userReducer.viewedProducts.find(item => item.product_id === action.payload.product_id);
      if (!product) {
        next(saveViewedProduct(action.payload));
      }
      break;

    default:
      next(action);

  }
}

export default homeMiddleware;
