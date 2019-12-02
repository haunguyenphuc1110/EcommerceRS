import CONSTANTS from '../constants';

const initialState = {
  listProduct: [],
  cartQuantity: 0,
  total: 0
};

const cartDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_PRODUCT_CART:
      return {
        ...state,
        listProduct: state.listProduct.concat({
          ...action.payload,
          quantity: 1
        })
      };

    case CONSTANTS.ADD_EXIST_PRODUCT_CART:
    case CONSTANTS.REMOVE_PRODUCT_CART:
      return {
        ...state,
        listProduct: action.payload
      }

    case CONSTANTS.UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartQuantity: action.payload
      }

    case CONSTANTS.UPDATE_TOTAL_PRICE:
      return {
        ...state,
        total: action.payload
      }

    default:
      return state;
  }
};

export default cartDataReducer;