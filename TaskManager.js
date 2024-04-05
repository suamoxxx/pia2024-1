class TaskManager {
    constructor(){
        this.tasks = []
    }

    addTask(task){
        this.tasks.push(task);
    }

    deleteTask(task){
        this.tasks.shift(task);
    }
}   
module.exports = TaskManager;