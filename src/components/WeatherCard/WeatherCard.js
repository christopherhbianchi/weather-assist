import React from 'react';
import './WeatherCard.css'


const WeatherCard = (props) => {

  // constImageUrl =
  return(
    <div className='weather-card'>
      <h4>{props.weather.name}</h4>
      <img src={require('../../resources/images/sun.png')}/>
      <p>{props.weather.currently.summary}</p>
      <p>{props.weather.currently.temperature}° F</p>
      <p>Wind Speed: {props.weather.currently.windSpeed} mph</p>
      <p>Chance of Rain: {props.weather.currently.precipProbability}%</p>
    </div>
  );//closes return
}


export default WeatherCard;
