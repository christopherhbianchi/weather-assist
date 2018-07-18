import React from 'react';
import { shallow } from 'enzyme';
import Routes, { mapStateToProps } from './Routes.js';

describe('<Routes />', () => {

  it('should match snapshot', () => {
    const renderedComponent = shallow(
      <Routes />
    );
    expect(renderedComponent).toMatchSnapshot();
  });//it

  it('should map the store correctly', () => {
    const mockStore = { activeUser: {} };
    const mapped = mapStateToProps(mockStore);

    expect(mapped).toEqual(mockStore);
  });//it


});//describe
