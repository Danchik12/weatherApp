import React from 'react'
import s from './Days.module.scss'
import {GlobalSvgSelector} from './../../../../assets/icons/shared/GlobalSvgSelector'

export default function Card({day}){
	return(
		<div className={s.card}>
		<div className={s.day}>{day.day}</div>
		<div className={s.day_info}>{day.day_info}</div>
		<div className={s.img}><GlobalSvgSelector id={day.icon_id}/></div>
		<div className={s.day_temp}>{day.temp_day}</div>
		<div className={s.night_temp}>{day.temp_night}</div>
		<div className={s.info}>{day.info}</div>

		</div>
		)
}