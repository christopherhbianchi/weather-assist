//****************************** Actions
export const loginUserSuccess = user => {
  return {
    type:'LOGIN_USER_SUCCESS',
    payload: user
  };
};//loginUserSuccess

export const logoutUserSuccess = () => {
  return { type:'LOGOUT_USER_SUCCESS' };
};//logoutUserSuccess
