if True:
    print("Python requires indentation!")

# if True:
# print("This will cause an error!")

name = "Alice"  # String
age = 30        # Integer
height = 5.7    # Float
is_hungry = True  # Boolean
MY_CONSTANT = 7 # Meant to stay constant

x = None
print(x)  # None

# y
# print(y) # Error message: name 'y' is not defined


print(type("Hello"))  # Output: <class 'str'>
print(type(10))       # Output: <class 'int'>
print(type(3.14))     # Output: <class 'float'>
print(type(True))     # Output: <class 'bool'>
print(type([1, 2, 3]))  # Output: <class 'list'>
print(type((1, 2, 3))) # Output: <class 'tuple'>
print(type({ "name": "Todd" })) # Output: <class 'dict'>

first_name = "Alice"
last_name = "Johnson"

# Concatenation
full_name = first_name + " " + last_name
print(full_name)  # Output: Alice Johnson

# Formatted Strings
age = 25
print(f"My name is {full_name} and I am {age} years old.") 

a = 10
b = 3

print(a + b)  # Addition (13)
print(a - b)  # Subtraction (7)
print(a * b)  # Multiplication (30)
print(a / b)  # Division (3.333...)
print(a // b)  # Floor Division (3)
print(a % b)  # Modulus (1)
print(a ** b)  # Exponentiation (10^3 = 1000)

z = 2 + 3j  # A complex number
print(z)  # Output: (2+3j)

# Accessing the real and imaginary parts
print("Real part:", z.real)  # Output: 2.0
print("Imaginary part:", z.imag)  # Output: 3.0

# Performing arithmetic with complex numbers
z2 = 1 - 4j
sum_z = z + z2
print("Sum:", sum_z)  # Output: (3-1j)

product_z = z * z2
print("Product:", product_z)  # Output: (14-5j)

x = 10
y = 5

print(x > y)  # True
print(x == y)  # False
print(x != y)  # True

fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # Output: apple

fruits.append("orange")  # Add new item
print(fruits)  # ['apple', 'banana', 'cherry', 'orange']

fruits.remove("banana")  # Remove item
print(fruits)  # ['apple', 'cherry', 'orange']

my_tuple = (1, 2, 3)
# my_tuple[0] = 10  # ❌ ERROR: Tuples cannot be modified!

my_list = [1, 2, 3]
my_list[0] = 10  # ✅ Lists can be modified

another_tuple = (1,) # Must use this comma, with one value

person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

print(person["name"])  # Output: Alice
print(person.get("age"))  # Output: 30

person = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

print(person["name"])  # Output: Alice
print(person.get("age"))  # Output: 30

# Standard string keys
person = {"name": "Alice", "age": 30}

# Integer keys
student_scores = {1: "John", 2: "Alice", 3: "Bob"}

# Tuple keys (useful for coordinate systems)
coordinates = {(0, 0): "Origin", (1, 2): "Point A"}

# Boolean keys (rare, but allowed)
truth_values = {True: "Yes", False: "No"}

alice = {
    "name": "Alice"
}

print(alice.get("age")) # None
# print(alice["age"]) # Error Message: KeyError: 'age'

name_dictionary = {
    "first": "Bob",
    "last": "Smith"
}

person_dict = {
    "first": "Bob",
    "last": "Smith"
}

false_dict = {
    "first": "Bob",
    "last": "Smythe"
}

print(name_dictionary == person_dict) # Output: True
print(person_dict == false_dict) # output: False

# Converting to Integer
print(int(4.7))      # Output: 4
print(int("10"))     # Output: 10

# Converting to Float
print(float(3))      # Output: 3.0
print(float("4.5"))  # Output: 4.5

# Converting to String
print(str(100))      # Output: "100"

# Converting to Boolean
print(bool(0))       # Output: False
print(bool(1))       # Output: True
print(bool(""))      # Output: False

# Converting to List
print(list("hello")) # Output: ['h', 'e', 'l', 'l', 'o']

# Converting to Tuple
print(tuple([1, 2, 3])) # Output: (1, 2, 3)

# Converting to Set (removes duplicates)
print(set([1, 2, 2, 3])) # Output: {1, 2, 3}

# Converting to Dictionary
print(dict([("name", "Alice"), ("age", 30)])) 
# Output: {'name': 'Alice', 'age': 30}

# Creating a Complex Number
print(complex(2, 3)) # Output: (2+3j)



