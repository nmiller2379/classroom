
numbers = [1, 2, 3, 4, 5]
mixed = ["hello", 42, True, 3.14]

fruits = ["apple", "banana", "cherry"]
print(fruits[0])  # Output: apple
print(fruits[1])  # Output: banana
print(fruits[-1]) # Output: cherry (last element)
print(fruits[1:3]) # Output: ['banana', 'cherry']
print(fruits[:2]) # Output: ['apple', 'banana']
print(fruits[1:]) # Output: ['banana', 'cherry']

fruits[1] = "blueberry"  
print(fruits)  # Output: ['apple', 'blueberry', 'cherry']

nums = [5, 27, 19, 11]
nums.sort()
print(nums) # Output: [5, 11, 19, 27]
nums.reverse()
print(nums) # Output: [27, 19, 11, 5]

names = ["Todd", "Frank", "James"]
# names.sort(reverse=True)
# print(names) # Output: ['Todd', 'James', 'Frank'] 

sorted_names = sorted(names)
print(sorted_names) # Output: ['Frank', 'James', 'Todd']

reverse_sorted_names = sorted(names, reverse=True)
print(reverse_sorted_names) #Output: ['Todd', 'James', 'Frank']

squares = [x**2 for x in range(10)]
print(squares)  # Output: [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

def sort_by_length(word):
    return len(word)

words = ["banana", "apple", "cherry"]
words.sort(key=sort_by_length)
print(words)  # Output: ['apple', 'banana', 'cherry']

words = ["banana", "apple", "cherry"]
words.sort(key=lambda word: len(word), reverse=True)
print(words)  # Output: ['banana', 'cherry', 'apple']

names = ["Alice", "Bob", "Charlie"]
ages = [25, 30, 35]
paired = list(zip(names, ages))
print(paired)  # Output: [('Alice', 25), ('Bob', 30), ('Charlie', 35)]

fruits = ["apple", "banana", "cherry"]
for index, fruit in enumerate(fruits):
    print(index, fruit)

colors = ("red", "green", "blue")
print(colors[0])  # Output: red
print(colors[-1]) # Output: blue

point = (3, 4)
x, y = point
print(x)  # Output: 3
print(y)  # Output: 4

def get_coordinates():
    return (10, 20)

x, y = get_coordinates()
print(x, y)  # Output: 10 20

coordinates = {
    (40.7128, -74.0060): "New York",
    (34.0522, -118.2437): "Los Angeles"
}
print(coordinates[(40.7128, -74.0060)])  # Output: New York

nums_set = {1, 2, 3, 3, 4, 5}
print(numbers)  # Output: {1, 2, 3, 4, 5}

empty = {} #This will actually give us an empty dictionary
empty_set = set()
print(type(empty_set)) # Output: <class 'set'> 

odds = {1, 3, 5}
evens = {2, 4, 6}
primes = {2, 3, 5, 7}

print(odds.union(evens))         # {1, 2, 3, 4, 5, 6}
print(odds.intersection(primes)) # {3, 5}
print(evens.difference(primes))  # {4, 6}

def get_user_data():
    return "Alice", 28

name, age = get_user_data()
print(name, age) #Output: Alice 28



# urlpatterns = [
#     ("admin/", admin.site.urls),
#     ("home/", home_view),
# ]

pairs = [(1, 'a'), (2, 'b')]
for num, char in pairs:
    print(num, char)
