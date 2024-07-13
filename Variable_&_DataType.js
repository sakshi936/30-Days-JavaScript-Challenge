// declare variables with let and var assign let-> string, and var->number and log the values to console.

let a='name';
var b=6;
console.log(a); //name
console.log(b); // 6

// declare const variable assign with boolean value and log to console

const val = true;
console.log(val); //true

// create variables with different datatypes (number,string,boolean,object,array) and log the values on console with typeof values.

// let n= Number(8);
let n=8;
// let s= String(5);
let s= '67';
// let bool= Boolean(1);
let bool = true;
// let obj =Object({2:'4'});
let obj ={ 1:'a',
    2:'b'
}

let array = [1,2,3,4,5];

console.log(`${typeof(n)} + ${n}`);   // number+8
console.log(`${typeof(s)} + ${s}`);   //string+ 67
console.log(`${typeof(bool)} + ${bool}`);   // boolean + true
console.log(`${typeof(obj)} + ${obj}`);  // object + [object Object]
console.log(`${typeof(array)} + ${array}`);  //object + 1,2,3,4,5


// Reinitialize the let declare variable 
// let a='name';

console.log(`before reinitialize : ${a} + typeof: ${typeof a}`); // name, string
a=46;
console.log(`after reinitialize : ${a} + typeof: ${typeof a}`); // 46,number
// Reinitialize the const declare variable 
//const val = true;

console.log(`before reinitialize : ${val} + typeof: ${typeof val}`);// true,boolean
val =56;
console.log(`after reinitialize : ${val} + typeof: ${typeof val}`);// TypeError: Assignment to constant variable.
