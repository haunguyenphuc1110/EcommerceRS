import CONSTANTS from '../constants';

const initialState = {
  listCategory: [],
  topProductCateLvl1: [],
  topProductCateLvl2: [],
  topProductCateLvl3: [],
  pending: false,
  error: false
};

const categoryDataReducer = (state = initialState, action) => {
	switch (action.type) {
    case CONSTANTS.GET_LIST_CATEGORY_LVL2:
    case CONSTANTS.GET_LIST_CATEGORY_LVL3:
    case CONSTANTS.GET_TOP_PRODUCT_CATE_LVL1:
    case CONSTANTS.GET_TOP_PRODUCT_CATE_LVL2:
    case CONSTANTS.GET_TOP_PRODUCT_CATE_LVL3:
			return {
				...state,
        pending: true
			};
		case CONSTANTS.GET_LIST_CATEGORY_LVL2_SUCCEED:
    case CONSTANTS.GET_LIST_CATEGORY_LVL3_SUCCEED:
			return {
				...state,
        listCategory: action.payload,
        pending: false,
        error: false
      };
      
    case CONSTANTS.GET_TOP_PRODUCT_CATE_LVL1_SUCCEED:
      debugger;
      return {
        ...state,
        topProductCateLvl1: action.payload,
        pending: false,
        error: false
      };
    
    case CONSTANTS.GET_TOP_PRODUCT_CATE_LVL2_SUCCEED:
      return {
        ...state,
        topProductCateLvl2: action.payload,
        pending: false,
        error: false
      };

    case CONSTANTS.GET_TOP_PRODUCT_CATE_LVL3_SUCCEED:
      return {
        ...state,
        topProductCateLvl3: action.payload,
        pending: false,
        error: false
      };

    case CONSTANTS.GET_LIST_CATEGORY_LVL2_FAILED:
    case CONSTANTS.GET_LIST_CATEGORY_LVL3_FAILED:
    case CONSTANTS.GET_TOP_PRODUCT_CATE_LVL1_FAILED:
    case CONSTANTS.GET_TOP_PRODUCT_CATE_LVL2_FAILED:
    case CONSTANTS.GET_TOP_PRODUCT_CATE_LVL3_FAILED: 
      return {
        ...state,
        pending: false,
        error: true
      };

		default:
			return state;
	}
};

export default categoryDataReducer;