import React,{useState} from 'react'
import {ThemeContext} from  './../context/ThemeContext'
import changeCSS  from '../model/ChangeCSS';
import { storage } from '../model/Storage';
export default  function ThemeProvider ({children}) {
	
	
  const [theme, setTheme] = useState(
    storage.getItem('theme') || 'light') ;

  changeCSS(theme);
  const changeTheme = (theme) => {
    storage.setItem('theme', theme);
    setTheme(theme);
    changeCSS(theme);
  }

	return (
		<ThemeContext.Provider value={{theme,changeTheme}}>

		{children}
		</ThemeContext.Provider>



		)

}