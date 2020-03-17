import axios from 'axios';
import { LOGIN_USER, LOGIN_COMPANY, LOGIN_RUNER, LOGOUT, CHANGE_PASSWORD, FORGET_PASSWORD, DELETE_ACCOUNT } from '../types/auth';
import { baseUrl } from '../../utils/url';

export function loginUser(user) {
  return async dispatch => {
    function onSuccess(response) {
      // set token as default header
      axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;
      dispatch({ type: LOGIN_USER, payload: response.data });
      return { response, status: 'success' };
    }
    function onError(error) {
      return console.log("error_login:", error.message);
    }
    try {
      const response = await axios.post(`${baseUrl}/auth/signin/user`, user);
      return onSuccess(response);
    }
    catch (err) {
      return onError(err);
    }
  };
};

export function loginCompany(company) {
  return async dispatch => {
    function onSuccess(response) {
      // set token as default header
      axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;
      dispatch({ type: LOGIN_COMPANY, payload: response.data });
      return { response, status: 'success' };
    }
    function onError(error) {
      return console.log("error_login:", error.message);
    }
    try {
      const response = await axios.post(`${baseUrl}/auth/signin/company`, company);
      return onSuccess(response);
    }
    catch (err) {
      return onError(err);
    }
  };
};

export function loginRuner(runer) {
  return async dispatch => {
    function onSuccess(response) {
      // set token as default header
      axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;
      dispatch({ type: LOGIN_RUNER, payload: response.data });
      return { response, status: 'success' };
    }
    function onError(error) {
      return console.log("error_login:", error.message);
    }
    try {
      const response = await axios.post(`${baseUrl}/auth/signin/runer`, runer);
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

export function signupUser(user) {

  return async dispatch => {

    function onSuccess(response) {

      // set token as default header
      axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;

      dispatch({ type: LOGIN, payload: response.data });
      const res = { response, status: 'success' };
      return res;

    }

    function onError(error) {
      return console.log("error_signup:", error);
    }

    try {
      const splitedAvatarUrl = user.avatar.uri.split('/')
      const originalFileName = splitedAvatarUrl[splitedAvatarUrl.length - 1]
      let originalFileExt = originalFileName.split('.')
      originalFileExt = originalFileExt[originalFileExt.length - 1]
      const formData = new FormData();
      console.log("form in action", formData)
      
      formData.append('email', `${user.email}`)
      formData.append('password', user.password)
      formData.append('firstname', user.firstname)
      formData.append('lastname', user.lastname)
      formData.append('age', user.age)
      formData.append('city', user.city)
      formData.append('zipcode', user.zipcode)
      formData.append('address', user.address)
      
      formData.append('avatar', {
        uri: user.avatar.uri,
        name: originalFileName,
        type: `image/${originalFileExt}`
      }, user.avatar.name)

      
      console.log( "check form from action", formData)
      
      const response = await axios.post(`${baseUrl}/auth/signup/user`, formData);


      return onSuccess(response);

    }

    catch (err) {

      return onError(err);

    }

  };

};

export function signupCompany(company) {

  return async dispatch => {

    function onSuccess(response) {

      // set token as default header
      axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;

      dispatch({ type: LOGIN, payload: response.data });
      const res = { response, status: 'success' };
      return res;

    }

    function onError(error) {
      return console.log("error_signup:", error);
    }

    try {
      const splitedAvatarUrl = company.avatar.uri.split('/')
      const originalFileName = splitedAvatarUrl[splitedAvatarUrl.length - 1]
      let originalFileExt = originalFileName.split('.')
      originalFileExt = originalFileExt[originalFileExt.length - 1]
      const formData = new FormData();
      console.log("form in action", formData)
      
      formData.append('email', `${company.email}`)
      formData.append('password', company.password)
      formData.append('name', company.name)
      formData.append('city', company.city)
      formData.append('zipcode', company.zipcode)
      formData.append('address', company.address)
      
      formData.append('avatar', {
        uri: company.avatar.uri,
        name: originalFileName,
        type: `image/${originalFileExt}`
      }, company.avatar.name)

      
      console.log( "check form from action", formData)
      
      const response = await axios.post(`${baseUrl}/auth/signup/company`, formData /*formData, {
        headers: {
          "Content-Type": 'multipart/form-data',
          "Accept": 'application/json'
        }
        
      }*/);


      return onSuccess(response);

    }

    catch (err) {

      return onError(err);

    }

  };

};

export function signupRuner(runer) {

  return async dispatch => {

    function onSuccess(response) {

      // set token as default header
      axios.defaults.headers.common['Authorization'] = `bearer ${response.data.token}`;

      dispatch({ type: LOGIN, payload: response.data });
      const res = { response, status: 'success' };
      return res;

    }

    function onError(error) {
      return console.log("error_signup:", error);
    }

    try {
      const splitedAvatarUrl = runer.avatar.uri.split('/')
      const originalFileName = splitedAvatarUrl[splitedAvatarUrl.length - 1]
      let originalFileExt = originalFileName.split('.')
      originalFileExt = originalFileExt[originalFileExt.length - 1]
      const formData = new FormData();
      console.log("form in action", formData)
      
      formData.append('email', `${runer.email}`)
      formData.append('password', runer.password)
      formData.append('firstname', runer.firstname)
      formData.append('lastname', runer.lastname)
      formData.append('city', runer.city)
      formData.append('zipcode', runer.zipcode)
      formData.append('address', runer.address)

      formData.append('companyName', runer.companyName)
      
      formData.append('avatar', {
        uri: runer.avatar.uri,
        name: originalFileName,
        type: `image/${originalFileExt}`
      }, runer.avatar.name)

      
      console.log( "check form from action", formData)
      
      const response = await axios.post(`${baseUrl}/auth/signup/runer`, formData /*formData, {
        headers: {
          "Content-Type": 'multipart/form-data',
          "Accept": 'application/json'
        }
        
      }*/);


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
      return console.log("error_changePassword:", error);
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
      return console.log("error_deleteAccount:", error);
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
      return console.log("error_reset:", error);
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