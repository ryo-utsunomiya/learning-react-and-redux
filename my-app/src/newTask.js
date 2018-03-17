let id = 0;

/**
 * Create new task.
 * @param title
 * @returns {{id: number, title: *}}
 */
export default title => ({
  id: id += 1,
  title,
});
