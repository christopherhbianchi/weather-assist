import { combineReducers } from 'redux';
import { weatherReducer } from './weatherReducer.js';
import { activeUserReducer } from './activeUserReducer.js';
import { usersReducer } from './usersReducer.js';

const rootReducer = combineReducers({
  weather: weatherReducer,
  activeUser: activeUserReducer,
  users: usersReducer
});

export default rootReducer;
