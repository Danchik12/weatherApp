import api from './../axios/index'

export class WeatherServis {
	static getCurentWeather(city){
		
		return api.get(`/weather?q=${city}`)
	}

	static getWeather(lat,lon){
		return api.get(`onecall?&lat=${lat}&lon=${lon}&exclude=current,daily`)
	}
}