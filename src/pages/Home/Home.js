import React,{useEffect} from 'react'
import s from './Home.module.scss'
import {fetchWeather} from './../../store/thunk/fetchWeather'
import ThisDay from './components/ThisDay/ThisDay'
import Days from './components/Days/Days'
import {selectDate} from './../../store/selectors'
import ThisDayInfo from './components/ThisDayInfo/ThisDayInfo'
import {useDispatch,useSelector} from 'react-redux'
export default function  Home  (){
const dispatch = useDispatch()
const {weather} = useSelector(selectDate)
useEffect(() =>{
dispatch(fetchWeather(32,33))

},[])


	return (
<div className={s.home}>
<div className={s.wrapper}>
<ThisDay weather={weather}/>
<ThisDayInfo/>
</div>
<Days/>
</div>
		)
}