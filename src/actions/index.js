const CityCoordinates = require('../resources/CityCoordinates.js');

const loadUrl = 'https://api.darksky.net/forecast/33b9d25191f4ef8de9ee678ec256fcb4/37.8267,-122.4233';
const baseUrl = 'https://api.darksky.net/forecast/33b9d25191f4ef8de9ee678ec256fcb4/';

//****************************** Actions ************************************
//Will load data each time a new piece is added
export function loadWeatherSuccess(weather){
  return {
    type: 'LOAD_WEATHER_SUCCESS',
    payload: weather
  }
}//closes loadWeatherSuccess

export function createWeatherSuccess(weather){
  return {
    type: 'CREATE_WEATHER_SUCCESS',
    payload: weather
  }
}//closes createWeatherSuccess



//****************************** Action Creators *****************************
export const loadWeather = () => {
  //our thunk with an ajax request in it
  return function(dispatch){
    fetch(loadUrl)
      .then( async response => {
        const weather = await response.json();
        await dispatch(loadWeatherSuccess(weather));
      })
  }//closes function
}//closes loadWeather


export const createWeather = (cityCoordinates) => {
  // console.log('in createWeather, the lat: ' + cityCoordinates.latitude);
  console.log(cityCoordinates === undefined);
  const lat = cityCoordinates.latitude;
  const long = cityCoordinates.longitude;
  const weatherUrl = baseUrl + lat + ',' + long;
  return function(dispatch){
    fetch(weatherUrl)
      .then( async response => {
        const weather = await response.json();
        await dispatch(createWeatherSuccess(weather));
      })
  }//closes function
}//closes createWeather

//may have to do with having the thing make a request every 5 mins or so
export const updateWeather = () => {

}

export const destroyWeather = () => {

}
