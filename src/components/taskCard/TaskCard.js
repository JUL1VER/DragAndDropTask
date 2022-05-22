import React from 'react';
import { useDrag } from 'react-dnd';

import './taskCard.css';

const TaskCard = (props) => {

    const [collected, drag, dragPreview] = useDrag(() => ({
        type: 'task',
        item: props.task,
        end: (item, monitor) => {props.onDelete(item.id)}
    }))

    return collected.isDragging ? (
        <div ref={dragPreview}/>
    ) : (
        <div ref={drag} {...collected}>
            <div className="taskCard">{props.task.name}</div>
        </div>
    );
};

export default TaskCard;