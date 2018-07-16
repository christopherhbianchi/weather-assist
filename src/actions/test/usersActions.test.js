import React from 'react';
import * as usersActions from '../usersActions.js';

describe('usersActions', () => {

  describe('loadUsersSuccess', () => {
    it('should return a type of LOAD_USERS_SUCCESS with an object of user objects', () => {
      const usersObj = {
        user1: { password: 'pass1' },
        user2: { password: 'pass2' }
      };//usersObj
      const expected = {
        type: 'LOAD_USERS_SUCCESS',
        payload: usersObj
      };//expected

      expect(usersActions.loadUsersSuccess(usersObj)).toEqual(expected);
    });//it
  });//describe


  describe('registerUserSuccess', () => {
    it('should return a type of REGISTER_USER_SUCCESS with a single user', () => {
      const user = { username: 'user1', password: 'pass1' };
      const expected = { type: 'REGISTER_USER_SUCCESS', payload: user };

      expect(usersActions.registerUserSuccess(user)).toEqual(expected);
    });//it
  });//describe



});//outer describe
