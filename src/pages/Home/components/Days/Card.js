import React from 'react'
import s from './Days.module.scss'
import {GlobalSvgSelector} from './../../../../assets/icons/shared/GlobalSvgSelector'
import {IdentityId} from './../../../../shared/Identity'
export default function Card({day}){
	var id = IdentityId(day.weather[0].id)
	var options = {
		month: 'long',
    day: 'numeric',
    weekday: 'long'
		
}; 
var weather =new Date(day.dt*1000).toLocaleDateString('ru-RU',options).split(', ')
var description=day.weather[0].description
	return(
		<div className={s.card}>
		<div className={s.day}>{weather[0]}</div>
		<div className={s.day_info}>{weather[1]}</div>
		<div className={s.img}><GlobalSvgSelector id={id}/></div>
		<div className={s.day_temp}>{Math.round(day.temp.day)}</div>
		<div className={s.night_temp}>{Math.round(day.temp.night)}</div>
		<div className={s.info}>{description}</div>

		</div>
		)
}