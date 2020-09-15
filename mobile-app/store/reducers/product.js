import { CREATE_PRODUCT, ERROR_ON_CREATE_PRODUCT, } from '../types/product';

const defaultStates = {
  product: {
    id: null,
    name: null,
    species: null,
    preview: null,
    stock: null
  },
};

export default function (state = defaultStates, action) {
  switch (action.type) {
    case CREATE_PRODUCT:
      return { product: { ...action.payload.product }};
    case ERROR_ON_CREATE_PRODUCT:
      return state;
  }
};
