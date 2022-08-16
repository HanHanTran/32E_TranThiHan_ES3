export class TodoList {
    constructor() {}
    TodoList = []
    addTodo (todo) {
        // sử dụng spread operator
        this.TodoList = [...this.TodoList,todo]
    }



    removeTodo (newTask) {
        this.TodoList = this.TodoList.filter((todo) =>{
            if( todo.newTask === newTask ){
                return false
    
            }return true

        })
        // this.TodoList = this.TodoList.filter(todo => todo.newTask === newTask)
       
    }


}