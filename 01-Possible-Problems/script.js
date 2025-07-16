// 1. PILLARS
// ========================================================================================
// There are pillars near the road. The distance between the pillars is the same and the width of the pillars is the same. Your function accepts three arguments:

// number of pillars (≥ 1);
// distance between pillars (10 - 30 meters);
// width of the pillar (10 - 50 centimeters).
// Calculate the distance between the first and the last pillar in centimeters (without the width of the first and last pillar). There are 100 centimeters in a meter.

// SAMPLE SOLUTIONS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Sample inputs and sample outputs: (1, 10, 10) => 0; (2, 20, 25) => 2000;
// (11, 15, 30) => 15270

// Eleven pillars have 10 gaps (11 - 1) of 15 meters each, which is 1500 centimeters each (15 * 100). The total distance of the gaps is 1500 * 10 = 15000 centimeters.
// The total width of the middle pillars (excluding the first and last) is 30 * 9 = 270 centimeters (9 middle pillars since 11 - 2).
// The total distance is 15000 + 270 = 15270 centimeters.

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

// 2. INVERT VALUES ======================================================================================================
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives. Do not mutate the original set of numbers.

// Input an array of numbers, which may be empty but will otherwise be numbers
// Output an array of numbers with reversed sign

// Examples

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

// Algorithm
// Mulitply each number othe than 0 by -1 and return the result
// If its 0 just return 0

// A negative times a negative is a positive so that iwll make the negative numbers positive and a negative time a negative is a positive so that will make the negative numbers positive.

function invert(array) {
  return array.map((e) => (e === 0 ? 0 : e * -1));
}

console.log(invert([1, 2, 3, 4, 5])); //[-1, -2, -3, -4, -5]
console.log(invert([1, -2, 3, -4, 5])); //[-1, 2, -3, 4, -5]
console.log(invert([]));
console.log(invert([0]));


// 5. CONVERT STRINGS TO NUMBERS ===================================================================================================

// Some really funny web dev gave you a sequence of numbers from his API response as a sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

// Input: An array of strings composed of digits and floats
// Output: An array of numbers and floats derived from the strings

// Examples
// ["1", "2", "3"] => [1, 2, 3]
// ["1.1","2.2","3.3"] => [1.1,2.2,3.3]

//Algorithm
// 1. Initialize numArray to []
// 2. Iterate through stringArray
// 2a. If element of stringArray includes .
// 2aa. parseFloat element and push it into numArray
// 2b. Other wiste parseInt and push it into numArray
// 3. Return numArray

function toNumberArray(stringarray) {
  const numsArray = [];
  for (const element of stringarray) {
    if (element.includes(".")) {
      numsArray.push(parseFloat(element));
    } else {
      numsArray.push(parseInt(element));
    }
  }
  return numsArray;
}

console.log(toNumberArray(["1", "2", "3"]));
console.log(toNumberArray(["1.1", "2.2", "3.3"]));
console.log(toNumberArray(["1", "2.2", "3"]));

// Other solutions
// const toNumberArray = stringarray => stringarray.map(Number);

// function toNumberArray(stringarray){
//   return stringarray.map(Number);
// }

// function toNumberArray(stringarray)
// {
//   return stringarray.map(parseFloat);
// }

console.clear();

// 6. FRIEND OR FOE
// Write a function that takes a list of strings and returns a list with only your friends' names in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

function friend(friends){
 return friends.filter(e => e.length === 4)
}

// 7. FRIENDS

// Andrzej was given a task:

// There are n jars with pills. In every jar there is a different type of pill and the amount of pills in each jar is infinite. One type of pill makes a person glow about 30 minutes after taking and none of the other types has any effect.

// His job is to determine, in which jar are the pills that make a person glow. But there is one catch, he only has 35 minutes to do so.(so he can't take a pill, wait for the results and then take another one, because he wouldn't be able to see the results) Fortunetely, he can take any number of friends he needs with him. On completing the task Andrzej receives one million dollars. You know that Andrzej is very honest, so he will split the money equally with his friends.

// Your job is to determine how many friends does Andrzej need to complete the task.(He also wants to make the highest amount of money.)

// For example for n = 2

// The answer is 0 because he doesn't need any friends, he just needs to take a pill from the first jar and wait for the effects.

// For another example for n = 4

// The answer is 1 because having pills A B C D Andrzej can take pills A B and the friend can take pills B C

// Note: Andrzej is not able to accurately measure time during the task.

// With 5 jars Andrzej takes A B C friend 1 would take B C friend 2 would take C and D

console.log(Math.log(4))

function getBaseLog(x, y) {
  return Math.log(y) / Math.log(x);
}

console.log(getBaseLog(2, 6))


function friends(n){
  //Your code goes here
}


console.clear()

// 6. HOW MANY TIMES DID A TEAM FROM A GIVEN COUNTRY WIN?

// Create a function that takes two arguments:

// An array of objects which feature the season, the team and the country of the Champions League winner.

// Country (as a string, for example, 'Portugal')

// You function should then return the number which represents the number of times a team from a given country has won. Return 0 if there have been no wins.

// For example if the input array is as follows:


