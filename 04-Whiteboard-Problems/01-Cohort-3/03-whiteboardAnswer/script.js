// Input: An array of numbers
// Output: An array of numbers that are multiples of their index value

// Some cases:
// [22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

// [68, -1, 1, -7, 10, 10] => [-1, 10]

// [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]

function multiples(arr) {
    //1. Initialize array to [] 
    let array = [];
  // 2  Iterate through arr
    for (let i = 0; i < arr.length; i++) {
      // a. check if element is evenly divisible by index
      if (arr[i] % i === 0) {
      //   b. If it is push element into array  
        array.push(arr[i]);
      }
    }
  //   3. Return array
    return array
  }
  
  console.log(multiples([22, -6, 32, 82, 9, 25]))
  console.log(multiples([68, -1, 1, -7, 10, 10]))
  console.log(multiples([-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68]))