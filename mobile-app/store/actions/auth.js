import axios from 'axios';
import { LOGIN, LOGOUT, LOG_IN_ERROR, CHANGE_PASSWORD, FORGET_PASSWORD, CHANGE_PASSWORD_ERROR, FORGET_PASSWORD_ERROR, DELETE_ACCOUNT, DELETE_ACCOUNT_ERROR } from '../types/auth'
import { baseUrl } from '../../utils/url'

export function login(email, password) {
  return async dispatch => {
    function onSuccess(response) {
      // set token as default header
      axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;

      dispatch({ type: LOGIN, payload: response.data });
      return { response, status: 'success' };
    }
    function onError(error) {
      dispatch({ type: LOG_IN_ERROR, error });
      return { error, status: 'error' };
    }
    try {
      const response = await axios.post(`${baseUrl}/auth/signin`, { email, password });
      return onSuccess(response);
    }
    catch (err) {
      return onError(err);
    }
  };
};

export function logout() {
  axios.defaults.headers.common['Authorization'] = null;
  return {
    type: LOGOUT,
    payload: null
  }
};

export function signup(user) {

  return async dispatch => {

    function onSuccess(response) {

      // set token as default header
      axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;

      dispatch({ type: LOGIN, payload: response.data });
      const res = { response, status: 'success' };
      return res;

    }

    function onError(error) {

      dispatch({ type: LOG_IN_ERROR, error });
      let status = "error";
      if (error.response.data.message === "Invitation code is invalid") {
        status = 'invalid_code'
      }
      return { error: error.response, status };

    }

    try {
      const splitedAvatarUrl = user.avatar.uri.split('/')
      const originalFileName = splitedAvatarUrl[splitedAvatarUrl.length - 1]
      let originalFileExt = originalFileName.split('.')
      originalFileExt = originalFileExt[originalFileExt.length - 1]
      const formData = new FormData();
      formData.append('firstName', user.firstName)
      formData.append('lastName', user.name)
      formData.append('email', user.email)
      formData.append('age', user.age)
      formData.append('city', user.city)
      formData.append('zipcode', user.zipcode)
      formData.append('address', user.address)
      formData.append('password', user.password)
      formData.append('avatar', {
        uri: user.avatar.uri,
        name: originalFileName,
        type: `image/${originalFileExt}`
      }, user.avatar.name)

      const response = await axios.post(`${baseUrl}/auth/signup`, formData, {
        headers: {
          "Content-Type": 'multipart/form-data',
          "Accept": 'application/json'
        }
      });

      return onSuccess(response);

    }

    catch (err) {

      return onError(err);

    }

  };

};


export function changePassword(oldPassword, password) {
  return async (dispatch, getState) => {
    function onSuccess(response) {
      dispatch({ type: CHANGE_PASSWORD })
      return { response, status: 'success' };
    }
    function onError(error) {
      dispatch({ type: CHANGE_PASSWORD_ERROR, payload: error })
      return { error, status: 'error' };
    }

    try {
      const response = await axios.put(`${baseUrl}/auth/change-password`,
        { email: getState().auth.user.email, oldPassword, password },
        { headers: { Authorization: `bearer ${getState().auth.user.token}` } }
      )
      return onSuccess(response)
    }
    catch (err) {
      return onError(err)
    }
  }
}

export function deleteAccount() {
  return async (dispatch, getState) => {
    function onSuccess(response) {
      dispatch({ type: DELETE_ACCOUNT })
      return { response, status: 'success' };
    }
    function onError(error) {
      dispatch({ type: DELETE_ACCOUNT_ERROR, payload: error })
      return { error, status: 'error' };
    }

    try {
      const response = await axios.delete(`${baseUrl}/auth/delete-account`,
        {
          headers: { Authorization: `bearer ${getState().auth.user.token}` },
          data: { email: getState().auth.user.email }
        }
      )
      return onSuccess(response)
    }
    catch (err) {
      return onError(err)
    }
  }
}

export function reset(email) { // used for reset password
  return async (dispatch, getState) => {
    function onSuccess(response) {
      dispatch({ type: FORGET_PASSWORD })
      return { response, status: 'success' };
    }
    function onError(error) {
      dispatch({ type: FORGET_PASSWORD_ERROR, payload: error })
      return { error, status: 'error' };
    }

    try {
      const response = await axios.post(`${baseUrl}/auth/reset`, { email: email })
      return onSuccess(response)
    }
    catch (err) {
      return onError(err)
    }
  }
}