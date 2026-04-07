//matches()->accepts only css selector no elementtag directly accepted
// let t1 = document.querySelector("title");
// let t2 = document.querySelector("title");
// console.log(t1.matches(t2)); ❌ ERROR
let t=document.querySelector("title");
console.log(t);
console.log(t.matches('title'));
console.log(t.matches('.id1'));
console.log(t.matches('.id2'));
//matches mainly helps in eventlistening we do not know which button user clicked so we can use this to know if user clicked and the button is same or not by this one like this it is useful in many ways 
//closest
let li = document.querySelector(".one li"); // first li inside first box
let parentBox = li.closest(".two");
console.log(parentBox);
let h2 = document.querySelector("h2");
console.log(h2.closest("div"));
let h3=document.querySelector("html");
console.log(h3.closest('html'));
let h1 = document.querySelector("h1");
console.log(h1.closest(".two"));//null as it goes up there is no class named two
//contains()
let box1 = document.querySelector(".one"); // first div
let li1 = document.querySelector(".one li");
console.log(box1.contains(li1)); // true
let box2= document.querySelector(".one");
let otherDiv = document.querySelectorAll(".two")[1];
console.log(box2.contains(otherDiv)); // false