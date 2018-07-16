import React from 'react';
import * as activeUserActions from '../activeUserActions.js';

describe('activeUserActions', () => {


  describe('loginUserSuccess', () => {
    it('should return a type of LOGIN_USER_SUCCESS with a single user', () => {
      const user = { username: 'user1', password: 'pass1' };
      const expected = {
        type: 'LOGIN_USER_SUCCESS',
        payload: user
      };//expected

      expect(activeUserActions.loginUserSuccess(user)).toEqual(expected);
    });//it
  });//describe


  describe('logoutUserSuccess', () => {
    it('should return a type of LOGOUT_USER_SUCCESS', () => {
      const expected = { type: 'LOGOUT_USER_SUCCESS' };

      expect(activeUserActions.logoutUserSuccess()).toEqual(expected);
    });//it
  });//describe



});//outer describe
