import fs from 'fs/promises'
import rs  from 'readline-sync'
import chalk from 'chalk'

const db='./tasks.json'

async function dbInit() {
    try {
        await fs.access(db)
        const tasks=await readDB()
        if(!Array.isArray(tasks)){
            console.log('DB corrupted,initializing new DB');
            await writeDB([])
        }
    } catch (error) {
        console.log('DB not found, initializing new DB');
        await writeDB([])
        await dbInit()
    }
}

async function readDB(){
    try{
        const data=await fs.readFile(db,'utf-8')
        return JSON.parse(data)
    }catch(error){
        console.log('Read DB error: ',error);
    }
}

async function writeDB(tasks) {
    try {
        const data=JSON.stringify(tasks,null,4)
        await fs.writeFile(db,data)
    } catch (error) {
        console.log(error);
    }
}

async function printTask() {
    try {
        const tasks=await readDB()
        console.log('Tasks: ');
        console.log(tasks);
    } catch (error) {
        console.log('Error printing tasks: ',error);
    }
}

async function createTask() {
    try {
        const tasks=await readDB()
        const newTask={
            id:Date.now(),
            task:rs.question('Enter the name of thr task: '),
            deadline:rs.question('Enter the task deadline:(dd/mm/yy)'),
            priority:rs.question('Enter your task priotity:(high/medium/low)')
        }
        tasks.push(newTask)
        await writeDB(tasks)
        console.log('New task created successfully');
    } catch (error) {
        console.log('Inavlid task details:',error);
    }
}

async function updateTask() {
    try {
        const taskId=rs.question('Enter the Task id: ')
        const tasks= await readDB()

        const taskIndex=tasks.findIndex(t=> t.id==taskId)
        
        if(taskIndex==-1){
            return console.log('Task not found');
        }
        const newTask={
            ...tasks[taskIndex],
            priority:rs.question('Enter the new priority (High/medium/low):'),
            deadline:rs.question('Enter the new deadline(dd/mm/yyyy): ')
        }
        tasks[taskIndex]=newTask
        await writeDB(tasks)
        console.log('Task updated successfully..');
        
    } catch (error) {
        console.log(error);
    }
}

async function deleteTask() {
    try {
        const task=await readDB()
        const taskId=rs.question('Enter the taskId: ')

        const taskIndex= task.findIndex(t=> t.id==taskId)
        if(taskIndex==-1){
            return console.log('Task not found');
        }
        task.splice(taskIndex,1)
        await writeDB(task)
        console.log('Task deleted successfully..');
        
    } catch (error) {
        console.log('Error deleting task: ',error);
    }
}

async function tasky(){
    await dbInit()
    while(true){
        console.log('\n===Tasky===');
        console.log('1.Create Task: ');
        console.log('2.Update Task: ');
        console.log('3.Delete Task: ');
        console.log('4.Print Task: ');
        console.log('0:Exit:  ');

        let choice=rs.questionInt('Enter your choice: ')
        switch(choice){
            case 1:
                await createTask()
                break;
            case 2:
                await updateTask()
                break;
            case 3:
                await deleteTask()
                break;
            case 4:
                await printTask()
                break;
            case 0:
                return
            default:
                break;
            
        }
    }
}
tasky()
