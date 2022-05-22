import React from 'react';
import TaskCard from '../taskCard/TaskCard';
import { useDrop } from 'react-dnd';
import { useState } from 'react';

import './column.css';

const Column = (props) => {

    const [board, setBoard] = useState(props.taskName);

    const addTask = (item) => {
        setBoard((board) => [...board, item]);
    }

    const [collectedProps, drop] = useDrop(() => ({
        accept: 'task',
        drop: (item) => {addTask(item)}
    }))

    const onDelete = (id) => {
        setBoard((board) => board.filter((item) => item.id !== id))
    }

    return (
        <div>
            <div className='tableColumn' ref={drop}>
                <div className="columnName">{props.name}</div>
                    {board.length ? board.map((task) => {
                        return <TaskCard task={task} key={task.id} onDelete={onDelete}/>;
                    }) : null }
            </div>
        </div>
    );
};

export default Column;