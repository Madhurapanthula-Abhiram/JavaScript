//loops in js
//for loop
for (let i = 1; i <= 5; i++) {
    console.log(i);
}
//while loop
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
//do while loop
let j=3;
do{
    console.log("yes");
    j++;
} while(j<8);
//for of loop -used for arrays , strings ,sets , maps
let arr=[10, 20 ,30 ,40];
for(let val of arr){
    console.log(val);
}
//for in loop - used only for Objects,arrays etc but mainly best use is from objects
let country=["India","USA","UK"]; 
for (let key in country){
    console.log(`key : ${key} and value : ${country[key]}`);
    //`hello`-template literal
   // ${}-String interpolation 
}
let obj1= {
 age:23,
 fullName:"Abhi"
}
for (let val in obj1){
    console.log(`key : ${val} and value : ${obj1[val]}`);
    //`hello`-template literal
   // ${}-String interpolation 
}
//for each loop
const numbers = [10, 20, 30];

numbers.forEach((value, index) => {
    console.log(index, value);
});
const marks2=[11,30,90,100];
marks2.forEach((value)=>{
    console.log(value);
});
const names=["Abhi","Rohit","Shivam"];
names.forEach((value,index,array)=>{
    console.log(value,index,array);
});
marks2.forEach((value,index,array)=>{
    console.log(value+index,array);
});
console.log(marks2);