// UNDERSTANDING SIMPLE PROMISES IN JAVASCRIPT
// Santiago Garcia Arango

const getSomething = () => {
  return new Promise((resolve, reject) => {
    // Fetch something (that could be "ok" or "error")
    const booleanToTest = true; // true/false to try it out
    if (booleanToTest) {
      resolve("Amazing data loaded");
    } else {
      reject("Some error in the process");
    }
  });
};

// First way of calling the promise (with the error as 2nd parameter of then())
// Calling the promise and applying "then" for (<resolve>, <reject>)
getSomething().then(
  (data) => {
    console.log(data);
  },
  (err) => {
    console.log(err);
  }
);

// Second way of calling the promise (with the error in the "catch")
getSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
