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
}

export default Tasks;