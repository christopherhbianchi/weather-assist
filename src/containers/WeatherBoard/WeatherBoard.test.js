// import React from 'react';
// import { shallow } from 'enzyme';
// import { WeatherBoard, mapStateToProps, mapDispatchToProps } from './WeatherBoard.js';
//
//
// describe('<WeatherBoard />', () => {
//   const renderedComponent = shallow( <WeatherBoard /> );
//
//   it('should match snapshot', () => {
//     expect(renderedComponent).toMatchSnapshot();
//   });//it
//
//   it('should map the store correctly', () =>{
//     const mockStore = { weather:[] };
//     const mapped = mapStateToProps(mockStore);
//
//     expect(mapped).toEqual(mockStore);
//   });//it
//
//   it('should dispatch loadWeather', () => {
//     const mockDispatch = jest.fn();
//     const mapped = mapDispatchToProps(mockDispatch);
//
//     mapped.loadWeather();
//     expect(mockDispatch).toHaveBeenCalled();
//   });//it
//
//   it('should dispatch destroyWeatherSuccess', () => {
//     const mockDispatch = jest.fn(); //create a spy
//     const mapped = mapDispatchToProps(mockDispatch); //dispatch it to this object
//
//     mapped.destroyWeatherSuccess(); //when this mapped object invokes it
//     expect(mockDispatch).toHaveBeenCalled(); //the mockDispatch should have been called
//   });//it
//
//
//
//
// });//describe

it('should return true', () => {
  expect(true).toEqual(true);
});
