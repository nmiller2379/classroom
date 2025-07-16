# Problems for Practice

These problems will help you practice your problem-solving skills, learn more about JavaScript and prepare you for future interviews.

### Problem 1: Who Likes It?

Write a function that takes an array of names and returns a string that describes who likes an item. The function should handle the following cases:

- If no names are given, it should return "no one likes this".
- If one name is given, it should return "X likes this", where X is the name.
- If two names are given, it should return "X and Y like this", where X and Y are the names.
- If three names are given, it should return "X, Y and Z like this", where X, Y and Z are the names.
- If four or more names are given, it should return "Y, Z and 2 others like this", where Y and Z and "others" is preceeded by the number of additional names.

**Examples:**

```js
howManyLikes([]); // No one likes this
howManyLikes(["Steven"]); // Steven likes this
howManyLikes(["Steven", "Kyle", "Fred"]); // Steven, Kyle and Fred like this
howManyLikes(["Steven", "Kyle"]); // Steven and Kyle like this
howManyLikes(["Steven", "Kyle", "Fred", "Jerry"]); // Steven, Kyle and 2 others like this
howManyLikes([
  "Emma",
  "Liam",
  "Olivia",
  "Noah",
  "Ava",
  "Elijah",
  "Sophia",
  "James",
  "Isabella",
  "William",
  "Mia",
  "Benjamin",
  "Charlotte",
  "Lucas",
  "Amelia",
  "Henry",
  "Harper",
  "Alexander",
  "Evelyn",
  "Michael",
  "Abigail",
  "Daniel",
  "Ella",
  "Matthew",
  "Elizabeth",
  "Sebastian",
  "Camila",
  "Jackson",
  "Luna",
  "David",
  "Sofia",
  "Joseph",
  "Avery",
  "Samuel",
  "Mila",
  "Carter",
  "Aria",
  "Owen",
  "Scarlett",
  "Wyatt",
  "Chloe",
  "John",
  "Layla",
  "Jack",
  "Ellie",
  "Luke",
  "Nora",
  "Jayden",
  "Hazel",
  "Dylan",
]); // Emma, Liam and 48 others like this
```

### Problem 2: How Many Items?

Write a function that takes an array of strings and returns a count of each string in the array. The function should return an object where the keys are the strings and the values are the counts. For example, if the input is `["apple", "banana", "apple"]`, the output should be `{"apple": 2, "banana": 1}`.
**Examples:**

```js
itemFrequency(["apple", "banana", "apple"]); // { "apple": 2, "banana": 1 }
itemFrequency([]); // {}
itemFrequency(["apple"]); // { "apple": 1 }
itemFrequency(["apple", "banana", "cherry"]); // { "apple": 1, "banana": 1, "cherry": 1 }
itemFrequency(["apple", "apple", "apple", "apple"]); // { "apple": 4 }
itemFrequency(["Apple", "apple", "APPLE"]); // { "Apple": 1, "apple": 1, "APPLE": 1 }
```

### Problem 3: Higher and Higher

Given a non-negative integer, rearrange its digits to create the highest possible number. For example, if the input is 42145, the output should be 54421.
**Examples**

```js
highestNumber(42145); // 54421
highestNumber(0); // 0
highestNumber(44); // 44
highestNumber(1715); // 7511
```

### Problem 4: Sum the Two Lowest Positive Integers

Given an array of integers, find the two lowest positive numbers and return their sum. For example, if the input is `[-19, 5, 42, 2, 77]`, the output should be `7`.

```js
lowestSum([-19, 5, 42, 2, 77]); // 7
lowestSum([-1, -1, -1, -1]); // There are no positiive integers in your array
lowestSum([-1, -1, -1, 1]); // There is only one positive integer in your array
lowestSum([1, 1, 2]); // 2
lowestSum([0, 0]); // There are no positive integers in your array
lowestSum([1, 100, 2]); // 3
```

### Problem 5: Shortest word

Given a string, find the length of the shortest word in the string. Words are separated by a single space. For example, if the input is `"The quick brown fox"`, the output should be `3`.

```js
shortestWord("The quick brown fox"); // 3
shortestWord("I love cake"); // 1
shortestWord(""); // 0
shortestWord("7"); // 1
shortestWord("Helloagain world"); // 5
```
