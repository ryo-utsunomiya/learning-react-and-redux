import React, {Component} from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        { title: 'Default', id: 0 },
      ],
      uniqueId: 1,
    };
    this.addTodo = this.addTodo.bind(this);
    this.resetTodo = this.resetTodo.bind(this);
  }

  addTodo(title) {
    const {
      tasks,
      uniqueId,
    } = this.state;

    const newTask = {
      title,
      id: uniqueId,
    };

    this.setState({
      tasks: tasks.concat(newTask),
      uniqueId: uniqueId + 1,
    });
  }

  resetTodo() {
    this.setState({
      tasks: [],
    });
  }

  render() {
    return (
      <div>
        <h1>ToDo App</h1>
        <button onClick={this.resetTodo}>Reset</button>
        <TodoInput addTodo={this.addTodo}/>
        <TodoList tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
