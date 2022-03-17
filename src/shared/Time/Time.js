import React,{useState} from 'react'

export function Timer (){
const [time,setTime] = useState('')
function getCurrentTimeString() {
	var date = new Date()
	var hours=date.getHours()
	var minutes = date.getMinutes() <10 ? '0'+date.getMinutes() : date.getMinutes()
	var time = hours+':'+ minutes
	setTime(time)
	
      
      	
      	
   }

   setInterval(
      () => getCurrentTimeString() ,
      100
   );	

   return (<span>{time}</span>)

}
	




