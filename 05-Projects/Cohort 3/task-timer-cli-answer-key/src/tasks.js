const { loadTasks, saveTasks } = require("./utils");

/**
 * Start a new task and save it to the task list.
 * @param {string} taskName - The name of the task to start.
 */
const startTask = (taskName) => {
  const tasks = loadTasks();
  const task = {
    name: taskName,
    startTime: Date.now(),
    endTime: null,
    duration: null,
  };
  tasks.push(task);
  saveTasks(tasks);
  console.log(`Started task: ${taskName}`);
};

/**
 * Stop the current task and calculate its duration.
 */
const stopTask = () => {
  const tasks = loadTasks();
  const currentTask = tasks.find((task) => !task.endTime);
  if (!currentTask) {
    console.log("No task is currently running.");
    return;
  }
  currentTask.endTime = Date.now();
  currentTask.duration = (
    (currentTask.endTime - currentTask.startTime) /
    1000
  ).toFixed(2); // Duration in seconds
  saveTasks(tasks);
  console.log(`Stopped task: ${currentTask.name}`);
  console.log(`Duration: ${currentTask.duration} seconds`);
};

/**
 * List all tasks with their details.
 */
const listTasks = () => {
  const tasks = loadTasks();
  if (tasks.length === 0) {
    console.log("No tasks found.");
    return;
  }
  tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task.name}`);
    console.log(`   Start Time: ${new Date(task.startTime).toLocaleString()}`);
    console.log(
      `   End Time: ${
        task.endTime ? new Date(task.endTime).toLocaleString() : "In progress"
      }`
    );
    console.log(`   Duration: ${task.duration || "In progress"} seconds`);
  });
};

module.exports = {
  startTask,
  stopTask,
  listTasks,
};
