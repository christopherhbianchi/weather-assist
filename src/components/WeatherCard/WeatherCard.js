import React from 'react';
import './WeatherCard.css'


const WeatherCard = (props) => {

  // constImageUrl =
  return(
    <div className='weather-card'>
      <p>{props.weather.name}</p>
      <img src={require('../../resources/images/sun.png')}/>
      <p>{props.weather.currently.summary}</p>
    </div>
  );//closes return
}


export default WeatherCard;
