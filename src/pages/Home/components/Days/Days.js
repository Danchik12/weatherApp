import React from 'react'

import Card from './Card'

import s from './Days.module.scss'



export default function Days(items){
	
  var data=items

  
	 
	return(
		<>
	
		<div className={s.days}>
		
		{data.items.map((day)=>{
			return (<Card key={day.dt} day={day} />)

		})}
		</div>
		</>
		)
}