//.hasAttribute()->it returns true or false
let t1=document.getElementById("img1");
console.log(t1.hasAttribute("src"));
console.log(t1.hasAttribute("alt"));
let t2=document.getElementById("img2");
console.log(t2.hasAttribute("src"));
console.log(t2.hasAttribute("alt"));
console.log(document.querySelector("div").hasAttribute("class"));
//.getAttribute()->gets the value of the attribute
let link = document.getElementById("link");
console.log(link.getAttribute("href"));// Output: https://google.com
console.log(link.href);//browser modifies slightly
console.log(document.getElementById("img1").getAttribute("src"));
console.log(document.getElementById("img2").getAttribute("alt"));
//.setAttribute(attname,value)
//setting new attribute
let t3=document.querySelector(".three").firstElementChild;
t3.outerHTML="<section><div><p>This is a paragraph</p></div></section>"                       
let t4=document.querySelector("section");
t4.firstElementChild.setAttribute("id","one");
console.log(t4.outerHTML);
// updating the attribute value
console.log("before updation after updation shows updated value only");
console.log(document.querySelector("#first"));
console.log("after updation");
let t5=document.querySelector("#first");
t5.setAttribute("id","second");
console.log(document.querySelector('#second'));
let t6=document.querySelector(".two");
t6.setAttribute("title","first div tag");//title is in build attr
console.log(t6);
//removeAttribute()
let t7=document.getElementById("btn");
btn.removeAttribute("disabled"); 
let t8=document.querySelector("title");
console.log(t8);
t8.removeAttribute("id");
let t9=document.querySelector("img");
console.log(t9);
// t9.removeAttribute("src"); remove src 
//attributes ->to get all attributes of a tag result as a NamedNodeMap
let a1=document.head.children[1];
console.log("looping....");
for(let i of a1.attributes)
{
    console.log(i);
}
console.log(document.head.children[1].attributes);
console.log(document.querySelector("img").attributes);
// data-* attributes-> used in defining custom attributes must start with the data- and then name of attr data-name like that
let t10=document.querySelector(".user");
console.log(t10.getAttribute("data-name"));
console.log(t10.getAttribute("data-age"));
console.log(t10.dataset.name);
console.log(t10.dataset.age);
//setting custom attr
t10.dataset.city="vizag";
console.log(t10);
//delete cutsom attribute
// delete t10.dataset.age;
console.log(t10);