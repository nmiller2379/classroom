// Problem 1: Calculate Weighted Scores
// Objective: Use the map method to create a function that takes an array of scores and a separate array of weights (both of the same length). Return a new array where each score is multiplied by its corresponding weight.
// Sample Input:
// Scores: [80, 90, 78, 88]
// Weights: [0.2, 0.3, 0.25, 0.25]
// Expected Output: [16, 27, 19.5, 22]

function weightedAverage(scores, weights) {
    return scores.map((score, index) => score * weights[index])
}
console.log(weightedAverage([80, 90, 78, 88], [0.2, 0.3, 0.25, 0.25]))

// Problem 2: Filter and Sort
// Objective: Write a function using the filter and sort methods that takes an array of numbers, filters out numbers less than 50, and then sorts the remaining numbers in descending order.
// Sample Input: [45, 60, 33, 80, 90, 10, 55]
// Expected Output: [90, 80, 60, 55]

function numsOver50(arr) {
    return arr.filter(num => num > 49).sort((a, b) => b - a)
}

console.log(numsOver50([45, 60, 33, 80, 90, 10, 55]))

// Problem 3: Sum of Nums of Even Indexes
// Objective: Use the reduce method to write a function that takes an array of numbers and returns the sum of the elements that have even indices. The index parameter in the reducer function will be used to check if the current element’s index is even.
// Sample Input: [10, 20, 30, 40, 50]
// Expected Output: 90 (10 from index 0, 30 from index 2, 50 from index 4)

function evenIndexSum(arr) {
    return arr.reduce((acc, curr, index) => {
        if (index % 2 === 0) {
            return acc + curr
        } else {
            return acc
        }
    }, 0)
}

console.log(evenIndexSum([10, 20, 30, 40, 50]))