//Node Types
let getNodeType=(n)=>{
    switch(n.nodeType){
        case 1: return "Element Node";
        case 2: return "Attribute Node";
        case 3: return "Text Node";
        case 8: return "Comment Node";
        case 9: return "Document Node";
        default: return "Other Node";
    }
}
let nodetype=document.body;
console.log(getNodeType(nodetype));
console.log("----------------");
//Parent Child Sibling Nodes DOM Navigation properties

//child navigation properties

//1.childNodes
console.log(document.body.childNodes);//childNodes->gives all text comment and elements
console.log("------------------");
console.log(document.body.hasChildNodes());//used for checking weather a ele has child nodes or not results in true or false.
//2.children-Element only Navigation
console.log(document.body.children);//children->gives only the element nodes
//Note children is not an array it is a node list index statring with zero you can us array.from to use array methods and loops on it.
console.log(document.body.children[0]);
console.log(document.body.children[1]);
let  child1=document.body.children;
console.log(Array.from(child1));
console.log("------");
Array.from(child1).forEach((v) => {
    console.log(v);
});
//3.firstchild
console.log(document.body.firstChild);//gives first child ->includes the txt nodes,comment nodes also along with the element nodes
//4.lastchild
console.log(document.body.lastChild);//gives last child includes the txt nodes, comments nodes along with element nodes
//5.firstElementChild-Element only navigation-Child
console.log(document.body.firstElementChild);
//6.lastElementChild-Element only navigation-Child
console.log(document.body.lastElementChild);
console.log("------P");
//parent navigation Properties
//1.parentNode
console.log(document.body.parentNode);
console.log(document.head.parentNode);
let parent1=document.body.children[0];
console.log(parent1.parentNode);
console.log(document.parentNode);//as it is root node
//2.parentElement
console.log(document.head.parentElement);
//key diff-imp
console.log("key diff");
console.log(document.documentElement.parentNode);
console.log(document.documentElement.parentElement);
//Sibling navigation
//1.nextSibiling and previousSibling
console.log(document.head.nextSibling);
console.log(document.body.previousSibling);
//2.nextElementSibling and previousElementSibling-element only navigation
console.log(document.head.nextElementSibling);
console.log(document.body.previousElementSibling);
console.log("table--nav");
//table navigations
//1.table.rows
let t=document.body.children[10];
console.log(t.rows);
console.log(t.rows[0]);
for(let i of Array.from(t.rows)){
    console.log(i);
}
//2.table.caption
console.log(t.caption);
console.log(t.caption.firstChild);
//3.table.tHead
console.log(t.tHead);
//4.table.tBodies
console.log("------------");
console.log(t.tBodies);//gives you the html collection
console.log(t.tBodies[0]);// we use this to get the  actual tbody element
console.log(t.tBodies[1]);//only used if we have more then one tbody to access it
console.log(t.tBodies[0].rows[0]);
//5.table.tFoot
console.log(t.tFoot);
//6..cells
console.log(t.rows[0].cells);
console.log(t.rows[0].cells[0]);
//7.rowIndex
console.log(t.rows[1].rowIndex);
//8.sectionRowIndex->section-group of rows in table so this one gives position of rows inside a section.
console.log(t.rows[0].sectionRowIndex);
//9.cellIndex
console.log(t.rows[0].cells[1].cellIndex);
//mostly use
/*
1.table.rows
2.table.caption
3.table.tHead
4.table.tBodies
5.table.cells
6.table.rowIndex
7.table.sectionRowIndex
8.table.cellIndex
*/
console.log("-------------");
//searching in DOM (or) DOM manipulation
//1.getElementById()->it gives results for which we have id assigned cannot use on element tag directly
console.log(document.getElementById("t1"));
console.log(document.getElementById("one"));
//2.getElementsByClassName
console.log(document.getElementsByClassName("two"));//output is HTML collection
//3.getElementByTagName-> gives the HTML collection as results for input tag element the tag
console.log(document.getElementsByTagName("p"));
console.log(document.getElementsByTagName("thead"));
console.log(document.getElementsByTagName("caption"));
console.log(document.getElementsByTagName("meta"));
console.log(document.getElementsByTagName("script"));
//4.querySelector()->it gives first element that matches the css selector result as element in console
//Using getElementById , getElementsByClassName , getElementByTagName  we can use the benefits of all of these in querySelector 
//we can select by id , class , tag ,
//id,class and tag selections
console.log(document.querySelector("title"));
console.log(document.querySelector('html')); 
console.log(document.querySelector('div'));
console.log(document.querySelector('table'));
console.log("---------------------------");
console.log(document.querySelector('#t1'));
console.log(document.querySelector('#one'));
console.log(document.querySelector('.two'));   
//descendent selection
console.log(document.querySelector('div p'));
console.log(document.querySelector('head meta'));
//multiple selectors selection #by->.two->p
console.log(document.querySelector('#by .two p'));
console.log(document.querySelector('ul > li'));//for first child 
//attribute selector
console.log(document.querySelector('html[lang = "en"]'));
console.log(document.querySelector('meta[charset="UTF-8"]'));
console.log(document.querySelector('html[lang = "en"]'));
//5.querySelectorAll->returns all searches matching the name given  and it gives Nodelist as a result.
console.log(document.querySelectorAll("title"));
console.log(document.querySelectorAll("div"));
console.log(document.querySelectorAll("p"));
console.log(document.querySelectorAll(".two"));