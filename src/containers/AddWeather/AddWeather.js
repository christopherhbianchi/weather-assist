import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddWeather.css';
import PropTypes from 'prop-types';
//import components below
import { createWeather } from '../../actions/weatherActions.js';
const CityCoordinates = require('../../resources/CityCoordinates.js');

export class AddWeather extends Component {
  constructor(){
    super();
    this.state = {
      locationToAdd: CityCoordinates.LasVegas
    };
  }//closes constructor

  handleChange = async (event) => {
    console.log(CityCoordinates);
    console.log('AddWeather.js handleChange: ' + event.target.value);
    var location = 0;
    for (const prop1 in CityCoordinates){
      if (event.target.value === prop1){
        location = CityCoordinates[prop1]; //location would have "NewYork" object or something
      }
    }
    console.log('location after for in: ' + location);
    console.log('location.latitude after for in: ' + location.latitude);
    await this.setState({ locationToAdd: location },
    () => { console.log('setState callback in handleChange: ' + this.state.locationToAdd.latitude) });//closes setState

  }//closes handleChange

  handleSubmit = (event) => {
    event.preventDefault();
    var locToAdd = this.state.locationToAdd.name; //name

    const weatherArr = this.props.weather;//if the key exists already, do nothing
    const found = this.props.weather.filter(city => city.name === locToAdd);
    if (!found.length) this.props.createWeather(this.state);
  }//handleSubmit

  render(){
    return (
      <div className='add-weather'>
        <h3 className='bannerAddWeather'>Select City</h3>
        <form className='addCityForm'>
          <select className='select' onChange={this.handleChange}>
            <option value='LasVegas'>Las Vegas</option>
            <option value='NewYork'>New York</option>
            <option value='Miami'>Miami</option>
            <option value='LosAngeles'>Los Angeles</option>
          </select>
          <button className='addCityButton' onClick={this.handleSubmit}>Add this city</button>
        </form>
      </div>
    );//closes return
  }//closes render
}//closes class


export const mapStateToProps = (state) => ({
  weather: state.weather
});
export const mapDispatchToProps = (dispatch) => ({
  createWeather: cityCoordinates => dispatch(createWeather(cityCoordinates))
});

AddWeather.propTypes = {
  weather: PropTypes.array,
  createWeather: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(AddWeather);
