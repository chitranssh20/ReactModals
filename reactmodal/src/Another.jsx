import React from 'react'
import { useDispatch } from 'react-redux'
export const Another = () => {

    const dispatch = useDispatch();

    const openModal = () =>{
        dispatch({
            type: "open",
            payload: "Another Another Another Another Another"
        })
        window.alert('open')
    }

  return (
    <>
    <h2>Another</h2>
    <button onClick={()=> openModal()} >Another modal</button>
    </>
  )
}
