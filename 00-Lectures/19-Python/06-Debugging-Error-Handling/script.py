# num = 25
# if num > 10
#     print("Too big")

# student = {"name": "Jordan"}
# print(student["age"])

# def average(numbers):
#     return sum(numbers) / 3

# print(average([2, 4, 6]))  

# def get_age(student):
#     return student["age"]

# def print_age():
#     student = {"name": "Jordan"}  # No "age" key!
#     print(get_age(student))

# print_age()

# def greet(name):
#     message = f"Hello, {name.upper()}!"
#     print("DEBUG:", message)
#     return message

# greet("Ava")

#  Write code that checks whether the key "username" exists in the following dictionary:

# user = { "username" : "jdoe", "active": True}

# if "username" in user:
#     print("username exists in user")

# print("username" in user)

# print(user.get("password"))

# Write a dictionary comprehension that maps each letter in the word "hi" to its ASCII value.
# ascii_map = {char: ord(char) for char in "hi"}
# print(ascii_map)


# "hi"
# { h: 103, i: 104 }

try:
    user_input = int(input("Enter a number: "))
    print(10 / user_input)
except ZeroDivisionError:
    print("You can't divide by zero!")
except ValueError:
    print("That's not a number.")
else:
    print("Yay! You did it right")
finally:
    print("I always have to do this, no matter what") 
