import axios from 'axios'

export class WeatherServis {
	static getCurentWeather(city){
		return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bf94af1867866259f184006d889fb96d`)
	}
}