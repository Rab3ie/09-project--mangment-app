import Input from "./Input";
import Modal from "./Modal";
import { useRef } from "react";

export default function NewProject({onAdd, onCancel}){
    const title = useRef();
    const description = useRef();
    const dueDate = useRef();
    const modal = useRef();
    function handleSave(){
        const entertedTitle = title.current.value;
        const enteretddescription = description.current.value;
        const entertedDueDate = dueDate.current.value;
        if(entertedTitle.trim() === '' || 
            enteretddescription.trim() ==='' ||
            entertedDueDate.trim() === ''){
                modal.current.open();
                return;
            }
        onAdd({
           title: entertedTitle,
           description: enteretddescription,
           dueDate: entertedDueDate, 
        });
    }
    return(
        <>
    
        <Modal ref={modal} buttonCaption={'Okay'}>
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="mb-4 text-stone-600">Oops.. looks like you frgot to enter a valid value</p>
            <p className="mb-4 text-stone-600">Please make sure you provide a valid value for every input field</p>
        </Modal>
        <div  className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button onClick={onCancel} className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                
                <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>
            </menu>
            <div>
                <Input ref={title} label="Title" />
                <Input ref={description} label={"Description"} textarea/>
                <Input  ref={dueDate} type="date" label={"Due Date"} />
            </div>
        </div>
        </>
    );
}