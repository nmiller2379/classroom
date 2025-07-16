# You are given a list of single lowercase letters that are supposed to represent the alphabet in order, but one letter is missing.

# Write a Python program that finds and prints the missing letter.

letters = ["a", "b", "c", "d", "f", "g"]  
# missing letter is "e"

# Assume the input list contains at least 2 letters.

# Letters are in order but may skip one.

# Only one letter is missing.

# Your program should work for any such list, not just the example.

# Algorithm
# 1. Find the numeric value of the last letter in the list and add 1 to it
# 2. Create a range from the number representing first letter in the list up to that number
# 3. Iterate through the range, for each number in range
    # 4. Convert number to letter
    # 5. Check to see if letter is not in input list
        # 6. If it is not return that letter

more_letters = ["w", "y", "z"]
# Should return x

# #### Imperative solution
# O(n^2) time complexity
# O(n) space complexity

def missing_letter(letters):
    numbers = range(ord(letters[0]), ord(letters[-1])+1)
    for number in numbers:
        if chr(number) not in letters:
            return chr(number)

result = missing_letter(more_letters)
print(result)

# ####### SOLVED WITH SET ##########
# O(n) time complexity
# O(n) space complexity

def find_missing_letter(sequence):
    full_range = set(range(ord(sequence[0]), ord(sequence[-1])+1))
    sequence_set = set()
    for letter in sequence:
        sequence_set.add(ord(letter))
    return chr(list(full_range.difference(sequence_set))[0])

result = find_missing_letter(more_letters)
print("result with sets", result) 

# ######### Most efficient solution
# O(n) time complexity
# O(1) space complexity
def missing_letter_efficient(sequence):
    for current, next_letter in zip(sequence, sequence[1:]):
        if ord(next_letter) - ord(current) != 1:
            return chr(ord(current) + 1)
        
def missing_letter_alpha(letters):
    alphabet = "abcdefghijklmnopqrstuvwxyz"
    start = alphabet.find(letters[0])
    end = alphabet.find(letters[-1])
    alpha_range = list(alphabet[start:end+1])
    for letter in alpha_range:
        if letter not in letters:
            return letter

result = missing_letter_alpha(["a", "c"])
print(result)
