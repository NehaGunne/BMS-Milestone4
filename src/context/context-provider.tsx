import React, { createContext, useReducer } from 'react'
import { reducer } from '../reducer'
import { store } from './store'

export let bmsContext=createContext({})

const ContextProvider=(props:any)=>{
    let [state,dispatch]=useReducer<any>(reducer,store)
    return(
        <bmsContext.Provider value={{state,dispatch}}>
                {props.children}
        </bmsContext.Provider>
    )
}
export default ContextProvider;