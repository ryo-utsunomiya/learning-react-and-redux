import {INPUT_TASK, ADD_TASK} from "../action-types/tasks";

const initialState = {
  task: undefined,
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case INPUT_TASK:
      console.log(INPUT_TASK);
      return {
        ...state,
        task: action.payload.task,
      };
    case ADD_TASK:
      return {
        ...state,
        tasks: state.tasks.concat([action.payload.task]),
      };
    default:
      return state;
  }
};

export default tasksReducer;
