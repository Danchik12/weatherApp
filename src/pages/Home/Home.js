import React,{useEffect} from 'react'
import s from './Home.module.scss'
import {fetchDailyWeather} from './../../store/thunk/fetchWeather'
import ThisDay from './components/ThisDay/ThisDay'
import Days from './components/Days/Days'
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo'
import {useDispatch,useSelector} from 'react-redux'

export default function  Home  (){
const dispatch = useDispatch()

const {weather} = useSelector((state) => state.current_weather)

useEffect(()=>{

  dispatch(fetchDailyWeather())
 },[]);


	return (

<div className={s.home}>
<div className={s.wrapper}>
<ThisDay weather={weather.current}/>
<ThisDayInfo weather={weather.current} />
</div>
<Days items={weather.daily}/>
</div>
		)
}