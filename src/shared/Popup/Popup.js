import React from 'react'
import s from './Popup.module.scss'
import {GlobalSvgSelector} from './../../assets/icons/shared/GlobalSvgSelector'
import ThisDayInfoItem from './../../pages/Home/components/ThisDayInfo/ThisDayInfoItem'
import {Timer} from  './../Time/Time'
export default function Popup(){


const items =[
{
      icon_id: 'temp',
      name: 'Температура',
      value: '20°С - ощущается как 17°С',
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765 Атмосферное давление на уровне моря, гПа',
    },
    {
      icon_id: 'precipitation',
      name: 'Облачность',
      value: '5%',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },


	];
	return (
		<>
		<div className={s.blur} ></div>
		<div className={s.popup}>
		<div className={s.day}>
		<div className={s.day_temp}>12°</div>
		<div className={s.day_name}>Среда</div>
		<div className={s.img}><GlobalSvgSelector id='sun' /></div>
		<div className={s.day_time}>Время: <Timer /></div>
		<div className={s.day_city}>Город: <span>Брест</span></div>
		</div>
<div className={s.popup_items}>
		{items.map((item) => {
			return (<ThisDayInfoItem key={item.icon_id} item={item}/>)

		})}
		</div>
		<div className={s.close}>
	<GlobalSvgSelector id="close" />
		</div>
		</div>
		</>
		)
}