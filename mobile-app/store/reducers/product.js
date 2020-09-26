import { 
  FETCH_PRODUCTS,
  ERROR_ON_PRODUCTS,
  CREATE_PRODUCT,
  ERROR_ON_CREATE_PRODUCT, 
} from '../types/product';

const defaultStates = {
  products: [],
};

export default function (state = defaultStates, action) {
  switch (action.type) {
    case FETCH_PRODUCTS:
      console.log("check action products : ", [...action.payload] )
      return [...action.payload];
    case ERROR_ON_PRODUCTS:
      return state;
    case CREATE_PRODUCT:
      return { product: { ...action.payload.product }};
    case ERROR_ON_CREATE_PRODUCT:
      return state;
    default:
      return state;
  }
};
