
import sys
import os


def stop_here():
    sys.exit()

def clear_terminal():
    os.system('cls')
# OOP in Python

# We've already been working with objects in Python, we just don't know it yet.

# When we use type(), we get <class 'str'>. 
# The string literal we declared is actually an object of the string class.

my_string = "Hello world"
print(type(my_string))

# num is equal to the object which is a type of integer with a value 1

upper_string = my_string.upper()
print(upper_string)

# If I do this...
num = 1
# print(num.upper())
# I get an error mesage that says 'int' object has no attribute 'upper'



# Everything is an object in Python.

# We do have some built-in objects, such as str, int, function, etc.


# How can we create our own?



class Dog:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def __str__(self):
        return f"This is a dog named {self.name}."
    
    def __eq__(self, other):
        return self.name == other.name 

    def bark(self):
        return f"Woof! I am {self.name}!"
        

# This instantiates or creates a new instance of the object Dog.

# print(my_dog.bark())
# print(your_dog.bark())
# The __main__ tells us what module it was defined in. In this case the main module (or global space)





my_dog = Dog("Carl", 3)
your_dog = Dog("Stan", 4)
another_dog = Dog("Carl", 2)
print(my_dog == another_dog)




print(type(my_dog))
# Classes are declared with upper case or camelCase by convention

# Self is a reference to the specific object itself. It's kind of invisible but it does ensure Python can keep track of which object is which.
print(my_dog.name)
print(your_dog.name)


# Real world OOP example

class Student:
    def __init__(self, name, age, grade):
        self.name = name
        self.age = age
        self.grade = grade # 0 - 100

    def get_grade(self):
        return self.grade
    
class Course:
    def __init__(self, name, max_students):
        self.name = name
        self.max_students = max_students
        self.students = []

    def add_student(self, student):
        if len(self.students) < self.max_students:
            self.students.append(student)
            return True
        return False
    def get_average_grade(self):
        value = 0
        for student in self.students:
            value += student.get_grade()
        return value / len(self.students)
    
tim = Student("Tim", 19, 95)
bill = Student("Bill", 19, 65)
sam = Student("Sam", 19, 65)

course = Course("CS", 2)
course.add_student(tim)
course.add_student(bill)
course.add_student(sam)
ave_grade = course.get_average_grade()
print(ave_grade)

# Inheritance
# Two classes that are similar

clear_terminal()

class Animal:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def show(self):
            print(f"I am {self.name} and I am {self.age} years old")
    
    def speak(self):
        print("I don't say anything")

class Cat(Animal):
    def speak(self):
        print("Meow")
    
class Dog(Animal):
    def speak(self):
        print("Bark")

class Fish(Animal):
    pass

# Sometimes we might want to add properties to a child class while retaining reference to the properies in the parent (or super class).

class FancyCat(Cat):
    def __init__(self, name, age, color):
        super().__init__(name, age)
        self.color = color
    
    def fancy_speak(self):
        print ("Fancy meow")

    def fancy_show(self):
        print(f"I am {self.name} and I am {self.age} years old and I am {self.color}")

friendly_dog = Dog("Rover", 4)
my_cat = Cat("Felix", 2)
friendly_dog.show()
my_cat.show()
my_fish = Fish("Bubbles", 1)
my_fish.speak()

garfield = FancyCat("Garfield", 3, "orange")
garfield.show()
garfield.fancy_show()

     

# Class attributes - Attributes that are specific to the class, not the instance of the class
class Person:
    number_of_people = 0

    def __init__(self, name):
        self.name = name
        Person.number_of_people += 1

    # Class methods are defined different than regular method.
    @classmethod # This is a decorator, that tells Python the below method is a class method and not an instance method.
    def nums_of_people(cls):
        return cls.number_of_people

print(Person.number_of_people)
josh = Person("Josh")
print(Person.number_of_people)
mike = Person("Mike")
print(Person.number_of_people)

print(josh.number_of_people)
print(mike.number_of_people)


# Static methods
class Math:
    @staticmethod
    def add_five(num):
        return num + 5
    
print(Math.add_five(5)) # 10

# Works but is discouraged
add_nums = Math()
print(add_nums.add_five(2))  # 7



class BankAccount:
    def __init__(self, owner, balance):
        self.owner = owner
        self.__balance = balance  # private attribute

    def deposit(self, amount):
        self.__balance += amount

    def get_balance(self):
        return self.__balance

stan = BankAccount("Stan", 100)
# print(stan.balance)

# The right way to access balance
print(stan.get_balance()) 
# Name mangling. This is discouraged.
print(stan._BankAccount__balance) 



x = 10
try:
    print(x / 0)
except ZeroDivisionError:
    print("Can't divide by zero!")




# user_input = input("Enter a number: ")
# try:
#     num = int(user_input)
#     print(10 / num)
# except ValueError:
#     print("That wasn't a valid number.")
# except ZeroDivisionError:
#     print("You can't divide by zero.")

def average_three_numbers(numbers):
    if len(numbers) != 3:
        return "Your list must have three numbers"
    return sum(numbers) / len(numbers)

nums = [5, 10]
print(average_three_numbers(nums))


from datetime import datetime

right_now = datetime.now()

print(right_now)
print(type(right_now))


print(dir(right_now))


from datetime import date, time, datetime

d = date(2025, 5, 2)
t = time(15, 30)
dt = datetime(2025, 5, 2, 15, 30)

print(d.strftime("%Y-%m-%d"))
print(t.strftime("%H:%M"))
print(dt.strftime("%Y-%m-%d %H:%M"))

clear_terminal()

class Book:
    def __init__(self, title):
        self.title = title

    @classmethod
    def untitled(cls):
        return cls("Untitled")
    
my_book = Book.untitled()
print(my_book.title)  # ➝ Untitled





