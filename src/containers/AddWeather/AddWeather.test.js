import React from 'react';
import { shallow } from 'enzyme';
import AddWeather from './AddWeather.js';

describe('<AddWeather />', () => {
  it('should match snapshot', () => {
    const renderedComponent = shallow(
      <AddWeather />
    );//shallow
    expect(renderedComponent).toMatchSnapshot();
  });//it
});//describe
