import React,{useReducer} from 'react'
import {PopupContext} from './PopupContext'
import {PopupReducer} from './PopupReducer'
import {SHOW_POPUP,FADE_POPUP} from './types'
export const PopupState = ({children}) => {
const [state,dispatch] = useReducer(PopupReducer,null)
	const fade =() => dispatch({type:FADE_POPUP})

	const show =({day}) => {
		dispatch ({type:SHOW_POPUP,
		payload:{day}
		})
	}
	return (
		<PopupContext.Provider value={{
			fade,show,popup:state
		}}>
			{children}
		</PopupContext.Provider>
	)
}