import api from './../axios/index'

export class WeatherServis {
	static getCurentWeather(city){
		
		return api.get(`/weather?q=${city}`)
	}
}