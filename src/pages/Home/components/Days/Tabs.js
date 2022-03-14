import React from 'react'
import s from './Days.module.scss'


export default function Tabs(){
	 const tabs = [
    {
      value: 'На неделю',
    },
    {
      value: 'На 10 дней',
    },
    {
      value: 'На месяц',
    },
  ];
	return(
		<div className={s.tabs}>
		<div className={s.tabs_wrapper}>
		{tabs.map((tab) => {
         return( <div className={s.tab} key={tab.value}>
            {tab.value}
		</div>
		)})}
		</div>
 		<div className={s.cancel}>Отменить</div>
		</div>
		)
}