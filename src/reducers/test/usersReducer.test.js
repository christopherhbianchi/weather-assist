import { usersReducer } from '../usersReducer.js';
import * as actions from '../../actions/usersActions.js';

describe('usersReducer', () => {

  it('should return the default state', () => {
    const expected = {};
    expect(usersReducer(undefined, {})).toEqual(expected);
  });//it



  it('should return the state with an object of user objects', () => {
    const usersObj = {
      cbianchi: { password: 'pass1'},
      ljames: { password: 'pass3' }
    };
    const action = actions.loadUsersSuccess(usersObj);
    const expected = usersObj;

    expect(usersReducer(undefined, action)).toEqual(expected);
  });//it



  it('should return the state with the new user object added', () => {
    const usersObj = {
      cbianchi: { password: 'pass1'},
      ljames: { password: 'pass3' }
    };
    const newUserFromRegForm = {
      username: 'kirving',
      password: 'pass4'
    };
    const store = usersObj; //may need to be in brackets
    const action = actions.registerUserSuccess(newUserFromRegForm);
    const expected = {
      cbianchi: { password: 'pass1'},
      ljames: { password: 'pass3' },
      kirving: { password: 'pass4' }
    };
    expect(usersReducer(store, action)).toEqual(expected);
  });//it



});//describe
