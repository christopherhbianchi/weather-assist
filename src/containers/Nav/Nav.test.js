import React from 'react';
import { shallow } from 'enzyme';
import { Nav, mapStateToProps, mapDispatchToProps } from './Nav.js';


describe('<Nav />', () => {
  const renderedComponent = shallow(<Nav />);

  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });//it


  it('should map the store correctly', () => {
    const mockStore = { activeUser:{} };
    const mapped = mapStateToProps(mockStore);

    expect(mapped).toEqual(mockStore);
  });//it


  it('should dispatch logoutUserSuccess', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.logoutUserSuccess();
    expect(mockDispatch).toHaveBeenCalled();
  });//it


  it('should logout user on click', () => {
    const mockFunction = jest.fn();
    renderedComponent.find('.nav-link-logout').simulate('click');
    expect(mockFunction.mock.calls.length).toEqual(1);
  });//it

});//describe
