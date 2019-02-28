import * as myactions from '../actions';

const init = {
   isAuthenticated: false,
   user:{},
   error:{}
}

const authReducer = (state = init, action) => {
      switch(action.type){
         case myactions.SET_USER:{
            return {
               user : action.payload,
               isAuthenticated: Object.keys(action.payload) === 0,
               error:{}
            }
         }
         case myactions.USERS_ERROR:{
            return{
               ...state,
               error:action.payload
            }
         }
         default : return state;
      }
}

export default authReducer;