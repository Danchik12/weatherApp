import {configureStore} from '@reduxjs/toolkit'
import WeatherReducer from './slices/WeatherSlice'


export const store = configureStore({
	reducer:{current_weather:WeatherReducer},
	middleware:((getDefault)=>getDefault({
		serializableCheck:false
	}))

})


