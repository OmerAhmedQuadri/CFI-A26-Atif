const INPUT_TASK = document.getElementById('ip-box')
const ADDBTN = document.getElementById('add-task-btn')
const TASK_DISPLAY = document.getElementById('task-lists')
let tasks = JSON.parse(localStorage.getItem('tasks'))||[]
renderTasks()

ADDBTN.addEventListener('click',() =>{
    let newTask = {
        taskId : Date.now(),
        taskname : INPUT_TASK.value.trim(),
        completed : false
    }
    if(!newTask.taskname) return
    tasks.push(newTask)
    saveTasks()
    renderTasks()
    INPUT_TASK.value = ''
    INPUT_TASK.focus()
})

function saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(tasks))
}

function renderTasks(){
    TASK_DISPLAY.innerHTML=''
    if(tasks.length == 0){
        TASK_DISPLAY.innerText = 'Tasks Not Found'
        return
    }
    tasks.forEach(t => {
        const li = document.createElement('li')
        const task = document.createElement('p')
        const deleteBtn = document.createElement('button')

        li.addEventListener('click',() =>{
            li.classList.toggle('completed')
            const index = tasks.findIndex(task=> task.taskId == t.taskId)
            tasks[index].completed = !tasks[index].completed
            saveTasks()
        })
        deleteBtn.addEventListener('click',() =>{
            li.remove()
            tasks = tasks.filter(task=> task.taskId != t.taskId)
            // console.log(tasks);
            renderTasks()
            saveTasks()
        })
        deleteBtn.innerText = 'Delete'
        task.innerText = t.taskname

        if(t.completed) li.classList.add('completed')

        li.append(task,deleteBtn)
        TASK_DISPLAY.append(li)

    });
    INPUT_TASK.focus()
}

