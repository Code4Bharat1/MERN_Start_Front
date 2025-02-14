"use client"


import React, { useState } from 'react'

export default  function page() {

  const [ age , SetAge] = useState(13)

  function increaseage(){
    SetAge(age+1)
  }
  
  
  
  return (

    <div>
    <div className='text-6xl text-blue-500'>My age is {age} </div>

    <button className="bg-slate-500" onClick={increaseage}>Click to increase </button>
    </div>
  
  )
}
