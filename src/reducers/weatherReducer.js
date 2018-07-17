export const weatherReducer = ( state = [], action) => {
  switch (action.type){
  case 'LOAD_WEATHER_SUCCESS':
    return [...state, action.payload];
  case 'CREATE_WEATHER_SUCCESS':
    return [...state, action.payload];
  case 'DESTROY_WEATHER_SUCCESS':
    return [
      ...state.filter( weather => weather.latitude !== action.payload.latitude )
    ];
  default:
    return state;
  }//closes switch
};//closes weatherReducer
