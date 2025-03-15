// import { useState } from 'react'

// import './App.css'
// import App1 from "./App1"
function App () {
  let counter = 5 

   const addvalue=()=>
    {
      // counter = counter +1
      console.log("value-add",counter )

    } 
    const removevalue =()=>{
      console.log ("remove-value",Math.random())
    }
  return (
    <>
    <h1>1 day</h1>
    <h2>working and count value :: {counter} </h2>

    <button onClick={addvalue}>
      add value{counter} </button>
    <br />
    <button onClick={removevalue}>
      remove value{counter}</button>
    </>
    //  <App/> 
  )
}

export default App
