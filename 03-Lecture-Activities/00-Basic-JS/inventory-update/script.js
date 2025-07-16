// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

// Input: two 2d arrays, each internal array is an array of 2 items, a number and a string
// Output: one 2d array that updates the first array based on the inforation in the second array.

// Iterate through our flat arr2 and compare it with arr1
const curInv = [
  [21, "Bowling Ball"], // [88, "Bowling Ball"]
  [2, "Dirty Sock"],
  [1, "Hair Pin"], // [3, "Hair Pin"]
  [5, "Microphone"],
  // [3, "Half-Eaten Apple"]
  // [7, "Toothpaste"]
];

//   Return that looks like this: [
// [88, Bowling Ball],
// [2, "Dirty Sock"],
// [3, "Hair Pin"],
// [3, Half-Eaten Apple],
// [5, "Microphone"],
// [7, "Toothpaste"]
// ]

const newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

function updateInventory(arr1, arr2) {
  let matchFound = false;
  // Iterate through arr2
  for (let i = 0; i < arr2.length; i++) {
    //   For every item in arr2, we want to iterate through arr1 and check to see if it's in arr1 (direct comparison)
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i][1] === arr1[j][1]) {
        //   If match found add the numbers in [0] together and replace the value in arr1[0] with the total
        arr1[j][0] += arr2[i][0];
        matchFound = true;
      }
    }
    //   If we complete our iteration of arr1 and we have an item from arr2 that is not in arr1
    if (matchFound === false) {
      // Push that item into arr1
      arr1.push(arr2[i]);
    }
    matchFound = false;
  }
  // Sort arr1 into alphabetical order based on the string in [1]
  // Return arr1
  return arr1.sort((a, b) => {
    if (a[1] < b[1]) {
      return -1;
    }
    if (a[1] > b[1]) {
      return 1;
    }
    return 0;
  });
}

console.log(updateInventory(curInv, newInv));

const currentInv = [
  [2, "Shirts"],
  [5, "Golden Rings"],
  [4, "Turtle Doves"],
];

const inventoryUpdate = [
  [1, "Shirts"],
  [5, "Golden Rings"][(1, "Turtle Doves")],
];

const testArr = [...currentInv, ...inventoryUpdate]

console.log(testArr)

// Mills' solution ==========================================================

// function updateInventory(arr1, arr2) {
//   //join the two arrays with concat method
//   let bothArrs = arr1.concat(arr2)
//   //create an array with just the names by iterating through both arrays and returning the name only. ex: e[1] on ["21", "Bowling Ball"] will return "Bowling Ball" bc it is at the first index.
//   let namesOnly = bothArrs.map(e=>e[1])
//   console.log(namesOnly)

//   //sort the names alphabetically and then use the reduce method to create an empty object with the names and a value of 0, but do not duplicate the names if it is already in the object.
//   //if object does not have item name, then add it with a value of 0
//   let obj =namesOnly.sort().reduce((acc,curr)=>{
//     !acc[curr] ? acc[curr] = 0 : null;
//     return acc
//   },{});
//  console.log(obj)
//   //iterate through both arrays, for each item in the array, which is [21, "Bowling Ball"], update the value of that item in the obj by adding the value of the first item in the array
//   //item[1] will be the name and item[0] will be the value.
//   //Using bracket notation, we update the object
//   // obj["Bowling Ball"] += 21
//   bothArrs.forEach((item, i)=>{
//     console.log(`${i+1} Iteration: `, obj)
//     obj[item[1]]+= item[0]

//   })
//    console.log("Object Enteries Method: ", Object.entries(obj)) // the entries method on the object creates an array of arrays of the key value pairs.
//    //However, they're in the wrong order so we can map through the array and use the reverse method on each sub array to get the correct order.
//    let answer= Object.entries(obj).map((e) => e.reverse())

//   return answer;
// }

// Example inventory lists

console.log(updateInventory(curInv, newInv));

function updateInventory(arr1, arr2) {
  let bothArrs = arr1.concat(arr2);
  let namesOnly = bothArrs.map((e) => e[1]);

  let obj = namesOnly.sort().reduce((acc, curr) => {
    !acc[curr] ? (acc[curr] = 0) : null;
    return acc;
  }, {});

  bothArrs.forEach((item, i) => {
    obj[item[1]] += item[0];
  });

  let answer = Object.entries(obj).map((e) => e.reverse());

  return answer;
}

// Hashmap aggregation with sorting ==================================================================================
function updateInventory(arr1, arr2) {
  let inventoryObj = {};

  // Step 1: Add items from arr1 to the object
  arr1.forEach(([qty, name]) => {
    inventoryObj[name] = (inventoryObj[name] || 0) + qty;
  });

  // Step 2: Add items from arr2 to the object
  arr2.forEach(([qty, name]) => {
    inventoryObj[name] = (inventoryObj[name] || 0) + qty;
  });

  // Step 3: Convert the object to an array and sort alphabetically by item name
  return Object.entries(inventoryObj)
    .map(([name, qty]) => [qty, name]) // Convert [key, value] to [qty, name]
    .sort((a, b) => a[1].localeCompare(b[1])); // Sort alphabetically by name
}

// Functional appraoch ================================================================================================
function updateInventory(arr1, arr2) {
  const inventory = [...arr1, ...arr2].reduce((acc, [qty, name]) => {
    acc[name] = (acc[name] || 0) + qty;
    return acc;
  }, {});

  return Object.entries(inventory)
    .map(([name, qty]) => [qty, name])
    .sort((a, b) => a[1].localeCompare(b[1]));
}

// Map with direct aggregation
function updateInventory(arr1, arr2) {
  let inventoryMap = new Map();

  // Add items from arr1
  arr1.forEach(([qty, name]) => {
    inventoryMap.set(name, (inventoryMap.get(name) || 0) + qty);
  });

  // Add items from arr2
  arr2.forEach(([qty, name]) => {
    inventoryMap.set(name, (inventoryMap.get(name) || 0) + qty);
  });

  // Convert map to sorted array
  return Array.from(inventoryMap)
    .map(([name, qty]) => [qty, name])
    .sort((a, b) => a[1].localeCompare(b[1]));
}

// Log-linear time

// Pre-Sorting and Merging with two-pointer pattern ========================================================================

function updateInventory(arr1, arr2) {
  // Sort both arrays alphabetically
  arr1.sort((a, b) => a[1].localeCompare(b[1]));
  arr2.sort((a, b) => a[1].localeCompare(b[1]));

  let i = 0,
    j = 0;
  let result = [];

  while (i < arr1.length || j < arr2.length) {
    if (i < arr1.length && j < arr2.length) {
      if (arr1[i][1] === arr2[j][1]) {
        // Matching items, sum the quantities
        result.push([arr1[i][0] + arr2[j][0], arr1[i][1]]);
        i++;
        j++;
      } else if (arr1[i][1] < arr2[j][1]) {
        // Item from arr1 is smaller
        result.push(arr1[i++]);
      } else {
        // Item from arr2 is smaller
        result.push(arr2[j++]);
      }
    } else if (i < arr1.length) {
      result.push(arr1[i++]);
    } else {
      result.push(arr2[j++]);
    }
  }

  return result;
}

// Sort both arr1 and arr2 alphabetically by item name upfront 
// Use a two-pointer technique to iterate through both sorted arrays simultaneously.
// Merge and update quantities as you iterate.

// O(n+m)