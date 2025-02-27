// Reference Data Type: Array

let fruits = ["Banana", "Apple", "Mango", "Orange", "Durian", "Grapes"]
console.log("Fruits:", fruits);

// Accessing element/s - Array Indexing
console.log("First Fruit:", fruits[0]);
console.log("Last Fruit:", fruits[fruits.length - 1]);

// Checking the length of array
console.log("Fruits Length:", fruits.length);

// Updating element
fruits[0] = 'Avocado';
console.log('Updated Fruits:', fruits);

// Adding elements
// .push() method - add element at the end of the array
fruits.push("Grapes")
console.log('Updated Fruits:', fruits);

// Delete element
// .pop() method - delete element at the end of the array
fruits.pop()
console.log('Updated Fruits:', fruits);

// Searching element
// .includes() method - checks if an element exists
// Accept: element
// Return: Either true or false
fruits.push("Banana")
console.log('Updated Fruits:', fruits);
console.log("Is Banana included?", fruits.includes("Banana"));

/*
  .forEach() method receives a function as an argument
  and executes it once for each array elements
*/
fruits.forEach(function (fruit) {
    console.log("Fruit:", fruit);
  });