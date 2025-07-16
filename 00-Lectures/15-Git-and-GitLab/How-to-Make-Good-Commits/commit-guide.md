# One-Page Guide to Making Good Commits

Good commits are the foundation of a well-organized project. They make it easier for you and others to understand, maintain, and collaborate on your code. Here’s a simple guide to help you create effective commits.

## 1. Commit Often
- **Why:** Frequent commits help capture your progress in small steps, making it easier to track changes and revert if necessary.
- **How:** Whenever you complete a small task or make a logical change, commit your work. Avoid waiting too long or bundling too many changes into a single commit.

## 2. Make Each Commit Focused
- **Why:** Commits should represent a single task or change, like adding a feature, fixing a bug, or refactoring code. This makes your history clear and easy to follow.
- **How:** Before committing, ask yourself if the changes are all related. If not, split them into separate commits.

## 3. Write Clear Commit Messages
- **Why:** A good commit message explains what changes were made and why. This is crucial for understanding your project’s history and for collaborating with others.
- **How:** Start your commit message with a short summary (50 characters or less). Optionally, follow it with a more detailed explanation if necessary.
- **Example (when adding a To-Do List Feature):**

```bash
- git commit -m "Created basic HTML structure for the To-Do list"
- git commit -m "Added functionality to add new tasks"
```

## 4. Use Imperative Mood in Messages
- **Why:** Writing commit messages in the imperative mood (e.g., "Add feature" instead of "Added feature") is a common convention that makes your messages consistent and easy to read.
- **How:** Think of your commit message as giving an instruction, like a to-do item: "Fix bug," "Update dependencies," "Refactor code."

## 5. Test Before Committing
- **Why:** Committing untested or broken code can lead to issues later on. Always make sure your changes work as expected before you commit.
- **How:** Run your tests or manually check your code to ensure everything is functioning correctly.

## 6. Use Branches for New Features
- **Why:** Branches allow you to work on new features, bug fixes, or experiments without affecting the main codebase. Once the work is complete and tested, you can merge it back into the main branch.
- **How:** Create a new branch for each feature or fix, and commit your changes to that branch. Merge the branch back into the main codebase once everything is working well.

## 7. Keep Your Commit History Clean
- **Why:** A clean, well-organized commit history is easier to read and understand. It tells the story of how your project has evolved over time.
- **How:** Avoid unnecessary commits like "fix typo" or "revert previous commit." Instead, use commands like `git rebase` or `git squash` to combine or clean up commits before merging.

## 8. Reference Issues or Tickets
- **Why:** If you’re working on a project with issue tracking, referencing the related issue or ticket number in your commit message helps link the code to the task.
- **How:** Include the issue number in your commit message, like so: `Fix login bug #42`. This connects your commit to the bigger picture of the project’s development.

## Best Practices Summary
- **Commit small, focused changes frequently.**
- **Write clear, descriptive commit messages in the imperative mood.**
- **Test your code before committing.**
- **Use branches to keep the main codebase stable.**
- **Keep your commit history clean and organized.**
- **Reference issues or tickets when relevant.**

By following these guidelines, you’ll create a commit history that is not only useful to you but also valuable to others who may work with your code in the future. Good commits are a sign of a thoughtful, professional approach to coding.
