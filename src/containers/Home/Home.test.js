import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home.js';

describe('<Home />', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow (<Home />);
    expect(renderedComponent).toMatchSnapshot();
  });//it
});//describe
