import React from 'react';
import '../style/main.css';
import Checkbox from './Checkbox';

const TaskList = ({tasks, checkTask}) => {
    const taskList = tasks.map((task, i) => {
       return  (
           <Checkbox
               key={i}
               checked={task.isComplete}
               onClick={() => checkTask(task.id)}
               title={task.todo}
           />
       );
    });
    return (
        <div className="taskList">
            {taskList}
        </div>
    );
};

export default TaskList;