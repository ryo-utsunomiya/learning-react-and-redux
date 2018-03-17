import React from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import store from './TasksStore';

const App = () => {
  return (
    <div>
      <h1>ToDo App</h1>
      <button>Reset</button>
      <TodoInput/>
      <TodoList tasks={store.getState().tasks}/>
    </div>
  );
};

export default App;
