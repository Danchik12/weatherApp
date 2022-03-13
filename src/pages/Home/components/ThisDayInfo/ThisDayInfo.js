import React from 'react'
import s from './ThisDayInfo.module.scss'
import cloud from './../../../../assets/images/cloud.png'
import ThisDayInfoItem from './ThisDayInfoItem'
export default function ThisDayInfo(){
	const items =[
{
      icon_id: 'temp',
      name: 'Температура',
      value: '20°С - ощущается как 17°С',
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },


	];
	return(
		<div className={s.this_day_info}>
		<div className={s.this_day_info_items}>
		{items.map((item) => {
			return (<ThisDayInfoItem key={item.icon_id} item={item}/>)

		})}
		</div>
		<img src={cloud} alt="cloud"/>
		


		</div>
		)
}