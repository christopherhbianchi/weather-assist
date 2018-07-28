export const usersReducer = (state = {}, action) => {
  switch (action.type){
  case 'LOAD_USERS_SUCCESS':{
    let newState = Object.assign({}, state);
    newState = action.payload; //payload is the object of objects
    return newState;
  }
  case 'REGISTER_USER_SUCCESS':{
    const {username, password} = action.payload;
    return {
      ...state,
      username: { password: password }
    };
    // // let newState = Object.assign({}, state);
    // newState[newUser.username] = { password: newUser.password };
    // return newState;
  }
  default:
    return state;
  }//switch
};//reducer
