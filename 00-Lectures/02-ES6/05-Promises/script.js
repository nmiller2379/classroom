const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation simulation
  setTimeout(() => {
    const randomNumber = Math.random();
    if (randomNumber > 0.5) {
      resolve("Success: " + randomNumber);
    } else {
      reject("Error: " + randomNumber);
    }
  }, 1000); // Simulating an asynchronous operation
});

console.log(myPromise)

console.log("I'm on line 15. I come before the promise")
myPromise
  .then((result) => {
    console.log(result); // Output if resolved
  })
  .catch((error) => {
    console.error(error); // Output if rejected
  });
console.log("I'm on line 23. I come after the promise.")



const fetchUserData = () => {
  return new Promise((resolve, reject) => {
    // Simulating fetching user data asynchronously
    setTimeout(() => {
      const userData = { id: 1, username: "john_doe" };
      resolve(userData);
    }, 1000);
  });
};

const fetchPosts = (userId) => {
  return new Promise((resolve, reject) => {
    // Simulating fetching posts asynchronously
    setTimeout(() => {
      const posts = [
        { id: 1, title: "Post 1", userId: userId },
        { id: 2, title: "Post 2", userId: userId },
      ];
      resolve(posts);
    }, 1000);
  });
};

fetchUserData()
  .then((user) => fetchPosts(user.id))
  .then((posts) => {
    console.log(posts); // Output array of posts
  })
  .catch((error) => {
    console.error(error); // Output if any error occurs
  });
