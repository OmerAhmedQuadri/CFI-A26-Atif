import { useState } from 'react'

// const [task, setTask] = useState([])
const App = () => {
  return (
    <div className='card font-serif h-140 w-140 ml-120 mt-15 rounded bg-gray-500'>
      <h1 className='text-4xl font-bold p-2 text-center'>TODO LISTS</h1>
        <div className='flex flex-row justify-center items-center'>
          <input 
          className='bg-gray-700 text-white h-10 w-85 p-2 rounded mt-5 mr-10 '
          type="text" placeholder='Enter your task'
          />
          <button 
          // onClick={Tasks}
          className='bg-black text-white p-2 w-25 mt-5 rounded hover:bg-gray-700'>
            Add Task
          </button>
        </div>

        <div className='mt-5 p-10'>
          <ul>
            <li className='bg-black flex flex-row items-center text-white h-10 p-2 rounded' >
                some task
                <button className='bg-white hover:bg-red-500 cursor-pointer rounded text-black p-2 h-8 flex items-center'>Delete</button>
            </li>
          </ul>
        </div>
    </div>
  )
}

export default App