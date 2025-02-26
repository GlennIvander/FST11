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

/*
  .forEach() method receives a function as an argument
  and executes it once for each array elements
*/
fruits.forEach(function (fruit) {
  console.log("Fruit:", fruit);
});