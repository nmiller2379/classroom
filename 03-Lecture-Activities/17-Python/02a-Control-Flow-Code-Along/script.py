# # Write a python program that checks if a number stored in a variable x is positive > 0 or negative if < 0 or 0 if it's exactly 0.

# x = 0

# if x > 0:
#     print("Positive")
# elif x < 0:
#     print("Negative")
# else:
#     print("Zero")

# # Check if number n is between 10 and 20
# n = 10
# if 10 >= n <= 20:
#     print("true")

# n = 10
# if n >= 10 and n <= 20:
#     print("also true")

# n = 10
# if (n >= 10) and (n <= 20):
#     print("still also true")


# # Write a python program that asks the user to input their age and prints a message based on age ranges.

# a = input("Enter Age: ")

# if int(a) < 18:
#     print("minor")
# else:
#     print("adult")

# Write a for loop that prints all odd numbers from 0 to 15
# for i in range(16):
#     if i % 2 != 0:
#         print(i)

# Write a while loop that asks a user to enter a number, stops immediately if they enter 0 and prints "Try again!" otherwise
# user_input = input("Please Enter a number: ")

# while int(user_input) != 0:
#     print("Try again")
#     user_input = input("Please enter another number")

# user_input = input("Please enter a number: ")
# x = int(user_input)
# while x > 0:
#     print("Try again")
#     x -=1

# while True:
#     num = int(input('Enter a number: '))
#     if num == 0:
#         break
#     print('Try again')

# Give a dictionary write a loop that prints its item in the format apple costs 1.50
# prices = {
#         'apple': 1.5, 
#         'banana': 0.75, 
#         'orange': 1.25
#         } 

# for fruit, price in prices.items():
#     print(f'{fruit} costs ${price}')

# Write a nested loop that prints in the following pattern
# 1
# 22
# 333

# for i in range(1, 6):
#     print()
#     for j in range(i):
#         print(i, end = "")

# i = 0
# while i < 6:
#     for j in range(i):
#         print(i, end="")
#     print()
#     i += 1

# def trying(*todd):
#     print(todd)

# trying("1", "2", "3")

# def trying_kwargs(**todd):
#     print(todd)

# trying_kwargs(bob = "hello", kyle = "goodbye")

def outer(name):
    def inner():
        print(name)
    return inner

outer("Todd")()