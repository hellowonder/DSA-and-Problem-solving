//splice
var nums = [1,2,3,7,8,9];
nums.splice(3,0,4,5,6);
console.log(nums);

//reverse
var nums = [1,2,3,4,5];
nums.reverse();
console.log(nums);

//The sort() function sorts data lexicographically, assuming the data elements are strings,
//even though in the preceding example, the elements are numbers
var nums = [3,1,2,100,4,200];
nums.sort();
console.log(nums);

//Actual sort
function compare(num1, num2){
    return num1 - num2;
}
var nums = [3,1,2,100,4,200];
nums.sort(compare);
console.log(nums);