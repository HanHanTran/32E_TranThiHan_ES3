
import { Todo } from '../js/todo.js';
import { TodoList } from '../js/todoList.js'

const todoService = new TodoList()
const renderTodolist = () =>{
    // let html = '';
    // for (let i = 0; i <todoService.TodoList.length; i++) {
    //  const todo = todoService.TodoList[i];
    //     html += `<li>${todo.newTask}</li>`
    // }
    const html = todoService.TodoList.reduce((value, todo) => {
        return value += `
        <li>
          <span>
          ${todo.newTask}
          </span>
          <i class=" fa-regular fa-trash-can" onclick="removeTodo('${todo.newTask}')"></i>
          <i class="fa-regular fa-circle-check" onclick="tickTodo('${todo.newTask}')"></i>
         
        </li>
        `
    }, '')
    document.querySelector('#todo').innerHTML = html

}
document.querySelector('#addItem').onclick = () => {
    const inputs = document.querySelectorAll('input');
    const todo = new Todo ()
    
    inputs.forEach((input) => {
        const{name, value} = input
        todo[name] = value

    })
    // console.log (todo)

    todoService.addTodo(todo)

   renderTodolist()
   document.querySelector('#newTask').value = "";

}
// xoá
window.removeTodo = (newTask) => {
    // console.log(newTask)
   todoService.removeTodo(newTask)
   renderTodolist()
}
// window.removerTodo = removerTodo


// tick việc làm
window.tickTodo = () => (newTask) => {
    const renderTodoComplete = () => {

        const todo = todoService.findTodo(newTask)
        const temp = []
        temp.push(todo.newTask);
        console.log(temp);
        let content = "";
        for (const value of temp) {
            content += `
            <li>
            <span>
            ${value}
            </span>
            <i class=" fa-regular fa-trash-can" ></i>
            <i class="fa-regular fa-circle-check" ></i>
          </li>
            `
        }
        document.getElementById('completed').innerHTML = content

    }
    renderTodoComplete()
    todoService.removeTodo(newTask);
    renderTodolist()
    
}

//sắp xếp

document.querySelector('#two').onclick = () => {
    const inputs = document.querySelectorAll('input');
    // console.log(content);
   
   
    

}


document.querySelector('#two').onclick = () => {

    todoService.TodoList.sort( (a, b) =>  ('' + a.newTask).localeCompare(b.newTask) );
    renderTodolist();

 }
 
 document.querySelector('#three').onclick = () => {
 
     todoService.TodoList.sort( (a, b) =>  ('' + b.newTask).localeCompare(a.newTask) );
     renderTodolist();

  }
// window.sortTodo = (newTask) => {
//     todoService.sortTodo(newTask)
//     renderTodolist()
// }










