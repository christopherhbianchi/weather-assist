import { activeUserReducer } from '../activeUserReducer.js';
import * as actions from '../../actions/activeUserActions.js';


describe('activeUserReducer', () => {

  it('should return the default state', () => {
    const expected = {};
    expect(activeUserReducer(undefined, {})).toEqual(expected);
  });//it

  it('should return the state with the active user', () => {
    const user = { username:'cbianchi', password: 'pass1' };
    const action = actions.loginUserSuccess(user);
    const expected = user;

    expect(activeUserReducer(undefined, action)).toEqual(expected);
  });//it

  it('should return the state with the active user removed', () => {
    const user = { username:'cbianchi', password: 'pass1' };
    const action = actions.logoutUserSuccess();
    const store =  user;
    const expected = {};

    expect(activeUserReducer(store, action)).toEqual(expected);
  });//it


});//describe
