function reverseWords(sentance) {
  const wordsArr = sentance.split(" ")
  const reversedWords = []
  for (const word of wordsArr) {
    let wordString = ""
    for (let i = word.length-1; i >= 0; i--) {
      console.log()
      wordString += word[i]
    }
    reversedWords.push(wordString)

  }
  return reversedWords.join(" ")
}
console.log(reverseWords("hello world")) // → "olleh dlrow"

// Challenge 2: Count the Vowels
function countVowels(str) {
  const vowels = "aeiou";
  let count = 0;
  for (let char of str.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("banana")) 

// Challenge 3: Sum of Even Numbers
function sumEvenNumbers(numbers) {
  let sum = 0;
  for (let num of numbers) {
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6]))

// Challenge 4: Create a Mirror Array
function mirrorArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return arr.concat(reversed);
}

console.log(mirrorArray([1, 2, 3]))


// Challenge 5: Dice Rolling Simulator
function rollDice(num) {
  const results = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
  for (let i = 0; i < num; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    results[roll]++;
  }
  return results;
}

console.log(rollDice(100)) 
