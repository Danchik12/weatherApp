import api from './../axios/index'

export class WeatherServis {
	static getCurentWeather(city){
		
		return api.get(`/weather?q=${city}`)
	}
	//параметр day от 1 до 16
	//day стандартно  7 дней  
	static getDailyWeather(city,day=7){
		return api.get(`/forecast/daily?q=${city}&cnt=${day}`)
	}
}