import React from 'react'
import s from './ThisDay.module.scss'
import {GlobalSvgSelector} from './../../../../assets/icons/shared/GlobalSvgSelector'
export default function ThisDay(weather){

	var date = new Date()
	return(
		<div className={s.this_day}>
		<div className={s.top_block}>
		<div className={s.top_block_wrapper}>

		<div className={s.this_temp}>{Math.round(weather.weather.main.temp)}</div>
		<div className={s.this_day_name}>Сегодня</div>

		</div>
		<GlobalSvgSelector id='sun' />
		</div>

		<div className={s.bottom_block}>
		<div className={s.this_time}>Время: <span>{date.getHours()}:{date.getMinutes()}</span></div>
		<div className={s.this_city}>Город: <span>Брест</span></div>

		</div>
	

		</div>
		)
}