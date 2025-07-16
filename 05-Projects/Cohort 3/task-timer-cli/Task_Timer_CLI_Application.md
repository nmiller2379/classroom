# Task Timer CLI Application - User Stories

## User Story 1: Start a New Task
- **As a** user,
- **I want** to start a new task timer,
- **so that** I can track the time I spend on this task.

  **Acceptance Criteria:**
  - The CLI should prompt me to enter the task name.
  - The timer should start immediately after I provide the task name.
  - The task name and start time should be recorded.

## User Story 2: Stop a Task
- **As a** user,
- **I want** to stop the current task timer,
- **so that** I can end the time tracking for this task.

  **Acceptance Criteria:**
  - The CLI should stop the timer when I issue a stop command.
  - The end time should be recorded.
  - The task duration should be calculated and saved.

## User Story 3: View Task Durations
- **As a** user,
- **I want** to view a list of tasks and their durations,
- **so that** I can see how much time I have spent on each task.

  **Acceptance Criteria:**
  - The CLI should display a list of all tasks with their names and durations.
  - The tasks should be displayed in the order they were started.

## User Story 4: Save Task Logs
- **As a** user,
- **I want** the task logs to be saved,
- **so that** I can refer back to them later.

  **Acceptance Criteria:**
  - Task names, start times, end times, and durations should be saved to a file.
  - The file should be updated whenever a task is stopped or started.

## User Story 5: View Help Information
- **As a** user,
- **I want** to view help information about the commands,
- **so that** I can understand how to use the CLI application.

  **Acceptance Criteria:**
  - The CLI should provide a help command that lists all available commands and their descriptions.

## Command Examples
1. **Start a New Task:**
   ```bash
   node app.js start "Write report"
2. **Start a Task:**
   ```bash
   node app.js stop
3. **List Tasks and Time:**
   ```bash
   node app.js list
4. **See What Commands Are Availableno:**
   ```bash
   node app.js help




