import React, { useState } from 'react'
import { db } from '../../firebase';

const InputTask = () => {
    const [input, setInput] = useState("");
    const addTask = (e:React.MouseEvent<HTMLButtonElement>) => {
        db.collection("tasks").add({title: input});
        setInput("")
    }

    return (
        <div>
            <input 
                placeholder="追加するタスクを入力"　
                onChange={(e:React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)} 
            >    
            </input>
            <button 
                disabled={!input}
                onClick={addTask}>追加</button>
        </div>
    )
}

export default InputTask
