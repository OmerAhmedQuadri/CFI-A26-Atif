import React from 'react'
import { useState } from 'react'

const App = () => {
  const [text, setText] = useState('')
  const changeHandler = (event)=>{
    setText(event.target.value)
  }
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-gray-500'>
      <input 
        onChange={changeHandler} value={text}
       className='p-2 w-70 bg-white rounded'
      type="text" placeholder='Enter your text' />
      <div className='flex gap-10 p-10'>
        <button 
        onClick={()=>setText('')}
        className='bg-black text-white rounded p-2 w-20'>Clear</button>
        <button 
        onClick={()=>alert(text)}
        className='bg-black text-white rounded p-2 w-25'>Submit</button>
      </div>
    </div>
  )
}

export default App