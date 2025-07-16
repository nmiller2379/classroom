def greet():
    print("Hello, world!")

greet()  # Calls the function

def greet(name):
    print(f"Hello, {name}!")

greet("Alice")  # Output: Hello, Alice!
greet("Bob")    # Output: Hello, Bob!

def greet(name="Guest"):
    print(f"Hello, {name}!")

greet()        # Output: Hello, Guest!
greet("Alice") # Output: Hello, Alice!



def add(a, b):
    print(a + b)

add(3, 5)   # Output: 8
add(10, 20) # Output: 30

def square(num):
    return num * num

result = square(4)
print(result)  # Output: 16

def greet(name="Guest"):
    print(f"Hello, {name}!")

greet()        # Output: Hello, Guest!
greet("Alice") # Output: Hello, Alice!

def introduce(name, age):
    print(f"My name is {name} and I am {age} years old.")

introduce(age=30, name="Alice")  # Order doesn't matter

def greet(name):
    return f"Hello, {name}!"

greet_function = greet  # Function assigned to a variable
print(greet_function("Alice"))  # Output: Hello, Alice!

def greet(*args, **kwargs):
    for name in args:
        print(f"Hello, {name}!")
    for key, value in kwargs.items():
        print(f"{key}: {value}")

greet("Alice", "Bob", greeting="Hello", location="Earth")

def outer(name):
    def inner():
        print(f"Hello, {name}!")
    return inner

greet = outer("Alice")  # `greet` is now a closure
greet()  # Output: Hello, Alice!

def example():
    x = 10  # Local variable
    print(x)  # ✅ Works inside function

example()

# print(x)  # ❌ Error: x is not defined outside

x = 100  # Global variable

def show():
    print(x)  # ✅ Accessible inside function

show()
print(x)  # ✅ Also works outside

count = 0  # Global variable

def increment():
    count += 1  
    # ❌ Error: Local variable referenced before assignment

# increment()

count = 0

def increment():
    global count
    count += 1  # Now it works!

# increment()
# print(count)  # Output: 1


# ===================================================================================
# Lambda (or anonymous functions)
# A lambda function in Python is a small, anonymous function that can take any number of arguments but must contain only one expression.
add = lambda x, y: x + y
# print(add(2,2))

# result = lambda str: len(str)
# print(result("Hello World!"))

result = (lambda str: len(str))("Carl")
# print(result)

counter = 0

def increase():
    global counter
    counter += 1

# increase()
# print(counter)

x = 10  

def test():
    global x
    x += 5
    print(x)

# test()
# print(x)

def outer():
    msg = "Hello"

    def inner():
        print(msg)
    
    return inner

greet = outer()
# print(greet)
# greet()

def calculate(a, b=2):
    return a * b

print(calculate(3)) # Output: 6
print(calculate(3, 4)) # Output: 12


