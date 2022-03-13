import React from 'react'
import s from './Home.module.scss'
import ThisDay from './components/ThisDay/ThisDay'
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo'
export default function  Home  (){
	return (
<div className={s.home}>
<ThisDay/>
<ThisDayInfo/>

</div>
		)
}