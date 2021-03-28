function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}


//The enqueue() function adds an element to the end of a queue:
function enqueue(element) {
 this.dataStore.push(element);
}

//The dequeue() function removes an element from the front of a queue:
function dequeue() {
 return this.dataStore.shift();
}

//We can examine the front and back elements of a queue using these functions:
function front() {
 return this.dataStore[0];
}

function back() {
 return this.dataStore[this.dataStore.length-1];
}


//We also need a toString() function to display all the elements in a queue:
function toString() {
 var retStr = "";
 for (var i = 0; i < this.dataStore.length; ++i) {
    retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}

//we need a function that lets us know if a queue is empty:
function empty() {
 if (this.dataStore.length == 0) {
    return true;
    }
 else {
    return false;
    }
}

// test program
var q = new Queue();
q.enqueue("Meredith");
q.enqueue("Cynthia");
q.enqueue("Jennifer");
console.log(q.toString());
q.dequeue();
console.log(q.toString());
console.log("Front of queue: " + q.front());
console.log("Back of queue: " + q.back());