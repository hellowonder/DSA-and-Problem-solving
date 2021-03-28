//Accessing and writing Array elements
var nums = []
for(var i = 0; i < 100; i++){
    nums[i] = i+1;
}
console.log(nums);

//creating arrays from string
var sentence  = "My name shubham";
var words = sentence.split(" ");
for(var i = 0; i < words.length; i++){
    console.log("word"+ i + ": "+words[i]);
}