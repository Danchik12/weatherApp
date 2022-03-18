import { createSlice } from '@reduxjs/toolkit'

const initialState = {

  weather:{},
  isLoading:true,
  response:{
    status:0,
    message:'',
  },

}

export const WeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    fetchWeather:(state) =>{
      state.isLoading=true;
    },
    fetchWeatherSuccess:(state,action) =>{
      state.weather = action.payload.data;
      state.isLoading =false;
      state.response={
        status:action.payload.status,
        message:action.payload.statusText}
    },
    fetchWeatherError:(state,action) =>{
      state.isLoading =false;
      state.response={
        status:action.payload.status,
        message:action.payload.statusText}
    }
   

  },
})


export const { fetchWeatherSuccess,fetchWeather,fetchWeatherError } = WeatherSlice.actions

export default WeatherSlice.reducer