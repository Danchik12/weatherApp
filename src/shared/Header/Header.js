import React from 'react'
import s from './Header.module.scss'
import Select from 'react-select'
import {GlobalSvgSelector} from './../../assets/icons/shared/GlobalSvgSelector'
export default function Header (){
	 const options = [
    { value: 'city-1', label: 'Минск' },
    { value: 'city-2', label: 'Могилёв' },
    { value: 'city-3', label: 'Брест' },
  ];
  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor:
       0 ? "#4f4f4f":'rgba(71, 147, 255, 0.2)',
      width: '194px',
      height: '37px',
      border: 'none',
      borderRadius: '10px',
      zIndex: 100,
    }),
    singleValue: (styles: any) => ({
      ...styles,
       color:0 ?'#fff' :'#000'
    }),
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
<div className={s.change_theme}>
<GlobalSvgSelector id='change-theme' />

</div>
<Select 
defaultValue={options[0]}
styles={colourStyles}
options={options} />
</div>
</header>
		)
}