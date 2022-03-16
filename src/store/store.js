import {configureStore,combineReducers} from '@reduxjs/toolkit'
import WeatherReducer from './slices/WeatherSlice'
const rootReducer = combineReducers({
	current_weather:WeatherReducer
})

export const store = configureStore({reducer:{rootReducer}})


