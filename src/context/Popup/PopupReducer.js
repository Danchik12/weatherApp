import {SHOW_POPUP,FADE_POPUP} from './types'

const handlers ={
	[SHOW_POPUP]:(state,action) => action.payload,
	[FADE_POPUP]:() => null,
	DEFAULT : state => state
}
export const PopupReducer = (state,action) => {
const handler = handlers[action.type] || handlers.DEFAULT
return handler(state,action)
}