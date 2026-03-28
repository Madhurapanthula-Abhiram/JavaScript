let arr1=[1,2,3,4,5];
console.log(arr1);
console.log(arr1[0]);
console.log(arr1[1]);
arr1[0]=10;
console.log(arr1);
let heroes=["ironman","captain america","thor"];
console.log(heroes);
//looping through array
for(let i of heroes){
    console.log(i);
}
console.log(`array length : ${heroes.length}`);
for(let i=0;i<heroes.length;i++){
    console.log(heroes[i]);
}
for(let j of heroes){
    console.log(j.toUpperCase());
}
//you can also use for each loop for this but discuseed further 
//avg marks
let marks=[90,80,70,60,50];
let sum=0;
for(let i of marks){
    sum+=i;
}
console.log(`sum : ${sum}`);
console.log(`avg : ${sum/marks.length}`);
//10% off on prices print after offer array
let prices=[100,200,300,400,500];
for(let val of prices){
    console.log(`price after 10% off : ${val*0.9}`);
}
i=0;
//but to update array
for(let val of prices){
    val=val/10;
    prices[i]-=val;
    i++;
}
console.log(prices);
//you can also use the normal for loop which is best for this
let prices2=[100,200,300,400,500];
for(let i=0;i<prices2.length;i++){
    let dis=prices2[i]/10;
    prices2[i]-=dis;
}
console.log(prices);
//Array Methods
//1.length->property
let dc=["superman","batman","flash"];
console.log(dc.length);
//2.push()->adds at end
dc.push("wonder woman");
console.log(dc);
//3.pop()->removes last ele
dc.pop();
console.log(dc);
//4.unshift()->adds at start
dc.unshift("aquaman");
console.log(dc);
//5.shift()->removes first ele
dc.shift();
console.log(dc);
//6.concat()->merges two arrays
let marvel=["spiderman","black panther"];
let indianheroes=["minnal murali","shaktiman","krish"];
let allheroes=dc.concat(marvel,indianheroes);
console.log(allheroes);
//7.toString()->converts array to string
let str=allheroes.toString();
console.log(str);
//8.join()->converts array to string with separator
let str2=allheroes.join(" | ");
console.log(str2);
//9.slice()->returns a portion of array
console.log(allheroes.slice());
console.log(allheroes.slice(0,1));
console.log(allheroes.slice(2));
console.log(allheroes.slice(2,4));
console.log(allheroes.slice(-1));
console.log(allheroes.slice(-3,-5));
console.log(allheroes.slice(-5,-3));
//10.splice()->adds/removes elements from array
//to add elements
allheroes.splice(2,0,"green lantern","cyborg");
console.log(allheroes);
console.log("---");
// console.log(allheroes.splice(2));//-->removes all from 2 index
console.log(allheroes);
console.log(allheroes.splice(2,2));
//to remove elements
allheroes.splice(2,2);
console.log(allheroes);
//replace elements
allheroes.splice(2,2,"green lantern","cyborg");
console.log(allheroes);
//11.indexOf()->returns index of first occurrence of element
allheroes.push("superman");
console.log(allheroes.indexOf("superman"));
console.log(allheroes.indexOf("hulk"));//-->not there returns -1
//12.lastIndexOf()->returns index of last occurrence of element
console.log(allheroes.lastIndexOf("superman"));
//13.includes()->returns true if element is present else false
console.log(allheroes.includes("superman"));
console.log(allheroes.includes("hulk"));
//14.reverse()->reverses the array
allheroes.reverse();
console.log(allheroes);
//15.sort()->sorts the array
allheroes.sort();
console.log(allheroes);
arrone=[552,11,33,4,66,78,90];
arrone.sort();
console.log(arrone);//[ 11, 33, 4, 552, 66, 78, 90 ]-->sorts as string
arrone.sort((a,b)=>a-b);
console.log(arrone);//[ 4, 11, 33, 66, 78, 90, 552 ]-->sorts as number
arrone.sort((a,b)=>b-a);
console.log(arrone);//[ 552, 90, 78, 66, 33, 11, 4 ]-->sorts in descending order
//16.map()->returns a new array with the results of calling a function on every element
let nums1=[1,2,3,4,5,6,7,8,9,10];
let squares=nums1.map((n)=>n*n);
console.log(squares);
let arrm=[2,3,4,5,6];
let newarrm=arrm.map((v,i,arr)=>{
    return v**2;
});
console.log(newarrm);
//17.filter()->returns a new array with elements that pass the test
let nums=[1,2,3,4,5,6,7,8,9,10];
let even=nums.filter((n)=>n%2==0);
console.log(even);
let odd=nums.filter((i,v,array)=>{
    console.log(i,v,array);
    return i%2!=0;
});
console.log(odd);
//filter less then 10 values
let arrf=[11,2,44,5,7,88,90.9]
let afterf=arrf.filter(a=>a<10);
console.log(afterf);
//18.reduce->used to return an arraya to single value
/*syntax:
array.reduce((accumulator, currentValue, index, array) => {
    // logic
    return updatedAccumulator;
}, initialValue);*/
let factorials=[1,2,3,4,5,6];
let fact=factorials.reduce((a,b)=>a*b,1);
console.log(fact);
let sum1=[1,2,3,4,5];
let fsum=sum1.reduce((a,b)=>{
    return a+b;
});
console.log(fsum);
//reference types
// let arr1 = [1,2,3];
// let arr2 = arr1;
// arr2.push(4);
// console.log(arr1);
// [1,2,3,4]->Because both refer to same memory.
//Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object.
let str3="hello";
let arr3=Array.from(str3);
console.log(arr3);//[ 'h', 'e', 'l', 'l', 'o' ]
//20.delete operator->deletes an element from array but does not change length
let arrd=[1,2,3,4,5];
delete arrd[2];
console.log(arrd);//[ 1, 2, <1 empty item>, 4, 5 ]
console.log(arrd.length);//5