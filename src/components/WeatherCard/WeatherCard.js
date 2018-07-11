import React from 'react';


const WeatherCard = (props) => {

  return(
    <div>
      <p>{props.weather.currently.summary}</p>
    </div>
  );//closes return
}


export default WeatherCard;
