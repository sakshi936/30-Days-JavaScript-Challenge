
//_________________________________ Basic Event Handling_________________________________________

//Task 1: Add a click event listener to a button that changes the text content of a paragraph.

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click", (event)=>{

    document.getElementById("para1").textContent="Day 10: Event Handling";
    event.target.style.backgroundColor="blue";
    event.target.textContent= "Changed";
}
)

//Task 2: Add a double-click event listener to an image that toggles its visibility.

const btn2= document.getElementById("btn2");
btn2.addEventListener("dblclick",ondblclick);

let visible =false;
ondblclick= ()=>{

    const img = document.querySelector("#toogleImg");
    const h1 = document.querySelector("#toogleImgh1");

    if(visible){
        img.style.display="none";
        visible=false;
        h1.textContent="Image Visibilty: None"
        
    }
    else{
        
        img.style.display="flex";
        visible =true;
         h1.textContent="Image Visibilty: Visible"
    }
   

}

//_________________________________ Mouse Events_________________________________________

//Task 3: Add a mouseover event listener to an element that changes its background color. 
// Task 4: Add a mouseout event listener to an element that resets its background color.

//_________________________________ Keyboard Events_________________________________________

//Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.

//Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.

//_________________________________ Form Events_________________________________________

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

//Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

//_________________________________ Event Delegation_________________________________________

//Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation. 
//Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
