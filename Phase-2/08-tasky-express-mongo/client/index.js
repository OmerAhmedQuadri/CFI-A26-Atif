import chalk from "chalk";
import rs from 'readline-sync'
import { getAllTasks , getTaskById , getTaskByPriority ,createTask, updateTask, deleteTask} from "./controllers.js";

const cli=async()=>{

    const OPTIONS={
        1: getAllTasks,
        2: getTaskById,
        3: getTaskByPriority,
        4: createTask,
        5: updateTask,
        6: deleteTask,
    }


    while(true){
        console.log('===TASKY===');
        console.log('0.Exit');
        console.log('1.get all Tasks');
        console.log('2.get Task by Id');
        console.log('3.get Task by Priority');
        console.log('4.create new Task');
        console.log('5.Update Task');
        console.log('6.Delete Task');
        
        const choice=rs.questionInt('Enter your choice: ')
        if(!choice) return console.log(chalk.redBright('Exiting....'));
        if(!OPTIONS[choice]) {
            console.log(chalk.redBright());
            continue
        }
        await OPTIONS[choice]()
    }
}
cli()