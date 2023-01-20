import React from 'react'
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { decrement, increment } from './action/action';
function App() {
  const counterValue = useSelector((hello) => hello.counter) 
  const dispatch = useDispatch();
  return (

   <div className='App'>
  <h1 onClick={()=>{
    dispatch(decrement())
  }}>-</h1>
  <h4>{counterValue}</h4>
  <h1 onClick={()=>{
    dispatch(increment())
  }}>+</h1>
   </div>

  )
}

export default App;