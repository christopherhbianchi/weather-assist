import React from 'react';
import { shallow } from 'enzyme';
import { LogIn, mapStateToProps, mapDispatchToProps } from './LogIn.js';

describe('<LogIn />', () => {
  const loadUsersSuccessMock = jest.fn();
  const renderedComponent = shallow(<LogIn
    loadUsersSuccess={ loadUsersSuccessMock }
  />);

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });//it

  it('should have a default state', () => {
    const expected = {
      username: '',
      password: ''
    };
    expect(renderedComponent.state()).toEqual(expected);
  });//it

  it('should map the store correctly', () => {
    const mockStore = { users: {} };
    const mapped = mapStateToProps(mockStore);
    expect(mapped).toEqual(mockStore);
  });

  it('should dispatch loginUserSuccess', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.loginUserSuccess();
    expect(mockDispatch).toHaveBeenCalled();
  });//it

  it('should dispatch loadUsersSuccess', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.loadUsersSuccess();
    expect(mockDispatch).toHaveBeenCalled();
  });//it

  it('should dispatch registerUserSuccess', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.registerUserSuccess();
    expect(mockDispatch).toHaveBeenCalled();
  });//it



});//describe
