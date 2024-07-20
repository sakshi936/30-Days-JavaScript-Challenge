// ____________________________________Template Literals________________________________

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the     console.

let name ='Sakshi';
let age = 20;
let string =`Person's Name: ${name} and Age is: ${age}`
console.log(string);


// Task 2: Create a multi-line string using template literals and log it to the console

let Mstring = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`

console.log(Mstring);

// ____________________________________Destructuring________________________________

//  Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.


let arr =[1,2,3,4];
let [first,second] =arr;

console.log(first);
console.log(second);

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.

let book={
    title: 'Think Straight',
    author: 'Darius foroux',
    year: '1998'
}

let {title,author} =book;

console.log(title);
console.log(author);

//  ____________________________________ Spread and Rest Operators ________________________________

//  Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

// let arr =['name',34,'dob',99];
let newArr=[...arr,'a','b','c','d']
console.log(newArr);

//  Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result

function sum(...nums)
{
    return nums.reduce((p,c)=> p+c , 0);
}


console.log(sum(1,2,3));


//  ____________________________________ Default Parameters ________________________________

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1.Log the result of calling this function with and without the second parameter.

function Sum2( a,b=1){
    return a+b;
}

console.log(`Sum with two values ${Sum2(2,9)}`);
console.log(`Sum with one value ${Sum2(19)}`);


//  ____________________________________ enhanced object literals ________________________________

// task 8: use enhanced object literals to create an object with methods and properties, and log the object to the console.

let person={
   name: 'Sakshi',
   age: 20,
   greet: function(){ console.log(`Hi... I'm ${this.name} and i'm ${this.age} year old`);}
}

console.log(person);
person.greet();


// task 9: create an object with computed property names based on variables and log the object to the console.

let propname1='Fname';
let propname2='lastname';

let person2={
    [propname1]: 'Jack',
    [propname2]: 'marse',
    age: 34
}

console.log(person2);
