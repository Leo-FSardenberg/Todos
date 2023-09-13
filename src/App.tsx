 import { useState } from 'react'
import { Header } from './components/Header'
import { TodoType } from './types/todoType'
import { Tasklist } from './components/Tasklist'
import { TaskForm } from './components/TaskForm'


export function App() {
 const [todos, setTodos] = useState<TodoType[]>([
    {id: crypto.randomUUID(), text: 'Matar os 7 dragões malignos', finished: false}
  ])

      function addTodo(text: string){
        setTodos(currentTodos => {return [
          ...currentTodos, {id: crypto.randomUUID(), text, finished: false }
        ]
      })
      }

      function toggleTodo(id:string, finished:boolean) {
        setTodos(currentTodos => {
          return currentTodos.map(todo => {
            if(todo.id === id){
               return { ...todo, finished}
            } 
             return todo
          })
        
        })
      }
      function deleteTodo(id: string){
         setTodos(currentTodos => {
          return currentTodos.filter(todo => todo.id !== id)
        })
      }


  return (
   <>
     <Header />
        <TaskForm onSubmit={addTodo}/>
        <Tasklist todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}


