import api from './../axios/index'

export class WeatherServis {


	static getWeather(){
		return api.get(`onecall?&lat=52.093751&lon=23.6851851&exclude=hourly,minutely,alerts`)
	}
}