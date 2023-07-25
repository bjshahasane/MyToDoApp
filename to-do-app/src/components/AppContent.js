import React, { useState } from 'react';
import { MdCheck, MdDelete } from 'react-icons/md';
import styles from '../styles/modules/app.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, updateTodo } from '../slices/todoSlice';
import toast from 'react-hot-toast';

const AppContent = () => {

    const todoList = useSelector((state) => state.todo.todoList);
    const [checked, setChecked] = useState(false);


    const dispatch = useDispatch();
    const handleDelete = (id) => {
        dispatch(deleteTodo(id));
        toast.success('Todo Deleted Successfully');
    };

    const handleCheck = (item) => {
        setChecked(!checked);
        dispatch(
            updateTodo({ ...item, status: checked ? 'incomplete' : 'complete' })
        );
    };

    return (
        <div className={styles.appContent}>
            {
                todoList && todoList.map((item, index) => (
                    <div className={styles.contentItem} key={index}>
                        <div className={styles.titleDiv}>
                            <div>
                                <p>{item.title}</p>
                            </div>
                        </div>
                        {
                            item.status && item.status === "complete" ? (
                                <div className={styles.icondiv}>
                                    <div className={styles.icons}>
                                        <span>Task Completed</span>
                                    </div>
                                    <div className={styles.icons}>
                                        <MdDelete onClick={() => handleDelete(item.id)} />
                                    </div>
                                </div>
                            ) : (
                                <div className={styles.icondiv}>
                                    <div className={styles.icons}>
                                        <MdDelete onClick={() => handleDelete(item.id)} />
                                    </div>
                                    <div className={styles.icons}>
                                        <MdCheck onClick={() => handleCheck(item)} />
                                    </div>
                                </div>

                            )
                        }

                    </div>
                ))
            }


        </div>
    )
}

export default AppContent;