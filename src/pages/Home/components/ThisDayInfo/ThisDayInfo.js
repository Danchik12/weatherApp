import React from 'react'
import s from './ThisDayInfo.module.scss'
import cloud from './../../../../assets/images/cloud.png'
import ThisDayInfoItem from './ThisDayInfoItem'
export default function ThisDayInfo(weather){

console.log(weather)
  
	const items =[
{
      icon_id: 'temp',
      name: 'Температура',
      value: `${Math.round(weather.weather.temp)}°C - ощущается как ${Math.round(weather.weather.feels_like)}°C`,
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: `${weather.weather.pressure} Атмосферное давление на уровне моря, гПа`,
    },
    {
      icon_id: 'precipitation',
      name: 'Облачность',
      value: `${weather.weather.clouds}%`,
    },
    {
      icon_id: 'wind',
      name: 'Скорость ветра',
      value: `${weather.weather.wind_speed} м/с`,
    },


	];
	return(
		<div className={s.this_day_info}>
		<div className={s.this_day_info_items}>
		{items.map((item) => {
			return (<ThisDayInfoItem key={item.icon_id} item={item}/>)

		})}
		</div>
		<img className={s.cloud} src={cloud} alt="cloud"/>
		


		</div>
		)
}