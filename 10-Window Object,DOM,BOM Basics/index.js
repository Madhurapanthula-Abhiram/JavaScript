console.log("hello world");
window.console.log("hello2");
// window.log("hello");//error ->
//console is a property of window and log is in console as a method so in order to use it we should use console.log()
console.log(window);//window is the global object in browser environment and it contains all the global variables and functions
console.log(document);
console.log(window.document);//both are same
let aa=window.document
console.log(aa);//same as document 
console.log(document.body);
console.log(document.head);
console.log(document.title);
//document.title returns string/text bcz there is no tags in title in other words it is a string not an Object where as document.body/head retuen html as they are Objects.
// console.log(document.URL);
//dir is used to display an interactive list of the properties of the specified JavaScript object. It is often used to inspect the properties of DOM elements in the browser's console.
console.dir(document);
console.dir(window);//dir mainly used for exploring the object properties deeply.
console.log(document.body);
// window.open("https://google.com");//works in console.
console.log(window.innerWidth);
console.log(window.innerHeight);
console.log(location.href);
// location.href = "https://google.com"; // redirect to google when you open directly html page .
// location.reload();// refresh page->goes on refreshing in loop if no condition.
//discussed Further.
history.back();    // go to previous page
history.forward(); // go to next page