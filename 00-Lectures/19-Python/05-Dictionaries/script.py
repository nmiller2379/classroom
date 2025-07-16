

student = {
  "name": "Ava",
  "age": 24,
  "enrolled": True
}

print(student["name"])    # Ava
print(student["age"])     # 24

print(student.get("major")) # None
print(student.get("major", "N/A")) # N/A

major = student.get("major", "N/A")

if "major" in student:
    major = student["major"]
else:
    major = "N/A"

student["major"] = "CS"

student["age"] = 25

print(student)

del student["enrolled"]

age = student.pop("age")


if "name" in student:
    print("Yes, name is a key.")

# Returns list of keys
student.keys() 
# Returns list of values
student.values()
# Returns list of tuples
# Where each tuple is a key-value pair 
student.items() 

for key in student:
    print(f"{key}: {student[key]}")

for key, value in student.items():
    print(f"{key}: {value}")

student.clear()
print(student) # Returns {}

votes = ["yes", "no", "yes", "yes", "no"]

tally = {}
for vote in votes:
    tally[vote] = tally.get(vote, 0) + 1

print(tally)   # {'yes': 3, 'no': 2}

from collections import Counter
result = Counter(votes)
print(result)

original = {"name": "Ava", "age": 24}

# This does NOT make a copy
ref = original
ref["age"] = 30

print(original)  # {'name': 'Ava', 'age': 30} ← changed!

# This DOES make a copy
copy = original.copy()
copy["age"] = 35

print(original)  # {'name': 'Ava', 'age': 30}
print(copy)      # {'name': 'Ava', 'age': 35}

students = {
  "001": {"name": "Ava", "age": 24},
  "002": {"name": "Ben", "age": 22},
  "003": {"name": "Chloe", "age": 23}
}

# Accessing nested data
print(students["002"]["name"]) # Ben

user = {
  "name": "Ava",
  "age": 24,
  "major": "CS"
}

last_item = user.popitem()
print(last_item)  # ('major', 'CS')
print(user)       # {'name': 'Ava', 'age': 24}

fields = ["name", "age", "email"]
default_value = None

user_template = dict.fromkeys(fields, default_value)

print(user_template)
# {'name': None, 'age': None, 'email': None}

nums = [1, 2, 3, 4]

squares = {x: x**2 for x in nums}

print(squares)
# {1: 1, 2: 4, 3: 9, 4: 16}



