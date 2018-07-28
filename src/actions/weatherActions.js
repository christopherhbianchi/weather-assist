const CityCoordinates = require('../resources/CityCoordinates.js');

const proxyForCors = "https://cors-anywhere.herokuapp.com/";
const loadUrl = proxyForCors + 'https://api.darksky.net/forecast/33b9d25191f4ef8de9ee678ec256fcb4/37.8267,-122.4233';
const baseUrl = proxyForCors + 'https://api.darksky.net/forecast/33b9d25191f4ef8de9ee678ec256fcb4/';

//****************************** Actions ************************************
//Will load data each time a new piece is added
export function loadWeatherSuccess(weather){
  return {
    type: 'LOAD_WEATHER_SUCCESS',
    payload: weather
  };
}//closes loadWeatherSuccess

export function createWeatherSuccess(weather){
  return {
    type: 'CREATE_WEATHER_SUCCESS',
    payload: weather
  };
}//closes createWeatherSuccess

export function destroyWeatherSuccess(weather){
  return {
    type: 'DESTROY_WEATHER_SUCCESS',
    payload: weather
  };
}//closes destroyWeatherSuccess



//****************************** Action Creators *****************************
export const loadWeather = () => {
  //our thunk with an ajax request in it
  return function(dispatch){
    fetch(loadUrl)
      .then( async response => {
        const weather = await response.json();
        weather.name = "Los Angeles";
        dispatch(loadWeatherSuccess(weather));
      });
  };//closes function
};//closes loadWeather


export const createWeather = (cityCoordinates) => {
  //cityCoordinates is reference to state that was passed through
  const lat = cityCoordinates.locationToAdd.latitude;
  const long = cityCoordinates.locationToAdd.longitude;
  const cityName = cityCoordinates.locationToAdd.name;
  const weatherUrl = baseUrl + lat + ',' + long;

  return function(dispatch){
    fetch(weatherUrl)
      .then( async response => {
        const weather = await response.json();
        weather.name = cityName;
        dispatch(createWeatherSuccess(weather));
      });
  };//closes function
};//closes createWeather
