import React from 'react';
import { shallow } from 'enzyme';
import { Nav, mapStateToProps, mapDispatchToProps } from './Nav.js';


describe('<Nav />', () => {
  const mockFunction = jest.fn();
  const renderedComponent = shallow(<Nav
    logoutUserSuccess={mockFunction}
    history={
      { push: () => {} }
    }/>);

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
    renderedComponent.find('.nav-link-logout').simulate('click', { preventDefault(){} });
    expect(mockFunction.mock.calls.length).toEqual(1);
  });//it

});//describe
