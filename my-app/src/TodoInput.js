import React from 'react';
import store, {inputTask, addTask} from './TasksStore';
import newTask from "./newTask";

export default () => {
  return (
    <div>
      <input
        placeholder="Insert new task."
        onChange={e => inputTask(newTask(e.target.value))}
      />
      <button
        type="button"
        onClick={() => store.dispatch(addTask(store.getState().task))}
      >
        Add
      </button>
    </div>
  );
}
