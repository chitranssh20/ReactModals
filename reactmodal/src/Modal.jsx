import React from 'react'
import './Modal.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export const Modal = () => {
    const [isOpen, setisOpen] = useState(false)
    const dispatch = useDispatch();
    const check = useSelector(state=>state.modalReducer.isOpen) 
    const message = useSelector(state=>state.modalReducer.message)




    const closeModal = () =>{
        dispatch({
            type: "close",
        })
        window.alert('cloesd');
    }



  return (
    <>
    {check?<>
        <div className="modal">This is a modal right here {message} <br /><button onClick={()=> closeModal()}  >Close Modal</button>  </div>
    </>:<></>
    
    
}
    </>
  )
}
