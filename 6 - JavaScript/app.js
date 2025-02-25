// Functions
// Resubale block of code that can be executed whenver needed.

// 1. Function Decleration
// Syntax is
function greet () {
  console.log("Hello, welcome to the World of Functions");
  console.log("Let's go");
}

// 2. Calling the function
//parameter = placeholder
//arguments = values pasased to a function's parameters
greet ();

// for (i = 0; i <4; i ++) {
//   console.log(greet);
// }

function sum (num1, num2) {
  return (num1 + num2);
};

console.log("Sum:", sum (1,2)); // (1,2) are called with arguments
console.log("Sum:", sum (3,4));
console.log("Sum:", sum (5,6));