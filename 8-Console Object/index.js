console.log("helloworld! this is console.log method of console object");
//This is console.error method of console object
console.error("Something went wrong!");
//shows warning message in the console
console.warn("warning check your code ");
//console.clear() method is used to clear the console
//console.clear();
//console.assert() method is used to print error message if the condition is false.
let age=prompt("enter your age: ");
age=Number.parseInt(age);
console.assert(age>=18,"you are not eligible for voting as your age is "+ age);
//console.table() method is used to print data in table format in console.
let obj1={
    john:85,
    mark:90,
    jane:95,
    joseph:100
}
console.table(obj1);
//console.time() and console.timerEnd() used to start and end timer console
//same label should be used in both methods to calculate the time taken
console.time("a");
for(let i=0;i<100;i++){
    console.log(i);
}
console.timeEnd("a");
//console.info() method is used to print information messages in console.
console.info("This is an information message!");
//console.count() method is used to count the number of times a particular string has been logged in the console.
console.count("hello");
console.count("hello");
console.count("hello");
function test(){
  console.count("Counter");
}
test();
test();
test();
//console.group() and console.groupEnd() methods are used to group related messages together in the console.
console.group("User Info");
console.log("Name: Abhi");
console.log("Age: 21");
console.groupEnd();
console.log("-----");
//console.dir() method is used to print the properties of an object in the console.
let obj2={
    name:"Abhi",
    age:21,
    city:"Delhi"
}
console.dir(obj2);