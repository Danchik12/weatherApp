import React from 'react'
import s from './Header.module.scss'

import {GlobalSvgSelector} from './../../assets/icons/shared/GlobalSvgSelector'
import {useContext} from 'react'
import {ThemeContext} from './../../context/ThemeContext'


export default function Header (){
  const theme=useContext(ThemeContext);

	 
  function changeTheme  () {
  theme.changeTheme(theme.theme === 'light' ? 'dark' : 'light')
}

	return (
<header className={s.header}>
<div className={s.wrapper}>
<div className={s.logo}>
<GlobalSvgSelector id="header-logo"/>
</div>
<div className={s.title}>React Weather</div>
</div>


<div className={s.wrapper}>
<div className={s.change_theme} onClick={changeTheme}>
<GlobalSvgSelector id='change-theme' />

</div>

</div>
</header>
		)
}