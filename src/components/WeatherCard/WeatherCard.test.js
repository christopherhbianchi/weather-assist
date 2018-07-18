import React from 'react';
import { shallow } from 'enzyme';
import { WeatherCard } from './WeatherCard.js';

describe('<WeatherCard />', () => {

  it('should match snapshot', () => {
    const weather = { //weather object, currently object, summary is a propert of currently
      currently:{
        summary:'clear',
        temperature:70,
        windSpeed:10,
        precipProbability: 20
      }
    };//weather
    const renderedComponent = shallow(
      <WeatherCard
        weather={weather}
        removeCard={ () => {} } />
    );//shallow
    expect(renderedComponent).toMatchSnapshot();
  });//it


});//describe
