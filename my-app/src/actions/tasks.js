import {ADD_TASK, INPUT_TASK} from "../action-types/tasks";

/**
 * @param type
 * @param payload
 * @returns {{type: *, payload: *}}
 */
const action = (type, payload) => ({
  type,
  payload,
});

/**
 * Action creator to add task.
 * @param task
 * @returns {{type: string, payload: {task: *}}}
 */
export const addTask = task => action(ADD_TASK, { task });

/**
 * Action creator to input task.
 * @param task
 * @returns {{type: string, payload: {task: *}}}
 */
export const inputTask = task => action(INPUT_TASK, { task });
