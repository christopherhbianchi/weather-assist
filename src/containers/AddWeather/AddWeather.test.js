import React from 'react';
import { shallow } from 'enzyme';
import { AddWeather, mapStateToProps, mapDispatchToProps } from './AddWeather.js';
const CityCoordinates = require('../../resources/CityCoordinates.js');

describe('<AddWeather />', () => {

  const renderedComponent = shallow(
    <AddWeather />
  );//shallow


  it('should match snapshot', () => {
    expect(renderedComponent).toMatchSnapshot();
  });//it

  it('should have a default state', () => {
    const expected = { locationToAdd: CityCoordinates.LasVegas };
    expect(renderedComponent.state()).toEqual(expected);
  });//it

  it('should map the store correctly', () => {
    const mockStore = { weather: {} };
    const mapped = mapStateToProps(mockStore);

    expected(mapped).toEqual(mockStore);
  });//it

  it('should dispatch createWeather', () => {
    const mockDispatch = jest.fn();
    const mapped = mapDispatchToProps(mockDispatch);

    mapped.createWeather();

    expected(mockDispatch).toHaveBeenCalled();
  });//it







});//describe
