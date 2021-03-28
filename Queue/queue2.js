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

//sorting data with queues
function distribute(nums, queues, n, digit) {
    for (var i = 0; i < n; ++i) {
        if (digit == 1) {
            queues[nums[i]%10].enqueue(nums[i]);
        }
        else {
             queues[Math.floor(nums[i] / 10)].enqueue(nums[i]);
        }
    }
}

function collect(queues, nums) {
    var i = 0;
    for (var digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue();
        }
    }
}
   
function dispArray(arr) {
    for (var i = 0; i < arr.length; ++i) {
        console.log(arr[i] + " ");
    }
}

var queues = [];
for (var i = 0; i < 10; ++i) {
    queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log("Before radix sort: ");
dispArray(nums);
distribute(nums, queues, 10, 1);
collect(queues, nums);
distribute(nums, queues, 10, 10);
collect(queues, nums);
console.log("\n\nAfter radix sort: ");
dispArray(nums);

