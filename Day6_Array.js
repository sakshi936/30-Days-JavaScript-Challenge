
//_______________________Array Creation and Access_____________________________

// Task 1 : create array of numbers from 1 to 10 and log the array in console 

let arr=[1,2,3,4,5,6,7,8,9,10];
console.log(`Array of numbers ${arr}`);

// Task 1 : Access the first and the last element of array and log the array in console 
console.log(`First element of the array ${arr[0]} `);
console.log(`Last element of the array ${arr[arr.length-1]} `);

//_______________________Array Methods (Basic)_____________________________

// Task 3 : use "push" method to add new ele at the end of the array and log the updated array in console 
arr.push(22);
console.log(`Updated Array:  ${arr}`);

// Task 4 : use "pop" method to remove a ele at the end of the array and log the updated array in console 
arr.pop();
console.log(`Updated Array:  ${arr}`);

// Task 5 : use "shift" method to remove first ele of the array and log the updated array in console 
arr.shift();
console.log(`Updated Array:  ${arr}`);

// Task 6 : use "unshift" method to add ele at begining of the array and log the updated array in console 
arr.unshift(1);
console.log(`Updated Array:  ${arr}`);

//_______________________Array Methods (Intermediate)_____________________________

// Task 7 : use "map" method to create a new array where each ele is doubled and log the new array in console 

let newArr= arr.map((ele)=>  ele*ele);
console.log(`New Array:  ${newArr}`);

// Task 8 : use "filter" method to create a new array with only even numbers and log the new array in console 

 newArr= arr.filter((ele)=>  ele%2==0);
console.log(`New Array:  ${newArr}`);

// Task 9 : use "reduce" method to add the all numbers in array and log the new array in console 

 let sum= arr.reduce((prev,cur)=> ( prev+cur) ,0);
console.log(`New Array:  ${sum}`);

//_______________________Array Iteration_____________________________

// Task 10: use "for loop" to iterate over the array and log the each ele to console 
let n = arr.length;
console.log(`elements of array by for loop`);
for(let i=0;i<n;i++){
    console.log(arr[i]);
}

// Task 11: use "forEach method" to iterate over the array and log the each ele to console 

console.log(`elements of array by forEach`);

arr.forEach(element => {
    console.log(element);
});

//_______________________Multi-dimension Arrays_____________________________

// Task 12: create 2D array 

let TwoDArr = [ [11,12,13],
                [14,15,16],
                [17,18,19]
              ];
console.log(`---------- 2D array  ----------`);
TwoDArr.forEach((r)=>
    r.forEach((ele)=>
        console.log(ele)
    )
)

// with for loop
console.log(`---------- 2D array with for loop ----------`);
for(let i=0;i<TwoDArr.length;i++){
    for(let j=0;j<TwoDArr.length;j++){
        console.log(TwoDArr[i][j]);
    }
}

// Task 13: access a specific ele from 2D arr

console.log(TwoDArr[1][2]);