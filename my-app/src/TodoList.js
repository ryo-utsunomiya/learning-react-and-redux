import React from 'react';
import TodoItem from './TodoItem';

export default (props) => {
  return (
    <ul>
      {props.tasks.map(t => <TodoItem {...t} key={t.id}/>)}
    </ul>
  );
}
