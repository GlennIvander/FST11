console.log("Hello, World!");

// This is a single-line comment

/*
This
is a 
multi-line
comment.
*/

/*
  camelCasing = Capitalize the first letter of each word except word
  let = mutable/changeable - block scope
  const = immutable/unchangeable - global scope
  var = mutable/changeable - global scope
*/

let firstName = "John";
console.log("Firstname:", firstName);
firstName = "Jane";
console.log("Firstname:", firstName);

const birthday = "2000-01-01";
console.log("Birthday:", birthday);
// birthday = "2001-01-01"; This will not work

var lastName = "Doe";
console.log("Lastname:", lastName);
lastName = "Smith";
console.log("Lastname:", lastName);