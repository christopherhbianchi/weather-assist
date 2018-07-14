//****************************** Actions
export const loginUserSuccess = user => {
  return {
    type:'LOGIN_USER_SUCCESS',
    payload: user
  }
}//loginUserSuccess

export const logoutUserSuccess = () => {
  type:'LOGOUT_USER_SUCCESS'
}//logoutUserSuccess
