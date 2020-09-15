import axios from 'axios';
import { CREATE_PRODUCT, ERROR_ON_CREATE_PRODUCT } from '../types/product';
import { baseUrl } from '../../utils/url';

import * as Network from 'expo-network';




export function createProduct(product) {
  return async (dispatch) => {
      function onSuccess(response) {
          dispatch({ type: CREATE_PRODUCT, payload: response.data })
          return { response, status: 'success' };
      }
      function onError(error) {
          dispatch({ type: ERROR_ON_CREATE_PRODUCT, payload: error })
          return { error, status: 'error' };
      }
      try {
        const splitedPreviewUrl = product.preview.uri.split('/');
        const originalFileName = splitedPreviewUrl[splitedPreviewUrl.length - 1];
        const uriFile = `http://${await Network.getIpAddressAsync()}:5000/uploads/avatars/${originalFileName}`;
        
        const params = new URLSearchParams();

        params.append('name', product.name)
        params.append('species', product.species)
        params.append('price', product.price)
        params.append('preview', uriFile)
        params.append('stock', product.stock)
        params.append('companyId', product.companyId)

          const response = await axios.post(
            `${baseUrl}/products`,
            params, 
            { headers:  { "Content-Type": "application/x-www-form-urlencoded" }
            }
          );
          console.log( "check response from action", response);

          return onSuccess(response)
      }
      catch (err) {
        console.log( "check error from action", err);
          return onError(err)
      }
  }
}