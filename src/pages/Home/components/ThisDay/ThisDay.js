import React from 'react'
import s from './ThisDay.module.scss'
import {GlobalSvgSelector} from './../../../../assets/icons/shared/GlobalSvgSelector'
export default function ThisDay(){
	return(
		<header className={s.this_day}>
		<div className={s.top_block}>
		<div className={s.top_block_wrapper}>
		<div className={s.this_temp}>20°C</div>
		<div className={s.this_day_name}>Сегодня</div>

		</div>
		<GlobalSvgSelector id='sun' />
		</div>

		<div className={s.bottom_block}>
		<div className={s.this_time}>Время: <span>18:30</span></div>
		<div className={s.this_city}>Город: <span>Минск</span></div>

		</div>
	

		</header>
		)
}