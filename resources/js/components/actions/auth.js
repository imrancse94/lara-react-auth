import * as types from './index';
import * as constants from './constant';
import Axios from 'axios';
import { checkTokenExists, setToken } from '../helper/auth';

const AuthStr = 'Bearer '.concat(constants.USER_TOKEN);
const URL = '/oauth/token';
const HEADERS = { Accept:'application/json',headers: { Authorization: AuthStr } }

const fetchUser = () => {
  return window.axios.get('/api/getAuth')
    .then(response => Promise.resolve(response.data))
    .catch(error => Promise.reject(error.data));
};

export const clearAuth = () => dispatch => {
  setToken(null);
  dispatch(setUserData(null));
  dispatch(setAuthenticated(false));
};

export const setUserData = user => ({
  type: types.SET_USER,
  user
  
});

export const setAuthenticated = authenticated => ({
  type: types.SET_AUTHENTICATED,
  authenticated
});

export const register = user => dispatch =>{
    Axios.get(URL,HEADERS)
    	 .then(response => {
            dispatch({
            	type: types.SET_USER,
            	payload:{
            		response:response.data.data
            	}
            })
          }).catch((error) => {
            dispatch({
            	type: types.USERS_ERROR,
            	payload:{
            		error:error.data.data
            	}
            })
          }); 
}

export const signInUser = credentials => dispatch => {  
  return window.axios.post(URL, credentials).then(response => {
		var data = response.data;
		var token = data.access_token;
    console.log(data);
    setToken(token);
    dispatch(setUserData(data));
    dispatch(setAuthenticated(true));
    return Promise.resolve({ data, token });
  }).catch(error => {
    return Promise.reject(error);
  });
};



export const initAuthFromExistingToken = () => dispatch => {
  checkTokenExists().then(token => {
    setToken(token);
    fetchUser().then(data => {
      dispatch(setUserData(data));
      dispatch(setAuthenticated(true));
    }).catch(anyError => {
      console.log('tttttt')
      dispatch(clearAuth());
    });
  }).catch(anyError => {
    console.log('uuuuuu')
    dispatch(clearAuth());
   
  });
};
