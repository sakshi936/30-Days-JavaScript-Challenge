// ****************************************** Task 1 *************************************************
// WA Function to check if num is odd or even

function checkNum(n){
    (n%2==0)? console.log('even'): console.log('odd');
}

checkNum(341); //odd

// ****************************************** Task 2 *************************************************
//  function to calculate square of a number
function Square(n){
    return(n**2);
}

let sq=Square(5);
console.log(sq); //25

// ****************************************** Task 3 *************************************************
// find the max of two numbers in function and return result 

let max = (a,b)=>{
    return a>b?a:b;
}
console.log( max(34,57)); //57

// ****************************************** Task 4 *************************************************
// cancatinat two string and return result 

let Concat=(str1,str2)=>{
    return str1.concat(' ',str2);
}

let concated =Concat('hello','JavaScript');
console.log(concated);  //hello JavaScript

// ****************************************** Task 5 *************************************************
// sum of two numbers and return result

let sum =(a,b)=>{ return a+b }
console.log(sum(3,8)); //11

// ****************************************** Task 6 *************************************************
//  chck string contains a specific character

let checkChar =(str)=>{  
    if((str.search('l')) >0) 
        return true;
    else 
    return false;
}
console.log(checkChar('JavaScript')); //false

// ****************************************** Task 7 *************************************************
// function to take two parameter and return the product of them and make second para default 


let prd =(a,b=1)=>{ return a*b }
console.log(prd(3,8)); //24
console.log(prd(3)); //3

// ****************************************** Task 8 *************************************************
// function to take two parameter (name and age ) and return the greeting msg and make second para default 


let greeting =(name,age=18)=>{ return `Welcome ${name} and your age is ${age}` }
console.log(greeting('Krishna',20)); //Welcome Krishna and your age is 20
console.log(greeting('Krishna'));   //Welcome Krishna and your age is 18


// ****************************************** Task 9 *************************************************
//  higher order function that take a fun and a value as arguments ans calls the fun that many time(value);

function HigherOrderFun1(fn,val){
    for(let i=1;i<=val;i++){
        fn(i);
    }
}

function fun(i){
    console.log(`inside fun for ${i} time`);
}

HigherOrderFun1(fun,5); 


// ****************************************** Task 10 *************************************************
// HOF that take two funtion arguments and a value, apply first fun on value and apply second fun on result

function HigherOrderFun2(fun1,fun2,value){
    let val2 =fun1(value);
    return  fun2(val2);
}

function Increamemt(v){
    return v+1;
}

function Decreament(v){
    return v-2;
}

console.log(HigherOrderFun2(Increamemt,Decreament,5)); // 4