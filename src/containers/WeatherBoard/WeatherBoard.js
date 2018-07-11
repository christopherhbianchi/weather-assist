import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadWeather, createWeather, destroyWeather, updateWeather } from '../../actions/index.js';
//import components here
import WeatherCard from '../../components/WeatherCard/WeatherCard.js';
import AddWeather from '../AddWeather/AddWeather.js';


export class WeatherBoard extends Component {

  //we do this to prevent componentDidMount from loading prior to data being loaded into state
  async componentDidMount(){
    await this.props.loadWeather();//can put it in the redux store now
  }//closes componentWillMount
  /*
  async - "we will be using the await keyword inside this function" - looks different in arrow functions
  await - "dont go down to the next line until this line is done"
  */

  render(){
    const weatherArr = this.props.weather;
    console.log('in Weatherboard weatherArr: ' + weatherArr);
    return weatherArr.length > 1 ? <p>Loading...</p> :
      <div>
        <h3>WeatherBoard</h3>
        <p>Our Weather:</p>
        {
          this.props.weather.map( (weather, index) => {
          return (<div key={index}>{index}: <WeatherCard weather={weather}/></div>);//closes return
          })
        }
        <AddWeather />
      </div>
  }//closes render
}//closes Component

//This weatherboard is going to need actions to add weather,
//as well as access to the State, for the state's weather array
const mapStateToProps = (state) => ({
  weather: state.weather
});

const mapDispatchToProps = (dispatch) => ({
  loadWeather: () => dispatch(loadWeather()),
  createWeather: weather => dispatch(createWeather(weather)),
  destroyWeather: weather => dispatch(destroyWeather(weather)),
  updateWeather: weather => dispatch(updateWeather(weather))
});

WeatherBoard.propTypes = {
  weather: PropTypes.array,
  createWeather: PropTypes.func,
  destroyWeather: PropTypes.func,
  updateWeather: PropTypes.func
};


export default connect(mapStateToProps, mapDispatchToProps)(WeatherBoard);
