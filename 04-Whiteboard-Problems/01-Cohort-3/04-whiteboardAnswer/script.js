// SAMPLE SOLUTIONS++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Input: Dads Age (a number), Sons Age (a number)
// Output: A number representing the number of years at the point the father is twice the age of the son.

// Sample inputs and outputs (36, 7) => 22; (55, 30) => 5;

function twiceAsOld(dadYearsOld, sonYearsOld) {
  // 1. Initialize sonDoubled to sonYearsOld * 2
  const sonDoubled = sonYearsOld * 2;
  // 2. Subtract sonDoubled from dadYearsOld
  // 3. Return absolute value from step 2.
  return Math.abs(sonDoubled - dadYearsOld);
}

// Another solution
const twiceAsOld = (d, s) => Math.abs(d - 2 * s);

// Another solution
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return Math.abs(dadYearsOld - sonYearsOld * 2);
}

console.log(twiceAsOld(36, 7));
console.log(twiceAsOld(22, 1));
console.log(twiceAsOld(55, 30));
