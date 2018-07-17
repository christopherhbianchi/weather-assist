import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './WeatherCard.css';


class WeatherCard extends Component {

  weatherImage = () => {
    let summary = this.props.weather.currently.summary;
    switch (summary) {
    case 'Clear':
      return 'clear'
    case 'Humid and Partly Cloudy':
      return 'partlycloudy';
    case 'Partly Cloudy':
      return 'partlycloudy';
    case 'Humid and Mostly Cloudy':
      return 'mostlycloudy';
    case 'Mostly Cloudy':
      return 'mostlycloudy';
    case 'Cloudy':
      return 'cloudy';
    case 'Drizzle':
      return 'rain';
    case 'Fog':
      return 'fog';
    default:
      return 'unknown';
    }
  }

  render() {
    return(
      <div className='weather-card'>
        <button
          className='remove-button'
          onClick={ event => { event.preventDefault(); this.props.removeCard(this.props.weather)}}/>
        <h4 className='cityName'>{this.props.weather.name}</h4>
        <img src={require(`../../assets/currentWeather/icons/${this.weatherImage()}.svg`)}/>
        <p>{this.props.weather.currently.summary}</p>
        <p>{this.props.weather.currently.temperature}° F</p>
        <p>Wind Speed: {this.props.weather.currently.windSpeed} mph</p>
        <p>Chance of Rain: {this.props.weather.currently.precipProbability}%</p>
      </div>
    );//closes return
  }//closes render
}//class

WeatherCard.PropTypes = {
  removeCard: PropTypes.func,
  weather: PropTypes.object
};


export default WeatherCard;
