import React from 'react';
import Column from '../column/Column';
import tasksJSON from '../tasks/tasks.json';
import './table.css';


const Table = () => {
    return (
        <div className='Wrapper'>
            <div className="table">
                <Column name='Актуальные задачи' taskName={[tasksJSON[2]]}/>
                <Column name='В процессе' taskName={[tasksJSON[0]]}/>
                <Column name='Выполнено' taskName={[tasksJSON[1]]}/>
            </div>
        </div>
    );
};

export default Table;