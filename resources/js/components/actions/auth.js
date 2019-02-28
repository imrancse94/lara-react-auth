import * as types from './index';
import * as constants from './constant';
import Axios from 'axios';

const AuthStr = 'Bearer '.concat(constants.USER_TOKEN);
const URL = '/api/products';
const HEADERS = { Accept:'application/json',headers: { Authorization: AuthStr } }
export const register = user => dispatch =>{
    Axios.get(URL,HEADERS)
    	 .then(response => {
            dispatch({
            	type: types.SET_USER,
            	payload:{
            		response:response.data.data
            	}
            })
          })
          .catch((error) => {
            dispatch({
            	type: types.USERS_ERROR,
            	payload:{
            		error:error.data.data
            	}
            })
          }); 
}

