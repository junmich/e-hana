import React from 'react';
import '../style/main.css';
import Checkbox from './Checkbox';

const TaskList = ({tasks, checkTask}) => {
    const taskList = [];
    for (let i = 0; i < tasks.length; i++) {
        const task = tasks[i];
        const taskElement = (
            <Checkbox
                key={i}
                checked={task.isComplete}
                onClick={() => checkTask(task.id)}
                title={task.todo}
            />
        );
        taskList.push(taskElement);
    }
    return (
        <div className="taskList">
            {taskList}
        </div>
    );
};

export default TaskList;