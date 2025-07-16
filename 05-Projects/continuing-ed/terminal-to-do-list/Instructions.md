# ✅ Project: Command-Line Task Manager

This project will provide the opportunity to work within the object-oriented programming paradigm and build a functional command-line application using your Python skills.

---

## 👤 User Stories

### 🧾 1. As a user, I want to add a task with a description so that I can remember what I need to do.

### ✅ 2. As a user, I want to view a list of all tasks so I can see what I still need to complete.

### ☑️ 3. As a user, I want to mark tasks as complete so that I can track my progress.

### ❌ 4. As a user, I want to delete a task so that I can remove it once it’s no longer needed.

### 💾 5. As a user, I want my tasks to be saved to a file so I don’t lose them when I exit the program.

### 🔄 6. As a user, I want tasks to load from the file when the app starts so I can pick up where I left off.

### 📅 7. As a user, I want to set an optional due date on a task so I can stay on schedule.

---

## ✅ Project Acceptance Criteria

### 🔧 Code Structure (Must Use OOP and Modularization)

1. **OOP Use Required**

   - A `Task` class must be defined to represent individual tasks.
   - A `TaskManager` class (or equivalent) must handle creation, deletion, completion, and display of tasks.

2. **Encapsulation and Method Use**

   - Methods such as `.add_task()`, `.delete_task()`, `.list_tasks()`, and `.mark_complete()` must be implemented inside the `TaskManager` class.
   - The `Task` class must contain a method to mark itself complete.

3. **Modularization Required**

   - The code must be separated into at least **three files**:
     - `task.py` — containing the `Task` class
     - `task_manager.py` — containing the `TaskManager` class
     - `main.py` for the CLI interface

4. **File Persistence**

   - The project must use Python’s `json` module (or `csv` as a backup) to **save and load tasks from a file**.

5. **Command-Line Interface**

   - The program must run entirely in the terminal using `input()` and `print()`
   - A simple numbered menu must guide user interaction and loop until the user exits.

6. **No External Packages**
   - The project must use only the **Python Standard Library** (You will use **os** and **json** modules, but those are part of the Python Standard Library).
