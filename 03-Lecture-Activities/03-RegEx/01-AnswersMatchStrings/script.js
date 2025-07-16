// 1. Match Literal Strings
const string1 = "I bought a banana from the store.";
const regex1 = /banana/;
console.log(string1.match(regex1));

// 2. Match a Literal String with Different Possibilities:
const string2 = "I have a cat and a dog at home.";
const regex2 = /cat|dog/;
console.log(string2.match(regex2));

// 3. Ignore Case While Matching
const string3 = "I like Apples, apples, and APPLES.";
const regex3 = /apple/gi;
console.log(string3.match(regex3));

// 4. Find More Than the First Match
const string4 = "I read a book, then another book, and finally bought a new book.";
const regex4 = /book/g;
console.log(string4.match(regex4));

// 5. Match Single Character with Multiple Possibilities
const string6 = "The quick brown fox jumps over the red dog.";
const regex6 = /[aeiou]/g;
console.log(string6.match(regex6));



