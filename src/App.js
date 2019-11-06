import React from 'react';
import { Header, Button, InputBox, TaskList } from './components'; // updated import - package components in on import


import { container } from './style/main'; // demonstrate react js style
import './style/main.css'; // demonstrate css loader

class App extends React.Component {
    // create state for this app
    state = {
      todo: '',
      tasks: [
          {
              id: 0,
              todo: 'Read on React',
              isComplete: false,
          },
          {
              id: 1,
              todo: 'Write some code',
              isComplete: false,
          },
      ],
    };
    handleChange = (e) => { // reusable function for textbox onChange event
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };
    addTask = () => { // function to add task on the task list
      const { todo, tasks } = this.state;
      // validate if tasks textbox is empty
      if (todo === '') {
          alert('Please insert task to do');
          return false;
      }
      const task = { id: tasks.length + 1, todo, isComplete: false };
      tasks.push(task);
      this.setState({ tasks, todo: '' }); // clear task textbox
    };
    checkTask = (id) => {
      const { tasks } = this.state;
      const updatedTasks = tasks.map((task) => {
          if (task.id === id) {
              task.isComplete = !task.isComplete;
          }
          return task;
      });
      // check and update task list
      // for (let i = 0; i < tasks.length; i++) {
      //     const task = tasks[i];
      //     if (task.id === id) {
      //         task.isComplete = !task.isComplete;
      //     }
      //     updatedTasks.push(task);
      // }
      this.setState({ tasks: updatedTasks });
    };
    render () {
        const { todo, tasks } = this.state;
        return (
            <div style={container}>
                <Header title="E Hana"/>
                <InputBox
                    label="ToDo:"
                    name="todo"
                    onChange={this.handleChange}
                    value={todo}
                    placeholder="Insert TODO"
                />
                <Button title="Add" onClick={this.addTask} />
                <TaskList
                    tasks={tasks}
                    checkTask={this.checkTask}
                />
            </div>
        );
    }
}

export default App;