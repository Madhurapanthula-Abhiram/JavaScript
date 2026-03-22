var age;
var age=50;
// console.log(age);
var age=78;
age=90;
console.log(age);
{
    let fullName="Abhi";
    // var fullName="AbhiRam";//causes error shown in console!
    // let fullName="Abhi";//causes error
    // const fullName="Abhi";
    fullName="Ram";
    let age;
    age=76;
    console.log(age);
    console.log(fullName);
}
let fullName="AbhiRam"//out of the block so can be declared!
{
    const PI =3.14;
    // const PI=3.12;//causes error!
    // const PI;//causes error!
    // const PI=3.14;//CAUSES ERROR!
    // PI=45;//Causes error in console you can see it
    console.log(PI);
}
const PI=3.143;
console.log(PI);
let age1=37;
let name="kiran";
let isMale=true;
let hasbacklog=false;
let X=null;
let Y;
let s=Symbol(123);
let b=BigInt(1233);
console.log(age1,name,isMale,hasbacklog,X,Y,s,b);
console.log(typeof(X));
console.log(typeof(Y));
console.log(typeof(b));
// console.log(s+1);//causes error
let obj1=
{
    fullName:"Uday Kiran",
    age:29,
    hasbacklog:false

}
console.log(obj1["age"]);
console.log(obj1.age);
console.log(obj1.fullName);
obj1.age=56;
console.log(obj1.age);
obj1.fullName="Ram";
// obj1["fullName"]="Ram";
console.log(obj1["fullName"]);
const obj2=
{
    fullName:"Uday",
    age:29,
    hasbacklog:false

}
console.log(obj1.age);
obj2["age"]=obj1["age"]+1;
console.log(obj2.age);
obj2["fullName"]="niha";
obj2["hasbacklog"]=true;
console.log(obj2.age,obj2.fullName,obj2.hasbacklog);
let fruits=["apple","banana"];
console.log(fruits);
console.log(fruits[0]);
function greet(a,b) {
  console.log(a+b);
}
greet(1,2);