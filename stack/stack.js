function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.clear = clear;
    this.length = length;
}

//Push Function
function push(element){
    this.dataStore[this.top++] = element;
}

//pop function
function pop(){
    return this.dataStore[--this.top];
}

//top
function peek(){
    return this.dataStore[this.top-1];
}

//length
function length(){
    return this.top;
}

//clear
function clear(){
    this.top = 0;
}

var s = new Stack();
s.push("David");
s.push("Raymond");
s.push("Bryan");
console.log("length: " + s.length());
console.log(s.peek());
var popped = s.pop();
console.log("The popped element is: " + popped);
console.log(s.peek());
s.push("Cynthia");
console.log(s.peek());
s.clear();
console.log("length: " + s.length());
console.log(s.peek());
s.push("Clayton");
console.log(s.peek());