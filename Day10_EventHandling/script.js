
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

const div = document.createElement("div");
div.innerHTML= "Mouseover on this div ";
div.style.padding="30px";
div.style.textAlign= "center";
div.style.backgroundColor="";
document.body.append(div);

div.addEventListener("mouseover", (e)=>{
        e.target.style.backgroundColor="purple";
}) 



// Task 4: Add a mouseout event listener to an element that resets its background color.

div.addEventListener("mouseout", (e)=>{
    e.target.style.backgroundColor="";
}) 

//_________________________________ Keyboard Events_________________________________________

//Task 5: Add a keydown event listener to an input field that logs the key pressed to the console.
const input = document.createElement("input");
input.setAttribute("type","text");
input.setAttribute("placeholder","Enter text");
document.body.append(input);
input.addEventListener("keydown",(e)=>{
    console.log(e.key);
})

//Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
input.addEventListener("keyup",(e)=>{
    console.log(e.target.value);
})


//_________________________________ Form Events_________________________________________

// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(form);

  formData.forEach((data) => {
    console.log(data);
  });
});


//Task 8: Add a change event listener to a select dropdown that displays the selected value in a paragraph.

const select = document.querySelector("#dropdown-select");
const option= document.querySelector("#option");

select.addEventListener("change",(e)=>{
    option.textContent= e.target.value;
})
//_________________________________ Event Delegation_________________________________________

//Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation. 
const ul= document.getElementById("ul");
// ul.addEventListener("click",(e)=>{
//     if(e.target && e.target.nodeName=="LI"){
//         console.log(`Clicked item: ${e.target.textContent}`);
//     }
// })

//Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.

const buttonClick = document.getElementById("addChild");

const addChild= ()=>{
    const newchild =document.createElement("li");
    newchild.className= "child";
    newchild.textContent=`Item ${ul.childElementCount+1}`;
  
    ul.appendChild(newchild); 
}

buttonClick.addEventListener("click", addChild);


ul.addEventListener("click",(e)=>{
    if(e.target && e.target.nodeName=="LI"){
        if(e.target.className=="child")
             console.log(`Clicked item is dynamic child: ${e.target.textContent}`);
        else
             console.log(`Clicked item: ${e.target.textContent}`);
    }
    
})
