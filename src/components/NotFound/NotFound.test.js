import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound.js';

describe('<NotFound />', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(<NotFound />);
    expect(renderedComponent).toMatchSnapshot();
  });//it
});//describe
