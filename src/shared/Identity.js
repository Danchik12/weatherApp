

export const IdentityId = (id) => {
	if (id == 800){
		return 'sun'
	}else if (id > 800){
		return 'mainly_cloudy'
	}else if ( id> 700 && id <800){
		return 'mist'
	}else if (id >= 600 && id < 700 ){
		return 'snow'
	}else if (id >= 500 && id< 505){
		return 'small_rain_sun'
	}else if (id >= 505 && id< 600){
		return 'rain'
	}
	else if (id >= 300 && id< 400){
		return 'small_rain'
	}
	else if (id >= 200 && id< 300){
		return 'thunderstorm'
	}
}