// UNDERSTANDING SIMPLE CALLBACKS IN JAVASCRIPT
// Santiago Garcia Arango

// Main function
function sum(num1, num2) {
  return num1 + num2;
}

// Simple callback structure for a general function
function calc(num1, num2, callback) {
  return callback(num1, num2);
}

// Function to understand callbacks with dates and other printDate function
function myDate(callback) {
  console.log("FIRST LOG: ", new Date());
  setTimeout(function () {
    let date = new Date();
    callback(date);
  }, 3000);
}

// Simple function to apply as a callback in <myDate>
function printDate(dateNow) {
  console.log("PRINT DATE FUNCTION: ", dateNow);
}

// TESTS
console.log(calc(8, 4, sum));
myDate(printDate);
