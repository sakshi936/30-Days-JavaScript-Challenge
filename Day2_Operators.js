// ****************************************** Task 1-4 *************************************************
// WAP to find sub,diifrence,product and division of two numbers and  log the output in console.

let a= 4;
let b=5;

console.log(`${a} + ${b} = ${a+b}`);
console.log(`${a} - ${b} = ${a-b}`);
console.log(`${a} * ${b} = ${a*b}`);
console.log(`${a} / ${b} = ${a/b}`);

// ****************************************** Task 5 *************************************************
// WAP to find the reminder when a num is divided by other num.

let n1=34;
let n2=26;

console.log(`${n1} % ${n2} = ${n1%n2}`);

//  +=, -= operator to add and substract a num from other num.
// ****************************************** Task 6-7 *************************************************

a+=9;
b-=3;

console.log(`a and b after operation a:${a} b:${b}`);


//  use '<', '>', '<=' ,'=>', '==', '===, 
// Coercion(implicit conversion of one type of data type to another) as 9 is implicitly converted string to num.

// ****************************************** Task 8 *************************************************
if(8<'9') // true
console.log(true);
else 
console.log(false);


if(8>'9') //false
console.log(true);
else 
console.log(false);


// ****************************************** Task 9 *************************************************
if(8<='9') //true
console.log(true);
else 
console.log(false);


if(8>='9') //false
console.log(true);
else 
console.log(false);

// ****************************************** Task 10 *************************************************
if(8=='8') //true 
console.log(true);
else 
console.log(false);

if(8==='8') //false
console.log(true);
else 
console.log(false);



// ****************************************** Task 11 *************************************************
if((a>b) &&(n2<n1) ){ // true
    console.log('&&-both condition is true ');
}
else
console.log('&&-both or any one of the conditions is false ');

// ****************************************** Task 12 *************************************************
if((a>b)||(n2<n1) ){ //true
    console.log('|| -both or any one of condition is true ');
}
else
console.log('||-both conditions are false ');

// ****************************************** Task 13 *************************************************
if(!n1 ){ //false
    console.log(`given n1 value is false so result is !false ${!n1}`);
}
else
console.log(`given n1 value is true so result is !true ${!n1}`);


// ****************************************** Task 14 *************************************************
let n=-4;
(n >0)?console.log('positive'):console.log('negative'); //negative