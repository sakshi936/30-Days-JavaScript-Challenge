// _____________________________Class Define_____________________________
// Task 1 Define a class Person with properties name and age, and a method to return a greeting message Create an instance of the class and log the greeting message

class Person{
  
    constructor(fname,age){
        this.fname=fname;
        this.age=age;
    }

     greet() {
        console.log(`Welcome ${this.fname} and your age is ${this.age}`);
    }

    updateAge(age){
        this.age =age;
        this.greet();
    }
}

const person= new Person("sakshi",20);

person.greet();

// Task 2 Add a method to the Person class that updates the age property and logs the updated age.
person.updateAge(21);

// __________________________________________Class Inheritance__________________________________

// Task 3 Define a class Student that extends the Person class. Add a property student Id and a method to return the student ID Create an instance of the student class and log the student ID

class student extends Person{

    constructor(name,age,id){
        super(name,age)
        this.id=id;
    }

    student_id(){
        // return `${ this.id}`;
        console.log(this.id);
    }
}

const stu1= new student("sakshi",23,64);
console.log(` Student id ${stu1.student_id()}`);

// Task 4. Override the greeting method in the Student class to include the student ID in the message. Log the overridden greeting message

// _________________________________Static Methods and Properties______________________________

// Task 5. Add a static method to the Person class that returns a generic greeting message Call this static method without creating an instance of the class and log the message. Task 6 Add a static property to the student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students

// ____________________________________Getters and Setters______________________________________

// Task 7. Add a getter method to the Person class to return the full name (assume a firstName and lasttiame property) Create an instance and log the full name using the getter Task

// 8. Add a setter method to the Person class to update the name properties (firstName and lastlame). Update the name using the setter and log the updated full name

// __________________________________ Private Fields (Optional)______________________________________

// Task 9 Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods 

// Task 10: Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each operation.