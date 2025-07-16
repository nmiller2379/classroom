import json
import os
from modules.task import Task

# This is an example of encapsulation in Object Oriented Programming. We're grouping related data and behavior into a single unit (a class) and hiding internal complexity so the rest of the program interacts through a clean, well-defined interface.

class TaskManager:
    # Creates an empty list to store all Task objects in memory. This becomes the working list that the rest of the class modifies. It starts out empty but will be populated if tasks exist on disk (see next step). It also saves the filename (defaulting to "tasks.json") that will be used for: 1) Loading existing tasks at startup. 2) Saving tasks when the user chooses to.
    def __init__(self, storage_path="tasks.json"):
        self.tasks = []
        self.storage_path = storage_path
        # Calls this method to immediately attempt to (all of the following happens in the load_tasks method) read from the file at self.storage_path. If the file exists and is readable, it loads the tasks from the disk and fills the tasks list. Otherwise the task list we created earlier remains empty
        self.load_tasks()

    def add_task(self, description, due_date=None):
        # Create and add a new task
        new_task = Task(description, due_date)
        self.tasks.append(new_task)

    def list_tasks(self):
        # Display all tasks with status. By using the start=1 argument in our enumerate function we make the value of index in our for loop start at 1 so that we can lists the tasks for the user starting with 1 instead of 0.
        if not self.tasks:
            print("No tasks to show.")
            return
        for index, task in enumerate(self.tasks, start=1):
            status = "✅" if task.completed else "❌"
            print(f"{index}. [{status}] {task.description} (Due: {task.due_date or 'None'})")

    def delete_task(self, index):
        # Delete task by index (1-based). The compound conditional is the same as writing if index > 0 and index <= len(self.tasks). We're doing this because we need the user to input a number between 1 (our lists start at 1 for what the user sees and the length of the list otherwise we would get an out of range error)
        if 0 < index <= len(self.tasks):
            del self.tasks[index - 1]
        else:
            print("Invalid task number.")

    def mark_complete(self, index):
        # Mark a task as complete by index (1-based). This works basically the same as above except it updates the mark complete property on the task object. It's calling a method that is in our Task class.
        if 0 < index <= len(self.tasks):
            self.tasks[index - 1].mark_complete()
        else:
            print("Invalid task number.")

    def save_tasks(self):
        # Save all tasks to JSON file so they can be reopened later.
        # The open() function returns a file object (something Python uses to read from or write to a file). We  assign that file object to a variable — by convention, we're calling it f.
        with open(self.storage_path, "w") as f:
            # We're passing a list comprehension into the dump method on json. It's essentially saying, "For each task in self.tasks, call task.to_dict() and collect the results into a new list."
            json.dump([task.to_dict() for task in self.tasks], f, indent=2)

    def load_tasks(self):
        # Load tasks from JSON file, if it exists. Discussed above.
        if os.path.exists(self.storage_path):
            with open(self.storage_path, "r") as f:
                try:
                    data = json.load(f)
                    # This is a class method used to create a new object when reading from the json file.
                    self.tasks = [Task.from_dict(item) for item in data]
                except json.JSONDecodeError:
                    self.tasks = []
