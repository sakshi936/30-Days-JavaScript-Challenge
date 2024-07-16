// WAS thats chex=cks weather a number is negative, positive or Zero nd log the result in console.

let num = 67;

if(num>0){
    console.log(`${num} is Positive`);
}
else if(num<0){
    console.log(`${num} is Negative`);

}
else{
    console.log(`${num} is Zero`);
}


// WAS to check if a person is eligible to Vote( age>=18) or not and log the result in console.

let age =12;

if(age>= 18){
    console.log(`person is eligible to vote`);
}
else{
    console.log(`person is no eligible to vote`);
}


// WAS to find largest no b/w 3 nos using nested if else

let a,b,c;
a=6;
b=13;
c=9;

if(a>b ){
    if(a>c){
        console.log(`${a} is largest`);
    }
    else
     console.log(`${c} is largest`);
}
else if(b>a){
    if(b>c){
        console.log(`${b} is largest`);
    }
    else
    console.log(`${c} is largest`);
}
else 
    console.log(`${c} is largest`);


    // WAP using switch case to determine day of the week based on a number (1-7) and log the day

    let n =5;

    switch(n){
        case 1: 
             console.log('Monday');
        break;
        
        case 2:
            console.log('Teusday');
        break;

        case 3:
            console.log('Wednesday');
        break;

        case 4:
            console.log('Thursday');
        break;

        case 5:
            console.log('Friday');
        break;

        case 6:
            console.log('Saturday');
        break;

        case 7:
            console.log('Sunday');
        break;

    }

    //  find a number is odd or even using ternary oprator

    let n1= 31;

    (n1%2==0)?(console.log(`${n1} is even`)):(console.log(`${n1} is odd`));


    // check if a year is leap year or not using multiple conditions (divisible by 4, but not by 100 and also divisible by 400 ) log result 

    let year=2004;

    if(year%4==0 && year%100!=0){
        
        console.log(`${year} year is leap year`);
    }
    else if(year%400==0)
        console.log(`${year} year is a leap year`);
    else
    console.log(`${year} year is not a leap year`);
