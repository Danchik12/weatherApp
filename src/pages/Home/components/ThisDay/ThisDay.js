import React from 'react'
import s from './ThisDay.module.scss'
import {Timer} from './../../../../shared/Time/Time'
import {GlobalSvgSelector} from './../../../../assets/icons/shared/GlobalSvgSelector'
import {IdentityId} from './../../../../shared/Identity'
export default function ThisDay(weather){
	
	var id = IdentityId(weather.weather.weather[0].id)


	return(
		<div className={s.this_day}>
		<div className={s.top_block}>
		<div className={s.top_block_wrapper}>

		<div className={s.this_temp}>{Math.round(weather.weather.temp)}°C</div>
		<div className={s.this_day_name}>Сегодня</div>

		</div>

		<GlobalSvgSelector id={id}/>
		</div>

		<div className={s.bottom_block}>
		<div className={s.this_time}>Время: <span><Timer /></span></div>
		<div className={s.this_city}>Город: <span>Брест</span></div>

		</div>
	

		</div>
		)

}