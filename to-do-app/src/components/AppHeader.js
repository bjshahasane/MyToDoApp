import React , { useEffect, useState } from 'react';
import styles from '../styles/modules/app.module.scss';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import { addTodo, updateTodo } from '../slices/todoSlice';
import { v4 as uuid } from 'uuid';


const AppHeader =()=>{
    const dispatch = useDispatch();
    const [title, setTitle] = useState('');


    const handleChange =(e)=>{
        setTitle(e.target.value);
    }

    const handlesubmit =(e)=>{
        if(title){
            dispatch(
                addTodo({
                  id: uuid(),
                  title,
                  time: new Date().toLocaleString(),
                })
              );
              toast.success('Task added successfully');
        }
    }
    return(
        <div className={styles.headerdiv}>
            <input type="text" className={styles.inputText} placeholder='Add you task' value={title} onChange={(e)=>handleChange(e)} name="title" />
            <button type="button" className={styles.addButton} onClick={(e)=>handlesubmit(e)}>Add ToDo</button>
        </div>
    )
}
export default AppHeader;