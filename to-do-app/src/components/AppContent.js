import React from 'react';
import { MdCheck, MdDelete, MdEdit } from 'react-icons/md';
import styles from '../styles/modules/app.module.scss';
import { useSelector } from 'react-redux';

const AppContent = () => {

    const todoList = useSelector((state) => state.todo.todoList);

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
                        <div className={styles.icondiv}>
                            <div className={styles.icons}>
                                <MdDelete />
                            </div>
                            <div className={styles.icons}>
                                <MdCheck />
                            </div>
                        </div>
                    </div>
                ))
            }


        </div>
    )
}

export default AppContent;