function List() {
    this.dataStore = [];
    this.listSize = 0;
    this.find = find;
    this.toString = toString;
    this.append = append;
    this.remove = remove;
    this.length = length;
    this.insert = insert;
    this.clear = clear;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
}
//append
function append(element) {
    this.dataStore[this.listSize++] = element;
}
   
//find
function find(element) {
    for (var i = 0; i < this.dataStore.length; ++i) {
         if (this.dataStore[i] == element) {
             return i;
            }
        }
    return -1;
}

//remove
function remove(element) {
    var foundAt = this.find(element);
    if (foundAt > -1) {
        this.dataStore.splice(foundAt,1);
         --this.listSize;
        return true;
    }
    return false;
}
        
//length
function length(){
    return this.listSize;
}

//retriving
function toString() {
    return this.dataStore;
}

//insert
function insert(element, after) {
    var insertPos = this.find(after);
    if (insertPos > -1) {
        this.dataStore.splice(insertPos+1, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

//clear
function clear() {
    delete this.dataStore;
    this.dataStore = [];
    this.listSize = this.pos = 0;
}
   
//Traversing a list
function front() {
    this.pos = 0;
}
function end() {
    this.pos = this.listSize-1;
}
function prev() {
    if (this.pos > 0) {
        --this.pos;
    }
}
function next() {
    if (this.pos < this.listSize-1) {
        ++this.pos;
    }
}
function currPos() {
    return this.pos;
}
function moveTo(position) {
    this.pos = position;
}
function getElement() {
    return this.dataStore[this.pos];
}


var names = new List();
names.append("Cynthia");
names.append("Raymond");
names.append("Barbara");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");
console.log(names.toString());

//first element
names.front();
console.log(names.getElement());

//next element
names.next();
console.log(names.getElement());

//current position
names.currPos();
console.log(names.getElement());

//moveto
names.moveTo(6);
console.log(names.getElement());

//clear
names.clear();
console.log(names)