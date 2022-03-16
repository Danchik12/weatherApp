import {WeatherServis}  from './../../services/WeatherServis'
import  {WeatherSlice} from './../slices/WeatherSlice'
export const fetchWeather =  (payload) => async (dispatch) => {
	try{
	dispatch(WeatherSlice.actions.fetchWeather())
const res = await WeatherServis.getCurentWeather(payload)
if(res.status === 200){
	dispatch(WeatherSlice.actions.fetchWeatherSuccess(res));}
else{
	dispatch(WeatherSlice.actions.fetchWeatherError(res));
}
}
catch(e){
	console.log(e)
}

}

