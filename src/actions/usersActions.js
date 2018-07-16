//****************************** Actions
export const loadUsersSuccess = (usersObj) => {
  return{
    type: 'LOAD_USERS_SUCCESS',
    payload: usersObj
  }//return
}//loadUsersSuccess

export const registerUserSuccess = user => ({
  type: 'REGISTER_USER_SUCCESS',
  payload: user
});
