import {createReducer} from '@reduxjs/toolkit'


const iniitalState = {
    isOpen: false,
    message: 'This is default modal'
}

export const customReducer = createReducer(iniitalState ,{
    open: (state, action) => {
        state.isOpen = true;
        state.message= action.payload;
        return state
    },
    close: (state, action)=>{
        state = false;
        return state
    }

} )