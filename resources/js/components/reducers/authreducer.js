import * as myactions from '../actions';


const init = { user: null, isAuthenticated: false }

const authReducer = (state = init, action) => {
  
      switch(action.type){
         case myactions.SET_USER:
         return Object.assign({}, state, { user: action.user });
         case myactions.USERS_ERROR:
         
         {
            return{
               ...state,
               error:action.payload
            }
         }
         case myactions.SET_AUTHENTICATED:
         return Object.assign({}, state, { isAuthenticated: action.authenticated });
         default : return state;
      }
}

export default authReducer;