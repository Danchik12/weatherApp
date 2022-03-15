import {configureStore,combineReducers} from '@reduxjs/toolkit'

const rootReducer = combineReducers({})

export const store = configureStore({rootReducer,})


export type RootState = typeof rootReducer;
export type AppStore= typeof store;
export type AppDispatch = AppStore['dispatch'];