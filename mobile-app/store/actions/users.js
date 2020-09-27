import axios from 'axios';
import { baseUrl } from '../../utils/url';

import { FETCH_USER, ERROR_ON_USER } from '../types/users';

export function showUser(userId){
    return async function(dispatch, getState) {
        function onSuccess(response){
            console.log("enter in response");
            console.log("check response onSuccess in showUser : ", response.data);
            dispatch({ type: FETCH_USER, payload: response.data })
        }
        function onError(error){
            console.log("enter in error");
            console.log("check error onError in showUser : ", error);

            dispatch({ type: ERROR_ON_USER, payload: error})
        }
        try{
            const response = await axios.get(`${baseUrl}/users/${ userId }`, {
                headers: { Authorization: `bearer ${getState().auth.user.token }` }
            })
            console.log("check response in showUser : ", response);
            onSuccess(response)
        }
        catch(err){
            onError(err)
        }
    }
}