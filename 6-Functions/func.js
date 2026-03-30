//function can be declared by declaration or expression
//1.Declaration
greet(); // Welcome to JavaScript!
function greet(){
    console.log("Welcome to JavaScript!");
}
greet(); // Welcome to JavaScript!
//2.Expression
const greet2 = function(){
    console.log("Welcome to JavaScript!");
};
greet2(); // Welcome to JavaScript!
//function without any parameters
function sayHello() {
    console.log("Hello!");
}
sayHello(); // Hello!
//function with parameters
function avg(a,b,c){
    return (a+b+c)/3;
}
avg(10,20,30); // 20
//Arrow Functions
//1.no parameters
const sayHi = () => {
    console.log("Hi!");
};
sayHi(); // Hi!
//2.one parameter
const square = x => {
    return x * x;
};
square(5); // 25
//3.multiple parameters
const multiply = (a, b) => {
    return a * b;
};
multiply(5, 10); // 50