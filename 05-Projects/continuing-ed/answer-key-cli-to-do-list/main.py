from modules.task_manager import TaskManager

# Prints initial choices for user
def print_menu():
    print("\n=== Task Manager ===")
    print("1. View tasks")
    print("2. Add task")
    print("3. Mark task as complete")
    print("4. Delete task")
    print("5. Save tasks")
    print("6. Exit")

def main():
    # Create a new instance of TaskManager to use in the main function
    manager = TaskManager()

    # Creating a loop to ensure the choices will always display
    while True:
        print_menu()
        # Saving the user's choice and trimming any accidental whitespace
        choice = input("Choose an option: ").strip()
        # Checking the value of choice and responding accordingly
        if choice == "1":
            manager.list_tasks()
        elif choice == "2":
            description = input("Enter task description: ")
            due_date = input("Optional due date (or leave blank): ").strip()
            due_date = due_date if due_date else None
            manager.add_task(description, due_date)
            print("Task added!")
        # Here, we are catching a value error that occurs if we get something that can't be converted to an integer.
        elif choice == "3":
            try:
                index = int(input("Enter task number to mark complete: "))
                manager.mark_complete(index)
                print("Task marked complete.")
            except ValueError:
                print("Please enter a valid number.")
        elif choice == "4":
            # Here, we are catching a value error that occurs if we get something that can't be converted to an integer.
            try:
                index = int(input("Enter task number to delete: "))
                manager.delete_task(index)
                print("Task deleted.")
            except ValueError:
                print("Please enter a valid number.")
        elif choice == "5":
            manager.save_tasks()
            print("Tasks saved.")
        # The break statement here is what keeps it from being an infinite loop, also saving tasks and printing a message to the user 
        elif choice == "6":
            manager.save_tasks()
            print("Goodbye!")
            break
        # Catchall in case the user enters something other than one of our numbers
        else:
            print("Invalid choice. Please select a valid option.")

# This ensures main is in fact the main entry point for the program. We only call the main function if the script in main.py is being executed directly.
if __name__ == "__main__":
    main()
