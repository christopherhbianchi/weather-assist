export const usersReducer = (state = {}, action) => {
  switch (action.type){
  case 'LOAD_USERS_SUCCESS':{
    console.log('Action.payload: ' + action.payload);
    console.log('Action.payload keys: ' + Object.keys(action.payload));
    let newState = Object.assign({}, state);
    newState = action.payload; //payload is the object of objects
    return newState;
  }
  case 'REGISTER_USER_SUCCESS':{
    let newUser = action.payload;
    let newState = Object.assign({}, state);
    console.log('Users reducer, newUser: ' + newUser);
    console.log('Users reducer, newUser: ' + newUser.username);
    newState[newUser.username] = { password: newUser.password };
    return newState;
  }
  default:
    return state;
  }//switch
};//reducer
