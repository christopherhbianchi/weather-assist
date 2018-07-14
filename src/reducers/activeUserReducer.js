export const activeUserReducer = ( state={}, action) =>{
  switch(action.type){
    case 'LOGIN_USER_SUCCESS':
      return action.payload;
    case 'LOGOUT_USER_SUCCESS':
      return Object.assign({}, {
        "username": "inactive",
        "password": "inactive"
      });  
    case 'INITIALIZE_ACTIVE_USER_SUCCESS':
      return Object.assign({}, {
        "username": "inactive",
        "password": "inactive"
      });
    default:
      return state;
  }
}
