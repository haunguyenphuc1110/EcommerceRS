import CONSTANTS from '../constants';

const initialState = {
  listProduct: [],
  cartQuantity: 0
};

const cartDataReducer = (state = initialState, action) => {
	switch (action.type) {
    case CONSTANTS.ADD_PRODUCT_CART:
			return {
				...state,
        listProduct: state.listProduct.concat({
          ...action.payload,
          quantity: 1
        }),
        cartQuantity: state.cartQuantity + 1
			};

    case CONSTANTS.ADD_EXIST_PRODUCT_CART:
      return {
        ...state,
        listProduct: action.payload,
        cartQuantity: state.cartQuantity + 1
      }

		default:
			return state;
	}
};

export default cartDataReducer;