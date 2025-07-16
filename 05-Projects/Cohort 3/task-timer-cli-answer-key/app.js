const { startTask, stopTask, listTasks } = require("./src/tasks");

// Parse command-line arguments
const args = process.argv.slice(2);
const command = args[0];

switch (command) {
  case "start":
    const taskName = args.slice(1).join(" ");
    if (!taskName) {
      console.log("Please provide a task name.");
    } else {
      startTask(taskName);
    }
    break;
  case "stop":
    stopTask();
    break;
  case "list":
    listTasks();
    break;
  case "help":
  default:
    console.log("Commands:");
    console.log("  start <task name> - Start a new task");
    console.log("  stop - Stop the current task");
    console.log("  list - List all tasks");
    console.log("  help - Show this help message");
    break;
}
