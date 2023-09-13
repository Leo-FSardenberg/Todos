import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";

type TaskFormProps = {
    onSubmit: (a:string)=> void
}

export function TaskForm({onSubmit}:TaskFormProps){
    const [inputText, setInputText] = useState("")
    
        function handleSubmit(e:FormEvent){
        e.preventDefault()
        
        onSubmit(inputText)
        
      setInputText("")
      }
    
    return(
            <form onSubmit={handleSubmit}
        className="flex items-center justify-center gap-3 px-10 -mt-4">
            <input 
            className='w-2/4 p-3 bg-gray-input rounded-md outline-none placeholder:text-gray-task'
            type="text"
            value={inputText} 
            onChange={(e)=>(setInputText(e.target.value))} 
            placeholder="Add a task"/>
            
            <button  
            type="submit"
            className="flex gap-1 text-gray-100 bg-blue-dark rounded-md px-3 py-3">
                Criar <PlusCircle className='mt-[5px]'/>
            </button>
        </form>
    )
}