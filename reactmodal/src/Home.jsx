import React from 'react'
import { useDispatch } from 'react-redux'
const Home = () => {

const dispatch = useDispatch();

const openModal = () =>{
    dispatch({
        type: "open",
        payload: 'Home Home Home Home Home Home'
    })
    window.alert('open')
}

  return (
  <>
  <button onClick={()=> openModal()}  >Click for modal</button>
    <div>Home</div>
  </>
  )
}

export default Home