// Document Object Model (DOM)
// allow us to JavaScript to change the style, content, structure of our website

// Document Object Model (DOM)
// allow us to JavaScript to change the style, content, structure of our website
// querySelector()
// Pass: #id, .classname, tagname
// Return: first element
const elementWithID = document.querySelector("#first-div");
console.log(elementWithID);
elementWithID.textContent = "gLennski bente ot$o"
elementWithID.style.color = 'green';
elementWithID.style.fontFamily = 'Impact';

const elementWithClass = document.querySelector(".sample-div");
console.log(elementWithClass);

// .querySelectorAll()
// Pass: #id, .classname, tagname
const elementsWithClass = document.querySelectorAll(".sample-div")
console.log(elementsWithClass);
elementsWithClass[1].textContent = "Div 2";
elementsWithClass[1].style.color = "#faf0ca";
elementsWithClass[1].style.backgroundColor = "#0d3b66";

const headings = document.querySelectorAll("h3")
console.log(headings);
headings.forEach(function (heading) {
  heading.style.color = "#f4f1de";
  heading.style.backgroundColor = "#e07a5f";
  heading.style.textAlign = "center";
})

// Updating Element Attributes
const dayNightIcon = document.querySelector('#day-night-icon');
dayNightIcon.setAttribute(
  'src',
  'https://cdn-icons-png.flaticon.com/512/3688/3688129.png'
);

//Appending new element
const parentElement = document.querySelector("#parent-element");
const createdElement = document.createElement('div');
createdElement.textContent = "Child Element";
parentElement.appendChild(createdElement);

// Remove an element
const elementToBeRemoved = document.querySelector("#element-to-be-removed")
elementToBeRemoved.remove();

// Adding Event Listeners
const darkModeButton = document.querySelector('#dark-mode-btn');
darkModeButton.textContent = "Mode";
darkModeButton.addEventListener('click', function () {
  const pageContainer = document.querySelector('#page-container');
  pageContainer.style.backgroundColor = 'black';
  pageContainer.style.color = 'White';

  const pageModeText = document.querySelector('#page-mode-text');
  pageModeText.textContent = 'Dark Mode';
});