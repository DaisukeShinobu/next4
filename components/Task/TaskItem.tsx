import React, { Props, useState } from 'react'
import firebase from 'firebase/app'
import { db } from '../../firebase';


interface PROPS {
    id: string;
    title: string;
}

const TaskItem: React.FC<PROPS> = (props) => {
    const [title, setTitle] = useState(props.title);
    const editTask = () => {
        db.collection("tasks").doc(props.id).set({title: title}, {merge: true});
    };

    const deleteTask = () => {
        db.collection("tasks").doc(props.id).delete();
    }


    return (
        <div>
            <h2>{props.title}</h2>
            <input 
                aria-label="タスクを編集"
                value={title}
                onChange={(e) => setTitle(e.target.value)} >
            </input>
            <button onClick={editTask}>タスクを編集</button>
            <button onClick={deleteTask}>タスクを削除</button>
        </div>
    )
}

export default TaskItem
