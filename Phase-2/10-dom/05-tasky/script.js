const inputBox = document.getElementById('task-ip')
const addTask = document.getElementById('add-task-btn')
const taskList = document.getElementById('tasks-lists')
let tasks = JSON.parse(localStorage.getItem('tasks')) || []
renderTasks()

addTask.addEventListener('click',() =>{
    let newTask = {
        taskId: Date.now(),
        taskname: inputBox.value.trim(),
        isCompleted: false,
    }
    if(!newTask.taskname) return
    tasks.push(newTask)
    renderTasks()
    saveTasks()
    inputBox.value = ''
    inputBox.focus()
})

function saveTasks(){
    localStorage.setItem('tasks',JSON.stringify(tasks))
}

function renderTasks(){
    taskList.innerHTML=''
    if(tasks.length == 0){
        taskList.innerText = 'Task not found'
        return
    }
    tasks.forEach(t => {
        const li = document.createElement('li')
        const task = document.createElement('p')
        const deleteBtn = document.createElement('button')
        li.addEventListener('click', function (){
            this.classList.toggle('completed')
            const index = tasks.findIndex((task)=>task.taskId == t.taskId)
            if(index == -1) return
            tasks[index].isCompleted = !tasks[index].isCompleted
            console.log(tasks);
            saveTasks()
        })
        deleteBtn.addEventListener('click',()=>{
            li.remove()
            tasks= tasks.filter(task => task.taskId != t.taskId)
            console.log(tasks);
            renderTasks()
            saveTasks()
        })
        deleteBtn.innerText = 'Delete'
        task.innerText = t.taskname

        if(t.isCompleted) li.classList.add('completed')

        li.append(task,deleteBtn)
        taskList.append(li)

        inputBox.focus()
    });
}