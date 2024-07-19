//_______________________Object Creation and Access_____________________________

// Task 1 : create an object representing a book with properties like title, author and year and log the object in console.

let book={
    title: 'Think Straight',
    author: 'Darius foroux',
    year: '1998'
}

console.log(book);

// Task 2: Access and log the titile and author property of book object

console.log(`Book titile: ${book.title}`);
console.log(`Book Author: ${book['author']}`);

//_______________________Object Methods_____________________________

// Task 3 : add method to book object that return a string with the book titile and author, and log the object in console.


book["details"] = function (){   //adding a new method details
        return `book title: ${this.title} Book Author: ${this.author}`
    }

console.log(`------- function calling -------`);
console.log(book.details());

// Task 4 : add method to book object that take a parameter(year) and updates the book year property, and log the updated object in console.

book.update= function(year){
        this.year = year;
    }


book.update('1990');
console.log(`------ Book obj After updating year ------`);
console.log(book);

//_______________________Nested Objects_____________________________

//  Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console

let library ={
        name: 'Central library',
        books: [
                {title: 'Think Straight1', author: 'Darius foroux',year: '1998'},
                {title: 'Think Straight2', author: 'Darius foroux',year: '1998'},
                {title: 'Think Straight3', author: 'Darius foroux',year: '1998'},
                {title: 'Think Straight4', author: 'Darius foroux',year: '1998'},
                {title: 'Think Straight5', author: 'Darius foroux',year: '1998'}
            ]
}

console.log(`----------------- Library object -------------`);
console.log(library);


// * Task 6: Access and log the name of the library and the titles of all the books in the library

console.log(`Library name ${library.name}`);
console.log(`title's of all books in library`);
library.books.forEach((book)=>{
    console.log(book.title);
})

// _______________________The this Keyword_____________________________
// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method

book.details= function(){
    return `Title: ${this.title} Author: ${this.author} Year: ${this.year}` //override the details function
}

console.log(book.details());

// _______________________Object Iteration_____________________________

//  Task 8: Use a for in loop to iterate over the properties of the book object and log each property and its value
console.log('Accessing book properties by for in loop');

for(key in book){
    console.log(`${key}:${book[key]}`);
}

//  Task 9: Use object.keys and object values methods to log all the keys and values of the book object

console.log(`Keys of book ${Object.keys(book)}`); // returns all keys in array
console.log(`Values of book ${Object.values(book)}`);