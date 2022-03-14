import React from 'react'
import s from './Home.module.scss'
import ThisDay from './components/ThisDay/ThisDay'
import Days from './components/Days/Days'
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo'
export default function  Home  (){
	return (
<div className={s.home}>
<div className={s.wrapper}>
<ThisDay/>
<ThisDayInfo/>
</div>
<Days/>
</div>
		)
}