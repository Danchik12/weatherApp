import React from 'react'
import Card from './Card'

import s from './Days.module.scss'


export default function Days(items){
  var data=items

  
  console.log(data.items)
	 const days= [
    {
      day: 'Сегодня',
      day_info: '28 авг',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day: 'Завтра',
      day_info: '29 авг',
      icon_id: 'small_rain_sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'небольшой дождь и солнце',
    },
    {
      day: 'Ср',
      day_info: '30 авг',
      icon_id: 'small_rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'небольшой дождь',
    },
    {
      day: 'Чт',
      day_info: '31 авг',
      icon_id: 'mainly_cloudy',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day: 'Пт',
      day_info: '1 сен',
      icon_id: 'rain',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day: 'Сб',
      day_info: '2 сен',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    {
      day: 'Вс',
      day_info: '3 сен',
      icon_id: 'sun',
      temp_day: '+18',
      temp_night: '+15',
      info: 'Облачно',
    },
    
  ];
	return(
		<>
	
		<div className={s.days}>
		
		{days.map((day)=>{
			return (<Card key={day.day_info} day={day}/>)

		})}
		</div>
		</>
		)
}