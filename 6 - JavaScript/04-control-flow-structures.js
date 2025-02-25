// Control Flow Structures

// 1. Conditional Statements
//Allow us to execute different blocks of code based on a condition

// Conditionals: if, else if, else
let temperature = 25;

if (temperature < 0) {
  console.log("It's freezing.");
} else if (temperature >= 0 && temperature < 20) {
  console.log("it's cool outside"); //line of code
} else if (temperature >= 20 && temperature < 30) {
  console.log("It's warm outside");
} else {
  console.log("Its hot outside");
}

// 2. Looping Statements
// Repeatedly execute a block of code until a specific of condition is met
// DRY - Dont Repeat Yourself
// For loop
// Auto save off is important before executing this. PC may crash because of inifinite loop
/*
"components" of a for loop
1st: Variable Initialization
2nd: Condition Expression
3rd: Increment or Decrement shorthand -> i += 1; i ++
*/
//       1st    2nd   3rd
// for (i = 0; i < 3; i++) {
//   console.log("Hello, World!");
// }

for (i = 0; i < 3; i++) {
  console.log("For loop count:", i + 1);
}

/* same with
for (i = 1; i <= 3; i++) {
  console.log('For loop count:', i);
}
*/

// While loop
// Use: We don't know how many iteration
count = 1;
while (count <= 3) {
  console.log("While loop count:", count);
  count++;
}
