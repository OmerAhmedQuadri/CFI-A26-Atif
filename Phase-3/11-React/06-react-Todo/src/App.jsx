import { useEffect, useRef, useState } from 'react'

const App = () => {
  const [task, setTask] = useState('')
  const [taskList, setTaskList] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )
  const inputRef = useRef()
  console.log(taskList);
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(taskList))
    inputRef.current.focus()
  }, [taskList])


  const addTaskHandler = ()=>{
    if(task.trim()){
      const newTask={
        id: Date.now(),
        title: task,
        isDone: false
      }
      setTaskList([...taskList, newTask])
      setTask('')
    }
  }


  const statusHandler = (e, index)=>{
    if(e.target.tagName == 'LI'){
      const newTaskList = [...taskList]
      newTaskList[index].isDone = !newTaskList[index].isDone
      setTaskList(newTaskList)
    }else if(e.target.tagName == 'BUTTON'){ 
      const newTaskList = [...taskList]
      newTaskList.splice(index,1)
      setTaskList(newTaskList)
    }
  }
  return (
    <div className='card font-serif h-140 w-140 ml-120 mt-15 rounded bg-gray-500'>
      <h1 className='text-4xl font-bold p-2 text-center'>TODO LISTS</h1>
      <div className='flex flex-row justify-center items-center'>
        <input
          className='bg-gray-700 text-white h-10 w-85 p-2 rounded mt-5 mr-10 '
          type="text" placeholder='Enter your task'
          onChange={(e)=> setTask(e.target.value)}
          value={task}
          ref={inputRef}
        />
        <button
          onClick={addTaskHandler}
          className='bg-black text-white p-2 w-25 mt-5 rounded hover:cursor-pointer hover:bg-gray-700'>
          Add Task
        </button>
      </div>

      <div className='mt-5 p-10'>
        <ul className="flex flex-col w-full  border-gray-900 rounded-lg gap-2 max-h-70 h-full overflow-y-auto">
          {taskList.map((task, index)=>( 
            <li 
              className={` group p-3 bg-slate-600 rounded-lg flex flex-row justify-between ${task.isDone ? 'opacity-80' : ''}`}
              key={task.id}
              onClick={(e) => statusHandler(e, index)}
            >
              <p
                className={`${task.isDone && 'line-through' }`}
               >{task.title}</p>
              <button 
                className="bg-red-500 px-2 rounded hover:cursor-pointer hidden group-hover:block "
                onClick={() => statusHandler(e, index)}
              >Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App