1. Given an array of numbers, return a new array that has only the numbers that are greater than or equal to 5.

2. Given an array of numbers, return a new array that only includes the even numbers.

3. Given an array of strings, return a new array that only includes those strings with a length of five characters or fewer. For example, ["dog", "by", "wolf",  "family", "eaten", "camping"] => ["dog", "by", "wolf", "eaten"]

4. Given an array of people objects wtih a name and member properties, return a new array of objects with only members of the club. For example: [{ name: "Jeff Bezos", member: true },{ name: "Neymar", member: false }, { name: "Dwayne Johnson", member: true }, { name: "Bill Gates", member: false }, { name: "Robert Downy Jr.", member: true }] => [{name: 'Jeff Bezos', member: true}, {name: 'Dwayne Johnson', member: true}, {name: 'Robert Downy Jr.', member: true}]

5. Given an array of people objects with name and age properties, return a new array containig only the initials of people age 21 or older. HINT: the Array.prototype.filter() method will be helpful with this challenge, but you will likely need more than just that method to return the right result. For example: [{ name: "Olivia Holt", age: 80 }, { name: "Elle Fanning", age: 2 }, { name: "Jennifer Lawrence", age: 5 }, { name: "Scarlett Johanson", age: 16 }, { name: "Sarah Jessica Parker", age: 100 }] => ["OH", "SJP"].