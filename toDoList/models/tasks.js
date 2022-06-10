import chalk from "chalk";

import Task from "./task.js";

class Tasks {
    _list = {};

    get listArr() {
        
        const listArr = [];
        Object.keys(this._list).forEach(key => {
            listArr.push(this._list[key]);
        })

        return listArr;
    }

    constructor(){
        this._list = {};
    }

    add(description = ''){
        const task = new Task(description);
        this._list[task.id] = task;
    }

    loadTasksFromArr(tasks = []){
        tasks.forEach(task => {
            this._list[task.id] = task;
        })
    }

    showList(){

        console.log('');
        for(let i=1; i<=this.listArr.length; i++){
            let task = this.listArr[i-1];
            let status = task.completed ? chalk.cyan(task.completed) : chalk.magenta('Pendiente');

            console.log(`${chalk.cyan( `${i}.`)} ${task.description} :: ${status} `);
        }
        console.log('');
    }

    listCompleted( completed = true){

        let tasks = ( completed )
                        ? this.listArr.filter( task => task.completed !== null)
                        : this.listArr.filter( task => task.completed === null)
        
        console.log('');
        tasks.forEach( (task, idx) => {
            const i = chalk.cyan( `${idx + 1}.`)
            const status = completed ? chalk.cyan(task.completed) : chalk.magenta('Pendiente')

            console.log(`${i} ${task.description} :: ${status} `);
        })
        console.log('');
    }
}

export default Tasks;