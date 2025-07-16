// SOCCER SEASON========================================================
// Our soccer team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in for the season by the rules given above.

// SAMPLE SOLUTION++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Input an array of strings, each with numbers representing scores of games separated by a colon. Our team : their team

// Output: A number representing the point total

// Examples: ["3:1", "2:2", "0:1"] => 4; ["1:2", "1:0", "0:1", "3:3"] => 4

function totalPoints(arr) {
  // 1. Initialize points to 0;
  let points = 0;
  // 2. Loop through arr - for each string in arr
  for (const string of arr) {
    // c. if ourScore > theirScore points += 3
    if (string[0] > string[2]) {
      points += 3;
    }
    // d. if ourScore === theirScore points += 1
    if (string[0] === string[2]) {
      points += 1;
    }
  }
  // 3. Return points
  return points;
}

// console.log(totalPoints(["1:2", "1:0", "0:1", "3:3"]))
// console.log(totalPoints(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))

// COUNT DIFFERENCE
// ================================================================================
// Given an array of distinct integers, count the number of pairs of integers that have a difference of k.

// SAMPLE SOLUTIONS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Input: An array of integers, and a single integer k. The array of integers will not be empty and will have at least one pair of integers.

// Output: The number of pairs of integers in the array that have a difference of k.

// Example
// Input: [1, 7, 5, 9, 2, 12, 3], 2 => Output: 4; [12, 17, 19, 11, 15, 3, 5, 1, 2, 10], 5 => Output: 6

// Algorithm
// 1. Initialize a variable count to 0
// 2. Iterate through the array
// 3. For each element in the array, iterate through the array again
// 4. If the absolute value of the difference between the two elements is equal to k, increment count
// 5. Return count

function countPairs(arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === k) {
        count++;
      }
    }
  }
  return count;
}

console.log(countPairs([1, 7, 5, 9, 2, 12, 3], 2)); // 4

// Time complexity: O(n^2)

// Optimized solution
// Algorithm
// 1. Initialize a variable count to 0
// 2. Create a set from the array
// 3. Iterate through the array
// 4. If the set contains the current element + k, increment count
// 5. Return count

function countPairsOptimized(arr, k) {
  let count = 0;
  let set = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] + k)) {
      count++;
    }
  }
  return count;
}

console.log(countPairsOptimized([1, 7, 5, 9, 2, 12, 3], 2)); // 4

// Time complexity: O(n)

// Another optimized solution
// Algorithm
// 1. Initialize a variable count to 0
// 2. Initialize an empty object
// 3. Iterate through the array
// 4. Create property on object for each element in the array
// 5. Iterate over properties in the object
// 5. If the object contains the current element + k, increment count
// 6. Return count

function countPairsAnotherOptimized(arr, k) {
  let count = 0;
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }
  for (let prop in obj) {
    if (obj[Number(prop) + k]) {
      count++;
    }
  }
  return count;
}

console.log(countPairsAnotherOptimized([1, 7, 5, 9, 2, 12, 3], 2)); // 4

// Time complexity: O(n)

// ASCII TOTAL
// =============================================================================================
// You'll be given a string, and have to return the sum of all characters as an int. The function should be able to handle all printable ASCII characters.

// Examples:

// uniTotal("a") == 97
// uniTotal("aaa") == 291

// SAMPLE SOLUTIONS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// 1. Initialize total to 0
// 2. Iterate through string
// 3. Total += charCodeAt(i)
// 4. Return total

function uniTotal(string) {
  let total = 0;
  for (let i = 0; i < string.length; i++) {
    total += string.charCodeAt(i);
  }
  return total;
}

console.log(uniTotal("a"));
console.log(uniTotal("e"));
console.log(uniTotal("aaa"));
console.log(uniTotal("Mary Had A Little Lamb"));

// Other solutions
// const uniTotal = str => [...str].reduce((acc, char) => acc + char.charCodeAt(0), 0);

// function uniTotal (string) {
//   let sum = 0;
//   if( string.length === 0 ){
//     return 0;
//   } else {
//     for( x in string ){
//       sum += string.charCodeAt(x)
//     }
//   }
//   return sum;
// }

// PILLARS
// =============================================================================================
// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar). There are 100 centimeters in a meter.

// SAMPLE SOLUTIONS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Sample inputs and sample outputs: (1, 10, 10) => 0; (2, 20, 25) => 2000;

// 1. If numPill === 1
// a. return 0
// 2. ElseIf numPill === 2
// return dist * 100
// 3. Else
// a initialize pillarsThatCount to numPill - 1
// b initialize distanceCentimeters to dist * 100
// b initialize partialDistance to disttanceCentimeters * pillarsThatCount
// c initialize totalWidth to width * (numPill-2)
// return partialDistance + totalWidth

