import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadWeather, loadWeatherSuccess, createWeather, destroyWeather, updateWeather } from '../../actions/index.js';

//import components here
export class WeatherBoard extends Component {

  //we do this to prevent componentDidMount from loading prior to data being loaded into state
  async componentDidMount(){
    const url = 'https://api.darksky.net/forecast/33b9d25191f4ef8de9ee678ec256fcb4/37.8267,-122.4233';
    const weather = await this.fetchWeather(url);
    this.props.loadWeatherSuccess(weather);//can put it in the redux store now
  }//closes componentWillMount
  /*
  async - "we will be using the await keyword inside this function" - looks different in arrow functions
  await - "dont go down to the next line until this line is done"
  */
  fetchWeather = async (url) => {
    const fetchWeather = await fetch(url);
    return await fetchWeather.json();
  }

  render(){
    console.log(this.props.weather);
    return !this.props.weather.currently ? <p>loading</p> :
      <div>
        <h3>WeatherBoard</h3>
        <p>Our Weather:</p>
        <p>{this.props.weather.currently.summary}</p>

      </div>

  }//closes render
  //

}//closes Component

//This weatherboard is going to need actions to add weather,
//as well as access to the State, for the state's weather array
const mapStateToProps = (state) => ({
  weather: state.weather
});

const mapDispatchToProps = (dispatch) => ({
  loadWeather: () => dispatch(loadWeather()),
  loadWeatherSuccess: weather => dispatch(loadWeatherSuccess(weather)),
  createWeather: weather => dispatch(createWeather(weather)),
  destroyWeather: weather => dispatch(destroyWeather(weather)),
  updateWeather: weather => dispatch(updateWeather(weather))
});

WeatherBoard.propTypes = {
  weather: PropTypes.object,
  createWeather: PropTypes.func,
  destroyWeather: PropTypes.func,
  updateWeather: PropTypes.func
};


export default connect(mapStateToProps, mapDispatchToProps)(WeatherBoard);
