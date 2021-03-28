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

function isPalindrome(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
    rword += s.pop();
    }
    if (word == rword) {
        return true;
    }
    else {
        return false;
    }
}

var word = "hello";
if (isPalindrome(word)) {
 console.log(word + " is a palindrome.");
}
else {
 console.log(word + " is not a palindrome.");
}
word = "racecar"
if (isPalindrome(word)) {
 console.log(word + " is a palindrome.");
}
else {
 console.log(word + " is not a palindrome.");
}