function pillars(numPill, dist, width) {
  if (numPill === 1) {
    return 0;
  } else if (numPill === 2) {
    return dist * 100;
  } else {
    const pillarsThatCount = numPill - 1; // Because there are (numPill - 1) gaps between pillars
    const distanceCentimeters = dist * 100;
    const partialDistance = distanceCentimeters * pillarsThatCount;
    const totalWidth = width * (numPill - 2); // Total width excluding the first and last pillar
    return partialDistance + totalWidth;
  }
}

console.log(pillars(1, 10, 10)); // return 0
console.log(pillars(2, 20, 25)); // return 2000
console.log(pillars(11, 15, 30)); // return 15270

// Other solutions
function pillars1(num_pill, dist, width) {
  // your code here
  return num_pill > 1
    ? (num_pill - 1) * dist * 100 + (num_pill - 2) * width
    : 0;
}

console.log(pillars1(1, 10, 10)); // return 0
console.log(pillars1(2, 20, 25)); // return 2000
console.log(pillars1(11, 15, 30)); // return 15270

function pillars2(num_pill, dist, width) {
  if (num_pill === 1) {
    return 0;
  } else {
    let distance = dist * ((num_pill - 1) * 100);
    let pillars = num_pill - 2;
    return distance + width * pillars;
  }
}

console.log(pillars2(1, 10, 10)); // return 0
console.log(pillars2(2, 20, 25)); // return 2000
console.log(pillars2(11, 15, 30)); // return 15270

// IS UNIQUE
// ==============================================================================================
// Implement an algorithm to determine if a string has all unique characters.

// SAMPLE SOLUTIONS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Sample inputs and outputs
// ("aaa") => false; ("a") => true ("abc") => true ("aabc") => false

// 1. Initiate count to {}
// 2. Iterate through string - check if count[character] is true
// a. if it is count[character]++
// b. if it is not, count[character] = 1
// 3. Iterate through count properties
// a. if preperty value > 1 return false
// 4. Return true

function allUnique(string) {
  const count = {};
  for (const character of string) {
    if (count[character]) {
      count[character]++;
    } else {
      count[character] = 1;
    }
  }
  for (const key in count) {
    if (count[key] > 1) {
      return false;
    }
  }
  return true;
}

console.log(allUnique("aabc"));

function allUnique1(string) {
  return new Set(string).size === string.length;
}

function allUnique2(string) {
  const seen = [];
  for (const char of string) {
    if (seen.includes(char)) {
      return false;
    }
    seen.push(char);
  }
  return true;
}

// NEUTRALISATION
// ============================================================================================
// Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

// When positives and positives interact, they remain positive.
// When negatives and negatives interact, they remain negative.
// But when negatives and positives interact, they become neutral, and are shown as the number 0.

// SAMPLE SOLUTIONS
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Sample inputs and sample outputs

// ("--++--", "++--++") => "000000"; ("-+-+-+", "-+-+-+") => "-+-+-+"; "-++-", "-+-+") => ("-+00"; "--++", "++++") => "00++"

// Algorithm
// 1. Initiatlize finalString to ""
// 2. Iterate through s1
// a. if s1[i] === s2[i]
//a1. finalString += s1[i]
// b. else
// b1 finalString += "0"
// 3. Return finalString

function neutralise(s1, s2) {
  let finalString="";
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      finalString += s1[i];
    } else {
      finalString += "0"
    }
    
  }
  return finalString;
}

console.log(neutralise("--++--", "++--++"))
console.log(neutralise("-+-+-+", "-+-+-+"))

// other solutions
// function neutralise(s1, s2) {
//   let res = "";
//   for(let i = 0; i < s1.length; i++) {
//     res += s1[i] !== s2[i]? "0": s1[i];
//   }
//   return res;
// }

// function neutralise(s1, s2) {
//   let newS = "";
//   for (let i = 0; i < s1.length; i++) {
//     if (s1[i] == "+" && s2[i]== "+") {
//       newS += "+";
//     } else if (s1[i]== "-" && s2[i]== "-") {
//       newS += "-";
//     } else {
//       newS += "0";
//     }
//   }
//   return newS;
// }

// function neutralise(s1, s2) {
//   if (s1.length !== s2.length) {
//     throw new Error('strings lengths are not the same!');
//   }
  
//   if (!s1.match(/[+-]/gi) || !s2.match(/[+-]/gi)) {
//     throw new Error(`there're no + or - in the strings`);
//   }
  
//   if (s1.replace(/[+-]/gi, '') !== '' || s2.replace(/[+-]/gi, '') !== '') {
//     throw new Error(`there're symbols different from + and -`);
//   }
  
//   const arrOfResultInteractionsStrings = s1
//     .split('')
//     .map((symbol, index) => {
//       if (symbol === s2[index] && symbol === '+') {
//         return '+';
//       }

//       if (symbol === s2[index] && symbol === '-') {
//         return '-';
//       }

//       if (symbol !== s2[index]) {
//         return '0';
//       }
//     })
  
//   return arrOfResultInteractionsStrings.join('');
// }
