// Task 1: Create a Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve("Success: " + randomNumber);
    } else {
      reject("Error: " + randomNumber);
    }
  }, 2000); // Simulating an asynchronous operation with a delay of 2 seconds
});

// Task 2: Handle Promise
myPromise
  .then((result) => {
    console.log(result); // Output if resolved
  })
// Task 3: Handle Error
  .catch((error) => {
    console.error(error); // Output if rejected
  });



// Task 4: Chaining Promises 
const anotherPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Another Promise Resolved');
  }, 1500); // Simulating another asynchronous operation with a delay of 1.5 seconds
});

// Chaining promises
myPromise
  .then((result) => {
    console.log(result); // Output if resolved
    return anotherPromise; // Return anotherPromise to chain it
  })
  .then((result) => {
    console.log(result); // Output if resolved
  })
  .catch((error) => {
    console.error(error); // Output if any error occurs
  });

// Real world example using fetch
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
}

// Usage
fetchData("https://fakestoreapi.com/products")
  .then((data) => {
    console.log("Data fetched successfully:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });


