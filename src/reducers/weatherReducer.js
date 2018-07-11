export const weatherReducer = ( state = {}, action) => {
  switch(action.type){
    case 'LOAD_WEATHER_SUCCESS':
      return action.payload;
    default:
      return state;
  }//closes switch
}//closes weatherReducer
