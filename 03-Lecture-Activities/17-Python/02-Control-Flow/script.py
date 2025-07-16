for num in range(1, 16, 2): 
    print(num)

while True: 
    num = int(input('Enter a number: ')) 
    if num == 0: break 
    print('Try again')

prices = {'apple': 1.5, 'banana': 0.75, 'orange': 1.25} 

for fruit, price in prices.items(): 
    print(f'{fruit} costs ${price}')


# =========== FIBBONOCI SEQUENCE
# Initialize the first two Fibonacci numbers
a, b = 0, 1

# Print the first 10 Fibonacci numbers
for i in range(10):
    print(a)  # Print the current Fibonacci number
    a, b = b, a + b  # Update the values for the next iteration

# =========== MULTIPLICATION TABLE
# Loop through numbers 1 to 5 (outer loop)
for i in range(1, 6):
    # Loop through numbers 1 to 5 (inner loop)
    for j in range(1, 6):
        print(f"{i} x {j} = {i * j}", end="     ")  # Print multiplication result
    print()  # Move to the next line after inner loop finishes


# ====== PRINT PATTERN
# Loop through numbers 1 to 5 (outer loop)
for i in range(1, 6):
    # Print 'i' repeated 'i' times (inner loop)
    for j in range(i):
        print(i, end="")  # Print the number without a newline
    print()  # Move to the next line after inner loop finishes

# A different solution
i = 0
while (i < 6):
    for j in range(i):
        print(i, end="")
    print()
    i += 1

# ========== Print students with scores above 80 from a dictionary
students = {
    "Bob": 70,
    "Todd": 81,
    "Carl": 80
}

for key, value in students.items():
    if (value > 80):
        print(key)

n = 10
if 10 >= n <= 20:
    print("true")