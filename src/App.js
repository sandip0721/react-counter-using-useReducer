import React ,{useReducer} from "react";
import "./style.css";
import {counterReducer} from './reducer/reduce'



export default function App(){
  const [counter , dispatch] = useReducer(counterReducer ,0);

  return (
    <div>
      <h1>Hello useReducer</h1>
      <p>counter:{counter}</p>
      <button onClick = {()=> dispatch('increment')}>Increment</button>
      <button onClick = {()=> dispatch('decrement')}>Decrement</button>
      <button onClick = {()=> dispatch('reset')}>Reset</button>

    </div>
  )
}