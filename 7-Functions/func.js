//Function is written by declaration or by expression.
//Function Declaration
sayHello();
function sayHello() {
    console.log("Hello!");
}
sayHello();//Hello!
//Expression
//cannot call before declaration
let sayHi = function() {
    console.log("Hi!");
};
sayHi();//Hi!
//Function without parameters
function greet() {
    console.log("Welcome to JavaScript!");
}
greet();//Welcome to JavaScript!
//Function with parameters
function add(a, b) {
    return a + b;
}
console.log(add(5, 3)); // 8
//Arrow Function
//Without parameters
let sayWelcome = () => {
    console.log("Welcome!");
};
sayWelcome(); // Welcome!
//func with one parameter
let square = x => x * x;
console.log(square(4)); // 16
//With more then one parameters
let multiply = (x, y) => {
    return x * y;
};
console.log(multiply(4, 6)); // 24
//Note:if curly braces used use return statement otherwise it will return undefined
