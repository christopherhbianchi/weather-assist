import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AddWeather.css';
//import components below
import { createWeather } from '../../actions/index.js';
const CityCoordinates = require('../../resources/CityCoordinates.js');

export class AddWeather extends Component {
  constructor(){
    super();
    this.state = {
      locationToAdd: CityCoordinates.LasVegas,
      locationsAdded: { "Los Angeles": "Los Angeles" } //this could be an object of names, with their name again as the value pair
    }
  }//closes constructor

  handleChange = async (event) => {
    console.log(CityCoordinates);
    console.log('AddWeather.js handleChange: ' + event.target.value);
    var location = 0;
    for(const prop1 in CityCoordinates){
      if(event.target.value === prop1){
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
    var addedObj = this.state.locationsAdded; //object of string to string key-value pairs
    var locToAdd = this.state.locationToAdd.name; //name

    if(addedObj[locToAdd]) return; //if the key exists already, do nothing

    const newAddedObj = Object.assign( {}, addedObj);
    newAddedObj[locToAdd] = locToAdd;
    this.setState({
      locationsAdded: newAddedObj
    }, this.props.createWeather(this.state) );
  }//handleSubmit

  render(){
    return(
      <div className='add-weather'>
        <h3>AddWeather Container</h3>
        <form>
          <select className='select' onChange={this.handleChange}>
            <option value='LasVegas'>Las Vegas</option>
            <option value='NewYork'>New York</option>
            <option value='Miami'>Miami</option>
            <option value='LosAngeles'>Los Angeles</option>
          </select>
          <button onClick={this.handleSubmit}>Add this city</button>
        </form>
      </div>
    );//closes return
  }//closes render
}//closes class
{/* <option value={NewYork}>New York</option>
<option value={LasVegas}>Las Vegas</option>
<option value={Miami}>Miami</option>
<option value={LosAngeles}>Los Angeles</option> */}

const mapStateToProps = (state) => ({
  weather: state.weather
});
const mapDispatchToProps = (dispatch) => ({
  createWeather: cityCoordinates => dispatch(createWeather(cityCoordinates))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddWeather);
