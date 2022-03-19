import React,{useContext} from 'react'
import s from './Popup.module.scss'
import {GlobalSvgSelector} from './../../assets/icons/shared/GlobalSvgSelector'
import ThisDayInfoItem from './../../pages/Home/components/ThisDayInfo/ThisDayInfoItem'
import {Timer} from  './../Time/Time'
import {PopupContext} from './../../context/Popup/PopupContext'
import {IdentityId} from './../../shared/Identity'
export default function Popup(){

const {popup,fade} = useContext(PopupContext)
if(!popup) return null


	var id = IdentityId(popup.day.weather[0].id)
	var options = {
		weekday: 'long'
}

var weekday =new Date(popup.day.dt*1000).toLocaleDateString('ru-RU',options)

const items =[
{
      icon_id: 'temp',
      name: 'Температура',
      value: `${Math.round(popup.day.temp.day)} - ощущается как ${Math.round(popup.day.feels_like.day)}`,
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: `${popup.day.pressure} Атмосферное давление на уровне моря, гПа`,
    },
    {
      icon_id: 'precipitation',
      name: 'Облачность',
      value: `${popup.day.clouds}%`,
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: `${popup.day.wind_speed} м/с юго-запад - легкий ветер`,
    },


	];

	return (
		<>
		<div className={s.blur} ></div>
		<div className={s.popup}>
		<div className={s.day}>
		<div className={s.day_temp}>{Math.round(popup.day.temp.day)}°</div>
		<div className={s.day_name}>{weekday}</div>
		<div className={s.img}><GlobalSvgSelector id={id} /></div>
		<div className={s.day_time}>Время: <Timer /></div>
		<div className={s.day_city}>Город: <span>Брест</span></div>
		</div>
<div className={s.popup_items}>
		{items.map((item) => {
			return (<ThisDayInfoItem key={item.icon_id} item={item}/>)

		})}
		</div>
		<div className={s.close} onClick={fade}>
	<GlobalSvgSelector id="close"  />
		</div>
		</div>
		</>
		)
}