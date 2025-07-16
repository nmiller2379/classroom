// Write a function called `sum` that takes two arguments: an array `arr` and a number `n`. It should return the sum of the first `n` elements of the array.

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  }
  return sum(arr, n - 1) + arr[n - 1];
}

console.log(sum([1, 2, 3, 4, 5], 3)); // => 6
console.log(sum([10, 20, 30], 0)); // => 0
console.log(sum([10, 20, 30], 1)); // => 10

// Write a function called `repeatString` that takes two arguments: a string `str` and a number `count`. It should return a string consisting of `str` repeated `count` times.

function repeatString(str, count) {
  if (count <= 0) {
    return "";
  }
  return repeatString(str, count - 1) + str;
}

console.log(repeatString("abc", 3)); // => "abcabcabc"
console.log(repeatString("hi", 0)); // => ""

// Write a function called `countdown` that takes a number `n` and returns an array of integers counting down from `n` to 1. If `n` is less than 1, return an empty array.

function countdown(n) {
  if (n <= 1) {
    return [];
  }
  return [n, ...countdown(n - 1)];
}

// Another solution ============================
// function countdown(n) {
//   const result = [];

//   function helper(x) {
//     if (x < 1) return;
//     result.push(x);
//     helper(x - 1);
//   }

//   helper(n);
//   return result;
// }

console.log(countdown(5)); // => [5, 4, 3, 2, 1]
console.log(countdown(0)); // => []

// Write a function called `countEvens` that takes an array `arr` and returns the number of even numbers in the array.

function countEvens(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const isEven = arr[0] % 2 === 0 ? 1 : 0;
  return isEven + countEvens(arr.slice(1));
}

console.log(countEvens([1, 2, 3, 4, 5, 6])); // => 3
console.log(countEvens([1, 3, 5])); // => 0

// Write a function called `sumDigits` that takes a non-negative integer `n` and returns the sum of its digits.

function sumDigits(n) {
  const str = n.toString();

  if (str.length === 1) {
    return Number(str);
  }

  return Number(str[0]) + sumDigits(Number(str.slice(1)));
}

// Another solution =====================
// function sumDigits(n) {
//   if (n < 10) {
//     return n;
//   }
//   return (n % 10) + sumDigits(Math.floor(n / 10));
// }

console.log(sumDigits(123)); // => 6
console.log(sumDigits(0)); // => 0
console.log(sumDigits(45));
