class Stack{
    constructor(){
        this.items = [];
    }
    //push function
    push(element)
    {
        this.items.push(element);
    }

    //pop function
    pop()
    {
        if(this.items.length == 0)
            return "Underflow";
        return this.items.pop();
    }

    // peek function
    peek()
    {
	    return this.items[this.items.length - 1];
    }
    
    //isEmpty function
    isEmpty()
    {
        return this.items.length == 0;
    }

    //printStack function
    printStack(){
        var str = "";
        for (var i = 0; i < this.items.length; i++){
            str += this.items[i] + " ";
        }
        return str;
    }

}

// creating object for stack class
var stack = new Stack();

// testing isEmpty and pop on an empty stack

// returns true
console.log(stack.isEmpty());

// returns Underflow
console.log(stack.pop());


// Adding element to the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Printing the stack element
// prints [10, 20, 30]
console.log(stack.printStack());

// returns 30
console.log(stack.peek());

// returns 30 and remove it from stack
console.log(stack.pop());

// returns [10, 20]
console.log(stack.printStack());

