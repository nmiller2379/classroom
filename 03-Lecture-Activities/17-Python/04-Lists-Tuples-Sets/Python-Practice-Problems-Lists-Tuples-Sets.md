# Python Practice Problems: Lists, Tuples & Sets

These practice problems reinforce key concepts from the "Lists, Tuples & Sets" lecture. Create a `script.py` file and solve these problems there.

### Practice Problem 1: List Manipulation

**Prompt:**  
Create a list of five of your favorite foods. Then:

1. Print the second item in the list.  
2. Replace the last item with `"pizza"`.  
3. Sort the list alphabetically.  
4. Print the updated list.

### Practice Problem 2: List Comprehension Challenge

**Prompt:**  
Write a list comprehension that creates a list of the **first 10 even numbers**, starting with 0. Then print the list.

**Bonus:** Write the same logic using a `for` loop and compare.

### Practice Problem 3: Tuple Packing & Unpacking

**Prompt:**  
Create a tuple representing a user:  
```python
("Alice", 29, "Designer")
```

Then:

1. Unpack the tuple into three separate variables.  
2. Print a sentence using those variables like:  
   `"Alice is a 29-year-old Designer."`


### Practice Problem 4: Sets and Duplicates

**Prompt:**  
You have a list of email addresses, and some are duplicates:

```python
emails = ["a@example.com", "b@example.com", "a@example.com", "c@example.com"]
```

Write a program that:

1. Creates a set from the list to remove duplicates.  
2. Prints how many **unique** email addresses there are.  
3. Prints the set.

### 🧠 Practice Problem 5: Comparing Structures

**Prompt:**  
You’re given these two collections:

```python
fruits_list = ["apple", "banana", "apple", "orange"]
fruits_set = {"apple", "banana", "orange"}
```

Write a few lines that:

1. Print both structures.  
2. Add `"kiwi"` to both.  
3. Explain (in a comment) what happens if you try to add `"apple"` again to each one.

### Stretch challenge: Find the Missing Letter
You are given a list of single lowercase letters that are supposed to represent the alphabet in order, but one letter is missing.

Write a Python program that finds and prints the missing letter.

```python
letters = ["a", "b", "c", "d", "f", "g"]  
# missing letter is "e"
```
**Requirements:**
- Assume the input list contains at least 2 letters.
- Letters are in order but may skip one.
- Only one letter is missing.
- Your program should work for any such list, not just the example.

**Hint:**
- Use [ord()](https://www.w3schools.com/python/ref_func_ord.asp) and [chr()](https://www.w3schools.com/python/ref_func_chr.asp) to convert between letters and numbers.




