import { useState } from "react";
export default function NewTask({onAdd}){
    const [enteretdTask, setEntertedTask] = useState("");
    function handleChange(event){
        setEntertedTask(event.target.value);
    }
    function handleClick(){
        onAdd(enteretdTask)
        setEntertedTask('');
    }
    return(
        <div className="flex items-center justify-between">
            <input type="text"  className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleChange} value={enteretdTask}/>
            <button onClick={handleClick} className="text-stone-700 hover:text-stone-950">Add Task</button>
        </div>
    );
}