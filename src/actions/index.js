import axios from 'axios';


// const url = 'https://api.darksky.net/forecast/33b9d25191f4ef8de9ee678ec256fcb4/37.8267,-122.4233';

//Will load data each time a new piece is added
export function loadWeatherSuccess(weather){
  return {
    type: 'LOAD_WEATHER_SUCCESS',
    payload: weather
  }
}


export const loadWeather = () => {
  //our thunk with an ajax request in it
  // return function(dispatch){
  //   fetch(url, {
  //     method: 'GET',
  //     headers:{
  //       'Content-type':'application/json'
  //     }
  //   })
  //     .then( response => response.json() )
  //     .then( weather => dispatch(loadWeatherSuccess(weather)));
  // }//closes function
}//closes loadWeather

/* --> old within dispatch (this works the exact same as with the fetch)
return axios.get(url)
  .then( weather => {
    console.log(weather);
    dispatch(loadWeatherSuccess(weather));
  });//closes then
*/




export const createWeather = () => {

}

//may have to do with having the thing make a request every 5 mins or so
export const updateWeather = () => {

}

export const destroyWeather = () => {

}
