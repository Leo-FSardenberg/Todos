import { TodoType } from "../types/todoType";
import { Task } from "./Task";
type taskProps = {
    todos: TodoType[]
    toggleTodo: (id:string,e: boolean )=> void;
    deleteTodo: (id:string)=>void
}


export function Tasklist({todos,deleteTodo,toggleTodo}:taskProps ){

    return(
       <ul>
        {todos.length === 0 && "Lista Vazia"}
          {todos.map((todo) => 
            <Task key={todo.id} {...todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
          )}
        </ul>
    )
}