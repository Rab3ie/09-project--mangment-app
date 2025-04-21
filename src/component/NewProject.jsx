import Input from "./Input";
import Modal from "./Modal";
import { useRef } from "react";

export default function NewProject({onAdd}){
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
    
        <Modal ref={modal} buttonCaption={'close'}>
            <h2>This an warring message</h2>
            <p>You have wrote an empty form</p>
        </Modal>
        <div  className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950">Cancel</button></li>
                
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