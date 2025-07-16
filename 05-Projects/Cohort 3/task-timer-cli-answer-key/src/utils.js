const fs = require("fs");
const logFilePath = "tasks.json";

/**
 * Load tasks from the JSON file.
 * @returns {Array} List of tasks.
 */
const loadTasks = () => {
  try {
    const dataBuffer = fs.readFileSync(logFilePath);
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

/**
 * Save tasks to the JSON file.
 * @param {Array} tasks - List of tasks to save.
 */
const saveTasks = (tasks) => {
  const dataJSON = JSON.stringify(tasks, null, 2);
  fs.writeFileSync(logFilePath, dataJSON);
};

module.exports = {
  loadTasks,
  saveTasks,
};
