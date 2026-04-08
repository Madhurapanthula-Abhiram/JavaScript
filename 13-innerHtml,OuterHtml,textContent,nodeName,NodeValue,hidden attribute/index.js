//TagName recap
console.log(document.getElementsByTagName("div"));
console.log(document.getElementsByTagName("title"));
console.log(document.getElementsByTagName("p")[0]);
//nodeName->return only the TagName and type ->text  in uppercase
let t=document.getElementById("initial");
console.log(t.nodeName);//TITLE
let t1=document.querySelector("div");
console.log(t1);
let t2=t1.firstElementChild.firstElementChild
console.log("------");
console.log(t2);
console.log(t2.nodeName);
console.log(t2.firstChild.nodeName);
console.log(t2.childNodes[1].nodeName);
//nodeValue->Returns value containing in node for element tag->null bcz it has no value for text,comment,attribute retuens value
//for ele it retuens null as Element nodes do NOT store text/data directly
console.log(t2.nodeValue);//null
console.log(t.nodeValue);//null
console.log("-----------");
console.log(document.getElementById("one"));
console.log(document.getElementById("one").nodeValue);//null
console.log(t2.firstChild.nodeValue);
console.log(t2.firstChild.nextSibling.nodeValue);
//innerHTML -> Gets or sets everything INSIDE an element
//getting innerhtml
let b=document.getElementById("one");
console.log(b.innerHTML);
console.log(b.firstElementChild.firstElementChild.innerHTML);
console.log(document.body.children[2].innerHTML);
//setting innerhtml-->adding nested elements is not possible even if you wrte like that they are added as siblings only.
let b1=document.getElementById("box");
console.log(b1);
console.log("------");
console.log(b1.firstElementChild);//<p>inner</p> 
console.log(b1.firstElementChild.nextElementSibling);//null as inner html is not yet written.
b1.innerHTML="<p> this is setting the innerHtml <div>thanks </div> </p>";
b1.innerHTML+="<p>hai</p>"
console.log(b1.firstElementChild);
console.log(b1.firstElementChild.nextElementSibling);
//outerHTML -> Gets or replaces the WHOLE element (including itself)
//In this nesting is possible 
//getting the outer html
console.log(b1.outerHTML);
//setting the outer html
b1.outerHTML = "<section>Replaced <div><p>This is outer HTML</p></div> </section>";
let t3=document.querySelector("section");
console.log(t3.firstElementChild.firstElementChild.firstChild);
//textContent->gives all text in html
console.log(document.body.textContent); 
console.log(b1.textContent);
//setting by textcontent
let t4=document.getElementById("msg");
// t4.textContent="hello";
// console.log(b1);
console.log(document.getElementById("box"));//cannot acces id as it is replaced with section tag now but you can still use the b1 as it is stored.
//hidden attribute
let h=document.getElementById("msg");
h.hidden=false;