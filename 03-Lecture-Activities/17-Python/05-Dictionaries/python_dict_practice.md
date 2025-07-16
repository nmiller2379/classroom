
# Python Practice Problems: Dictionaries & More

These problems emphasize Python **dictionaries** and also incorporate your knowledge of **lists, functions, control flow, sets**, and **tuples**.

---

### Practice Problems

---

#### 1. Frequency Counter
Write a function `count_words(text)` that takes a string and returns a dictionary with the count of each word (case-insensitive).

```python
count_words("To be or not to be")
# Output: {'to': 2, 'be': 2, 'or': 1, 'not': 1}
```

---

#### 2. Shopping Cart Total
You’re given a dictionary of items with their prices and a list of items in a cart. Write a function that calculates the total price.

```python
prices = {"apple": 0.99, "banana": 0.59, "milk": 2.50}
cart = ["apple", "milk", "apple", "banana"]

# Output: 5.07
```

---

#### 3. Student Grades Lookup
Create a dictionary that stores student names as keys and their list of test scores as values. Write a function `average_grade(name)` that returns the average score for a student.

```python
students = {
    "Alice": [85, 90, 82],
    "Bob": [78, 88],
    "Eve": [100]
}
```

---

#### 4. Invert a Dictionary
Write a function `invert_dict(d)` that takes a dictionary and returns a new dictionary that maps values to lists of keys.

```python
# Input: {'a': 1, 'b': 2, 'c': 1}
# Output: {1: ['a', 'c'], 2: ['b']}
```

---

#### 5. Character Frequency Histogram
Write a function that takes a string and returns a dictionary showing how many times each character appears (case-sensitive, ignore spaces).

```python
char_freq("Hello World")
# Output: {'H': 1, 'e': 1, 'l': 3, 'o': 2, 'W': 1, 'r': 1, 'd': 1}
```

---

#### 6. Group Words by Length
Given a list of words, return a dictionary where the keys are word lengths and the values are lists of words with that length.

```python
group_words(["hi", "hello", "hey", "world"])
# Output: {2: ['hi'], 5: ['hello', 'world'], 3: ['hey']}
```

---

#### 7. Inventory Restocker
You are given two dictionaries: `inventory` and `shipment`. Write a function that updates the inventory by adding the shipment quantities. If the item doesn't exist, add it.

```python
inventory = {"apple": 10, "banana": 5}
shipment = {"banana": 10, "orange": 7}
# Updated inventory: {"apple": 10, "banana": 15, "orange": 7}
```

---

#### 8. Unique Email Domains
You’re given a list of email addresses. Write a function that returns a set of all unique domains.

```python
emails = ["alice@gmail.com", "bob@yahoo.com", "eve@gmail.com"]
# Output: {'gmail.com', 'yahoo.com'}
```

---

#### 9. Word Replacer
Write a function that takes a sentence and a dictionary of replacements, and returns a new sentence with words replaced using the dictionary.

```python
sentence = "hello world"
replacements = {"hello": "hi", "world": "earth"}

# Output: "hi earth"
```

---

#### 10. User Permissions Checker
You are given a dictionary that maps usernames to sets of permissions. Write a function `has_permission(user, permission)` that returns True if the user has that permission.

```python
permissions = {
    "admin": {"read", "write", "delete"},
    "guest": {"read"},
    "editor": {"read", "write"}
}
```
