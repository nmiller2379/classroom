from datetime import datetime

class Task:
    # Creates the properties each task must have, defaulting the value of due_date to none
    def __init__(self, description, due_date=None):
        self.description = description
        self.completed = False
        self.created_at = datetime.now()
        self.due_date = due_date  # Optional due date
    # Used to update the complete status
    def mark_complete(self):
        # Mark the task as completed
        self.completed = True
    # Used to convert from an object to a dictionary for use in converting it to JSON.
    def to_dict(self):
        # Convert the Task object to a dictionary for saving
        return {
            "description": self.description,
            "completed": self.completed,
            "created_at": self.created_at.isoformat(),
            "due_date": self.due_date
        }

    # This is a class method because we use it to create a new instance of the class, which is what class methods are for in OOP in Python.
    @classmethod
    def from_dict(cls, data):
        # Rebuild a Task object from a saved dictionary
        task = cls(data["description"], data.get("due_date"))
        task.completed = data["completed"]
        return task
