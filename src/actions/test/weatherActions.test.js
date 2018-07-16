import React from 'react';
import * as weatherActions from '../weatherActions.js';

describe('weatherActions and weatherAction Creators', () => {

  //**************************** Actions **********************
  describe('weatherActions', () => {


    const weather = {
      name: 'Los Angeles',
      currently: {}
    };

    describe('loadWeatherSuccess', () => {
      it('should return a type of LOAD_WEATHER_SUCCESS with a single weather object', () => {
         const expected = {
           type: 'LOAD_WEATHER_SUCCESS',
           payload: weather
         };//expected

         expect(weatherActions.loadWeatherSuccess(weather)).toEqual(expected);
      });//it
    });

    describe('createWeatherSuccess', () => {
      it('should return a type of CREATE_WEATHER_SUCCESS with a single weather object', () => {
        const expected = {
          type: 'CREATE_WEATHER_SUCCESS',
          payload: weather
        };//expected

        expect(weatherActions.createWeatherSuccess(weather)).toEqual(expected);
      });//it
    });//describe

    describe('destroyWeatherSuccess', () => {
      it('should return a type of DESTROY_WEATHER_SUCCESS with a single weather object', () => {
        const expected = {
          type: 'DESTROY_WEATHER_SUCCESS',
          payload: weather
        };//expected

        expect(weatherActions.destroyWeatherSuccess(weather)).toEqual(expected);
      });//it
    });//describe

  });//weatherActions



  //************************ Action Creator Fetch Requests **********************
  describe('weatherAction creator fetch requests', () => {

    const losAngelesUrl = 'https://api.darksky.net/forecast/33b9d25191f4ef8de9ee678ec256fcb4/37.8267,-122.4233';

    describe('loadWeather fetch', () => {
      it('should return a weather object for Los Angeles', () => {
        let losAngeles = {};
        fetch(losAngelesUrl)
          .then( async response => {
            losAngeles = await response.json();
          });//then

          expect(losAngeles.timezone).toEqual('America/Los_Angeles');
      });//it
    });//describe

  });//weatherAction Creators

});//outermost describe
