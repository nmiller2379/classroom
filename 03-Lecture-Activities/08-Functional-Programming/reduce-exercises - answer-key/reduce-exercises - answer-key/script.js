// 1. Given an array of numbers, write a function that returns the average of the values in the array. For example, [5, 7, 5, 7, 6] => 6
const numsArray = [5, 7, 5, 7, 6];

function averageNums(arr) {
  return (
    arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0) /
    arr.length
  );
}

console.log(averageNums(numsArray))

// 2. Given an array of numbers return a string of one number. For example, [1, 2, 3] => "123". For the purpose of this exercise don't use the .join() method.

function stringConcat(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    ""
  );
}


const myString = stringConcat([1, 2, 3]);
console.log(myString)


// 3. Given an array of wishlist objects with title and price properties, write a function that returns the total cost of purchasing all the items. For example: [{ title: "Tesla Model S", price: 90000 }, { title: "diamond ring", price: 45000 }, { title: "Purebred cat", price: 1000 },{ title: "77-inch HDR TV", price: 2000 }, { title: "Another Tesla Model S", price: 90000 },] => 228000. 
const wishlist = [
  { title: "Tesla Model S", price: 90000 },
  { title: "diamond ring", price: 45000 },
  { title: "Purebred cat", price: 1000 },
  { title: "77-inch HDR TV", price: 2000 },
  { title: "Another Tesla Model S", price: 90000 },
];

function shoppingSpree(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue.price,
    0
  );
}

console.log(shoppingSpree(wishlist));



// 4.Given a multidimensional array, write a function that returns a flattened array. For example: [["1", "2", "3"],[true],[4, 5, 6]] => ["1", "2", "3", true, 4, 5, 6]   
const arrays = [
  ["1", "2", "3"],
  [true],
  [4, 5, 6]
]

function flatten(arr) {
  return arr.reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    []
  );
}

console.log(flatten(arrays));

// 5. Given an array of numbers, some of which are duplicative, write a function that removes the duplicated numbers and returns a new array containing only those numbers, which were not duplicated in the passed array. For example: [2, 5, 7, 5, 12, 9, 7, 5, 4, 3, 5, 2, 4, 15] => [2, 5, 7, 12, 9, 4, 3, 15]

function removeDuplicates(arr) {
  arr.reduce((accumulator, currentValue) => {
    if (accumulator.indexOf(currentValue) === -1) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
}