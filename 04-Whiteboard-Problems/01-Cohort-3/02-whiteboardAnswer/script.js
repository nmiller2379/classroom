// Algorithm
// 1. Initialize a variable count to 0
// 2. Iterate through the array
// 3. For each element in the array, iterate through the array again
// 4. If the absolute value of the difference between the two elements is equal to 3, increment count
// 5. Return count

function countPairs(arr) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (Math.abs(arr[i] - arr[j]) === 3) {
        count++;
      }
    }
  }
  return count;
}

console.log(countPairs([1, 7, 6, 9, 2, 12, 3, 15])); // 4

// Optimized solution
// Algorithm
// 1. Initialize a variable count to 0
// 2. Create a set from the array
// 3. Iterate through the array
// 4. If the set contains the current element + k, increment count
// 5. Return count

function countPairsOptimized(arr) {
  let count = 0;
  let set = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    if (set.has(arr[i] + 3)) {
      count++;
    }
  }
  return count;
}

console.log(countPairsOptimized([1, 7, 6, 9, 2, 12, 3, 15])); // 4

// Another optimized solution
// Algorithm
// 1. Initialize a variable count to 0
// 2. Initialize an empty object
// 3. Iterate through the array
// 4. Create property on object for each element in the array
// 5. Iterate over properties in the object
// 5. If the object contains the current element + k, increment count
// 6. Return count

function countPairsAnotherOptimized(arr) {
  let count = 0;
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = true;
  }
  console.log(obj)
  for (let prop in obj) {
    if (obj[Number(prop) + 3]) {
      count++;
    }
  }
  return count;
}

console.log(countPairsAnotherOptimized([1, 7, 6, 9, 2, 12, 3, 15])); // 4
