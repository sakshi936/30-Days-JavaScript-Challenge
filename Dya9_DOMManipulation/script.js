// ___________________Selecting and Manipulating Elements____________________

// Task 1: Select an HTML element by its ID and change its text content.

const h1 = document.getElementById("h1");
h1.textContent ="30 Days of JavaScript Challange";

//  Task 2: Select an HTML element by its class and change its background color

h1.style.backgroundColor= "purple";
h1.style.textAlign="center";

//_______________________ Creating and Appending Elements ___________________________
//  Task 3: Create a new div element with some text content and append it to the body.

const div = document.createElement("div");
const text = document.createTextNode("Creating and Appending Elements in div")
div.appendChild(text);
document.body.append(div);

//  Task 4: Create a new li element and add it to an existing ul list.

const ul = document.querySelector("ul");
const ListOfDays =["Day 1: Variables & DataTypes", "Day 2: Operators", "Day 3: Control Structure", "Day 4: Loops", "Day 5: Function" ," Day 6: Arrays" , "Day 7: Objects", "Day 8: ES6 features", "Day 9: DOM Manipulation", "Day 10: Upcomming..."]

ListOfDays.forEach(day => {
    const newli = document.createElement("li");
    newli.textContent= day;
    ul.append(newli);
});


// ____________________________ Removing Elements____________________________

// Task 5: Select an HTML element and remove it from the DOM.

const p= document.querySelector("#p1");
p.remove();

//  Task 6: Remove the last child of a specific HTML element.
const List = document.querySelector("#ul1");
List.lastElementChild.remove();

//________________________ Modifying Attributes and Classes_________________________

//  Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag)
const a = document.querySelector("a");
a.href= "https://courses.chaicode.com/learn/batch/30-days-of-Javascript-challenge";

//  Task 8: Add and remove a CSS class to/from an HTML element.


const section = document.querySelector("section");
section.classList.add("section");
section.classList.add("section_2");

section.classList.remove("section_2");

// ___________________________Event Handling______________________________________

// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
const button = document.querySelector("button");
button.addEventListener('click', ChangeText);

function ChangeText(){
    const p = document.getElementById("Textpara");
    p.textContent="It's Day 9 of 30 Days JS Challange"
}
//  Task 10: Add a mouseover event listener to an element that changes its border color

button.addEventListener('mouseover', (event) => {
   
    button.style.border = "2px solid black";

  });
