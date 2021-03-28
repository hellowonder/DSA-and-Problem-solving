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
    var priority = this.dataStore[0].code;
    for (var i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code < priority) {
            priority = i;
        }
    }
    return this.dataStore.splice(priority,1);
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
    retStr += this.dataStore[i].name + " code: "
    + this.dataStore[i].code + "\n";
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

function Patient(name, code) {
    this.name = name;
    this.code = code;
   }
   
var p = new Patient("Smith",5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Jones", 4);
ed.enqueue(p);
p = new Patient("Fehrenbach", 6);
ed.enqueue(p);
p = new Patient("Brown", 1);
ed.enqueue(p);
p = new Patient("Ingram", 1);
ed.enqueue(p);
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());
// another round
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);
console.log("Patients waiting to be seen: ")
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Patient being treated: " + seen[0].name);