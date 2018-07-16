export const activeUserReducer = ( state={}, action) =>{
  switch(action.type){
    case 'LOGIN_USER_SUCCESS':
      return action.payload;
    case 'LOGOUT_USER_SUCCESS':
      return {};  
    default:
      return state;
  }
}
