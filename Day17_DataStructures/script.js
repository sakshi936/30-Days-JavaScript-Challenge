// ________________________________Linked List____________________________

// * Task 1: Implement a Node class to represent an element in a linked list with properties value and next

class Node{
    constructor(value){
        this.value=value;
        this.next =null;
    }
}
// Task 2. Implement a LinkedList class with methods to add a node to the end, remove a node from the end, and display all nodes.

class LinkedList{
    constructor(){
        this.head=null;
    }
    // add method to add new node at last
    add(value){
        const newnode = new Node(value);  // 78

        if(!this.head){
            this.head= newnode;
        }else{
            let current= this.head;
            while(current.next){
                current= current.next;
            }
            current.next= newnode;
        }

       
    }

    // remove node from linkedlist 

    remove(){
        let p= this.head;

        if(!this.head) return null;

        if(!this.head.next){
            const value = this.head.value;
            this.head=null;
            return value;
        }
        else{
            let p = this.head;
            let q=null;
            while(p.next){
                q=p;
                p=p.next;
            }
            q.next=null;
            return p.value;
        }


    }

    display(){
        let node = this.head;
        while(node){
            console.log(node.value);
            node =node.next;
        }
    }
}


const list1 = new LinkedList();

list1.add(23);
list1.add(78);
list1.add(56);
console.log(`Linked List`);
list1.display();
console.log(`removed element`);
console.log(list1.remove()); 
console.log(`Linked List`);
list1.display();


// ______________________________ Stack_______________________________________

//  Task 3: Implement a Stack class with methods push (add element), pop (remove element), and peek (view the top element).

class Stack{
    constructor(){
        this.stack=[];
    }
    push(value){
        this.stack.push(value);
    }
    pop(){
        if (this.stack.length === 0) return null;

       return this.stack.pop();
        
    }
    peek(){
        if(this.stack.length === 0) return null;

        return this.stack[this.stack.length-1];
    }
   
}

const stack = new Stack();
console.log(`Stack`);
console.log(`peek ${stack.peek()}`);
stack.push(1);
stack.push(2);
stack.push(3);
console.log(`peek ${stack.peek()}`); // 3
console.log(`pop ${stack.pop()}`); // 3
console.log(`pop ${stack.pop()}`); // 2
console.log(`pop ${stack.pop()}`); // 1
console.log(`pop ${stack.pop()}`); // null

// Task 4: Use the stack class to reverse a string by pushing all characters onto the stack and then popping them off

console.log("Reverse string!");

function  reverseName(str){
    const stringStack = new Stack();
    for (const char of str) {
        stringStack.push(char);
    }
    let revString ='';
    while(stringStack.peek()){
        revString+= stringStack.pop();
    }

    return revString;
}

console.log(`Hello World: ${reverseName("Hello World")} `); //Hello World: dlroW olleH 


// ________________________________ Queue ____________________________________

// Task 5: Implement a Queue class with methods enqueue (add element), dequeue (remove element), and front (view the first element)

class Queue{
    constructor(){
        this.queue= [];
    }

    enqueue(ele){
        this.queue.push(ele);
    }

    dequeque(){
        if(this.queue.length === 0) return null;

        const deQ = this.queue[0];
        this.queue.shift();
        return deQ;
    }
    front(){
        if(this.queue.length === 0) return null;
        return this.queue[0];
    }

}
const Q = new Queue();

console.log(`Queue!`);
console.log(`front ${Q.front()}`); //null
Q.enqueue(1);
Q.enqueue(2);
Q.enqueue(3);
Q.enqueue(4);
console.log(`dequeque ${Q.dequeque()}`);  // 1
console.log(`dequeque ${Q.dequeque()}`); //2
console.log(`dequeque ${Q.dequeque()}`); //3
console.log(`front ${Q.front()}`); //4


// Task 6. Use the Queue class to simulate a simple printer queue where print jobs are added to the queue and processed in order

class Printer{
    constructor(){
        this.printerJobs= new Queue();
    }

    addPrinterJobs(job){
        console.log(`job ${job} Added in printer queue`);
        this.printerJobs.enqueue(job);
    }

    processPrintJobs(){
        while(this.printerJobs.front()){
          const job= this.printerJobs.dequeque();
          console.log(`job ${job} processed`);
        }
    }
}

const print = new Printer();
print.addPrinterJobs('Document-1');
print.addPrinterJobs('Document-2');
print.addPrinterJobs('Document-3');
print.addPrinterJobs('Document-4');

print.processPrintJobs();

// output 

// job Document-1 Added in printer queue
// job Document-2 Added in printer queue
// job Document-3 Added in printer queue
// job Document-4 Added in printer queue
// job Document-1 processed
// job Document-2 processed
// job Document-3 processed
// job Document-4 processed


// ___________________________Binary Tree______________________________

// Task 7: Implement a TreeNode class to represent a node in a binary tree with properties value, left, and right

class TreeNode{
    constructor(value){
        this.value =value;
        this.left=null;
        this.right=null;
    }
}


// Task 8. Implement a BinaryTree class with methods for inserting values and performing in-order traversal to display nodes.

class BinaryTree{

    constructor(){
        this.root =null;
    }

    // insert(value){
    //     const newNode = new TreeNode(value);
    //     const current= this.root;
    //     if(!current){
    //         this.root= newNode;
    //     }
    //     else{

    //         if(this.root.value > newNode.value){
    //             current = this.root.left;

    //             while(current){
    //                 if(current.value > newNode.value){
    //                     current =current.left;
    //                 }
    //                 else{
    //                     current= current.right;
    //                 }
    //             }
    //         }
    //     }

    // }
}


