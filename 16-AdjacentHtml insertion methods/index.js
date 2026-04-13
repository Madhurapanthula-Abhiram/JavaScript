// element.insertAdjacentHTML(position, html)
/* Position   ->  Meaning                  
----------      ------------------------ 
beforebegin   -> Before element (outside) 
afterbegin    -> Inside element (start)   
beforeend     -> Inside element (end)     
afterend      -> After element (outside)  */
//beforebegin
let b1=document.querySelector('div');
b1.insertAdjacentHTML("beforebegin","<p>this is before-begining div</p>");
b1.insertAdjacentHTML("beforebegin","<p>before-begining div</p>");
// afterend
b1.insertAdjacentHTML("afterend","<p>This is after-ending div</p>");
b1.insertAdjacentHTML("afterend","<p>another afterend</p>");
//beforeend
b1.insertAdjacentHTML("beforeend","<p>hello this is before-ending div </p>");
b1.insertAdjacentHTML("beforeend","<p>before-ending div </p>");
//afterbegin
b1.insertAdjacentHTML("afterbegin","<p>this is after-beginging the div</p>");
b1.insertAdjacentHTML("afterbegin","<p>after-beginging the div</p>");
//why we use these methods if we have append , prepend , before ,after?
// append/prepend/before/after → work with ELEMENTS (nodes)
// insertAdjacentHTML → works with RAW HTML STRINGS (faster + simpler)
//goal is to add <li>Item 2</li>
//append vs beforeend
//append method
//for inserting multiple elements we need to use for loop
let g1=document.getElementById('ulist');
let list=document.createElement('li');
list.innerText='Item 1';
g1.append(list);
//using beforeend
g1.insertAdjacentHTML   ("beforeend","<li>Item 2</li><li>Item 3</li>"); 
// so using it we can directly insert list ele many at a time also non need to create a element and then append
//same in all cases.
/*
If you need:
Event listeners
Step-by-step control
Security (user input)

👉 Then use:
✔️ createElement + append */
/*
When to Use What:

✅ Use append/before/after when:
You need JS control
You already have elements
You add event listeners

✅ Use insertAdjacentHTML when:
You have HTML string
You want fast insertion
You add bulk content  */

//remove in js
let r=document.getElementById("rem");
r.remove();