import React from 'react';
import {inputTask, addTask} from '../actions/tasks';

export default ({ store }) => {
  const { task, tasks } = store.getState();
  return (
    <div>
      <input type="text" onChange={e => store.disable(inputTask(e.target.value))}/>
    </div>
  );
};
