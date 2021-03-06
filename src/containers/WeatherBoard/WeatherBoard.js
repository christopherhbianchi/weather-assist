import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadWeather, createWeather, destroyWeatherSuccess, updateWeather } from '../../actions/weatherActions.js';
//import components here
import WeatherCard from '../../components/WeatherCard/WeatherCard.js';
import AddWeather from '../AddWeather/AddWeather.js';
import './WeatherBoard.css';


export class WeatherBoard extends Component {

  //we do this to prevent componentDidMount from loading prior to data being loaded into state
  async componentDidMount(){
    await this.props.loadWeather();//can put it in the redux store now
  }//closes componentDidMount

  removeCard = (weather) => {
    this.props.destroyWeatherSuccess(weather);
  }

  renderCards = () => {
    return this.props.weather.map( (weather, index) =>
      <div key={index}>
        <WeatherCard weather={weather} removeCard={this.removeCard}/>
        <div className='bumper'></div>
        <div className='weather-card-bumper'></div>
      </div>
    );//closes return
  }//closes renderCards

  render(){
    const weatherArr = this.props.weather;
    return weatherArr.length < 1 ? null :
      <div className='weather-board'>
        <h3 className='weatherBoardHeader'>Current Weather</h3>
        {
          this.renderCards()
        }
      </div>;
  }//closes render
}//closes Component

//This weatherboard is going to need action creators to load weather,
//as well as access to the State, for the state's weather array
export const mapStateToProps = (state) => ({
  weather: state.weather
});

export const mapDispatchToProps = (dispatch) => ({
  loadWeather: () => dispatch(loadWeather()),
  destroyWeatherSuccess: weather => dispatch(destroyWeatherSuccess(weather))
});

WeatherBoard.propTypes = {
  weather: PropTypes.array,
  loadWeather: PropTypes.func,
  destroyWeatherSuccess: PropTypes.func
};


export default connect(mapStateToProps, mapDispatchToProps)(WeatherBoard);
