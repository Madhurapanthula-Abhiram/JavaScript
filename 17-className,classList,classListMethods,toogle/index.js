//className->it overwrites all classes and adds the class
let t1=document.querySelector(".red");
console.log(t1);
t1.className="grey align";
let t2=document.querySelector(".red");
console.log(t2);//ul
t2.className="align red mod";
// classList
console.log(t1.classList);
console.log(t2.classList);
//add() in classList
t1.classList.add('arran');
console.log(t1.classList);
//you can add multiple classes
let t3=document.querySelector('span');
console.log(t3);
console.log(t3.classList);
t3.classList.add('arran','align','mod','red');//if 2 classes have same property then it goes by css order
//remove
t3.classList.remove('grey');
//toggle
t3.classList.toggle('arran');
t3.classList.toggle('arran');
t3.classList.toggle('arran');
t3.classList.toggle('arran');
//contains
console.log(t3.classList.contains('red'));
//replace
t3.classList.replace('red','black');