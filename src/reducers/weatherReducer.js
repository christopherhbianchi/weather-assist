export const weatherReducer = ( state = [], action) => {
  switch(action.type){
    case 'LOAD_WEATHER_SUCCESS':
      return [...state, action.payload];
    case 'CREATE_WEATHER_SUCCESS':
      return [...state, action.payload];
    default:
      return state;
  }//closes switch
}//closes weatherReducer
