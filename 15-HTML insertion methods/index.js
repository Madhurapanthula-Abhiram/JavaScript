//createElement() -> document.createElement("tagName");
let t1 = document.createElement('div');//creates ele in memory but still not added  to DOM 
t1.innerText = "this is div one.";//used for adding some text inside the  DOM
document.body.append(t1);//used for adding to DOM adds a last 
let t2 = document.createElement('p');
t2.innerText = "This is div one para one";
document.body.append(t2);
//className insertion-> used to assign a className to ele
let t3 = document.querySelector('div');
t3.className = "one";
let t4 = document.createElement('section');
t4.innerText = "this is section one";
document.body.append(t4);
t4.className = "sec1";
let t5 = document.querySelector('.sec1');
console.log(t5);
//outerHtml insertion
t5.outerHTML = "<section><div><p>This is second div para one</p></div></section>";
//same you can try for innerHTML also
// document.body.append(t5);
//innerText insertion-> innerText is a property used to get or set the visible text inside an HTML element.
//getting text
let t6 = document.querySelector('section');
console.log(t6.innerText);
//setting innertext or changing it
let t61 = document.getElementById('paratwo');
t61.innerText = "This is Parker";
let t7 = document.getElementById('paraone');
t7.innerText = "This is Peter!!!";
//hidden content is not displayed bt innerText
console.log('innertext in body');
console.log(document.body.innerText);
//appendChild ->Accepts only ONE node
// Cannot add text directly
let li=document.getElementById("list");
let li1 = document.createElement("li");
li1.innerText = "Item 1";
li.appendChild(li1);
//append-> adds at end inside 
let t8 = document.querySelector('section');  // select section
let div = document.createElement('div');    // create div
div.innerText = "first div";                // add text to div
t8.append(div,"haiiiiiiiiiiii");                             // add div inside section
let p1 = document.createElement('p');
p1.innerText = "This is a paragraph";
t8.append(p1);
//prepend-> dds element at the beginning (inside)
let he1 = document.createElement('h1');
he1.innerText = "This is Heading one";
t8.prepend(he1);
//before()-> Adds element before the target element (outside)
let be1 = document.createElement('h2');
be1.innerText = "This is before";
t8.before(be1);
//after()-> Adds element after the target element (outside)
let af1 = document.createElement('h2');
af1.innerText = 'this is after';
t8.after(af1);
//replaceWith()-> Replaces an element completely
let r1 = document.getElementById('paraone');
let rr1 = document.createElement('h3');
rr1.innerText = "I am Spiderman";
r1.replaceWith(rr1);
console.log(t6.innerText);