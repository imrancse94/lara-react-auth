import {combineReducers} from 'redux';
import authReducer from './authreducer';
const rootreducer = combineReducers({
   auth:authReducer
})

export default rootreducer;