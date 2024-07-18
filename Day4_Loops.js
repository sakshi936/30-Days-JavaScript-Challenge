// ****************************************** Task 1 *************************************************
// print Number from 1-10
for(let i=1;i<=10;i++){
    console.log(i);
}

// ****************************************** Task 2 *************************************************
// 5- multiplication table

for(let i=1;i<=10;i++){
    console.log(`5 * ${i} = ${5*i}`);
}

// ****************************************** Task 3 *************************************************
//  find sum of 1-10 using while loop
let i=1,sum=0;
while(i<=10){
    sum+= i;
    i++;
}

console.log(`Sum of 1-10 ${sum}`);

// ****************************************** Task 4 *************************************************
// factorial using while loop 
let n=5,fact=1;
let num =n;
while(n!=0){
    fact*=n;
    n-=1;
}

console.log(`factorial of ${num}  ${fact}`);

// ****************************************** Task 5 *************************************************
// print pattren using nested for loop

for(i=0;i<5;i++){
    let str =''
    for(let j=0;j<=i;j++){
        str+='*';
    }
    
    console.log(str);
    
}

// ****************************************** Task 6 *************************************************
// print number from 1-10 but skip 5 using continue

for(i=1;i<=10;i++){
    
    if(i==5)
        continue;
    
    console.log(i);
}

// ****************************************** Task 7 *************************************************
// print number from 1-10 but stop loop at 7 using break

for(i=1;i<=10;i++){
    
    if(i==7)
        break;
    
    console.log(i);
}