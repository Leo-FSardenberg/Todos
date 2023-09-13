import { Trash } from "phosphor-react";

type TaskProps = {
    id: string;
    text: string;
    finished: boolean;
    toggleTodo: (id:string,e: boolean )=> void;
    deleteTodo: (id:string)=>void
}

export function Task({id, finished, text, toggleTodo, deleteTodo}: TaskProps){
    return(
    
         <li className="flex justify-between w-full max-w-4xl mt-5 mx-auto py-3 px-5 rounded-md text-gray-task bg-gray-input ">
           <input type="checkbox" checked={finished}
            onChange={e => toggleTodo(id, e.target.checked)}
           className=" w-4 h-4 mt-1 rounded-full shrink-0 appearance-none peer relative border border-blue-dark checked:bg-purple-dark checked:border-purple-dark checked:">
            </input>
             <p className="peer-checked:text-gray-600 peer-checked:line-through" >{text}</p>
            <button
            onClick={()=> deleteTodo(id)}
            ><Trash className="mt-1"/></button>
        </li>
   
    )
}