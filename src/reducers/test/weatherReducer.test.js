import { weatherReducer } from '../weatherReducer.js';
import * as actions from '../../actions/weatherActions.js';


describe('weatherReducer', () => {
  it('should return the default state', () => {
    const expected = [];
    expect(weatherReducer(undefined, {})).toEqual(expected);
  });//it

  it('should return the state with a weather object added', () => {
    const newWeather = {
      name: 'Los Angeles',
      currently:{
        summary: 'clear'
      },//currently
      latitude: 100
    }//newWeather
    const store = [];
    const action = actions.createWeatherSuccess(newWeather);
    const expected = [ newWeather ];

    expect(weatherReducer(store, action)).toEqual(expected);
  });//it

  it('should return the state with a specific weather object removed', () => {
    const weatherToRemove = {
      name: 'Los Angeles',
      currently:{
        summary: 'clear'
      },//currently
      latitude: 100
    }//newWeather

    const store = [ weatherToRemove ];
    const action = actions.destroyWeatherSuccess(weatherToRemove);
    const expected = [];

    expect(weatherReducer(store, action)).toEqual(expected);
  });//it



});//closes outermost describe
