let a=4;
let b=2;
//Arithmetic Operators
console.log("a + b = ",a+b);
console.log("a - b = ",a-b);
console.log("a * b = ",a*b);
console.log("a / b = ",a/b);
console.log("a % b = ",a%b);
console.log("a ** b = ",a**b);
console.log("a++ = ",a++);//4
console.log(a);//5
console.log("++a this is pre-increment =",++a);//6
console.log("b--",b--);//2
console.log(b);//1
console.log("--b this is pre-decrement =",--b);
//Assignment Opertors
let c=8;
c+=1;
console.log(c);//9
c-=1;
console.log(c);//8
c*=2;
console.log(c);//16
c/=2;
console.log(c);//8
c%=2
console.log(c);//0
//Comparision Operators
let d=5;
let e="5";
let f=90;
console.log(d==e);//true
console.log(d===e);//false this is strcit version check data type also and value also
console.log(d!=e);//false
console.log(d!==e);//true
console.log(d>e);//false
console.log(f>d);//true
console.log(f>=e);//true
console.log(d<=e);//true
//Logical Operators
let g=3;
let h=7;
console.log(g>2 && h<7);
console.log(g>2 || h<7);
console.log(!(g>2 || h<7));
//Bitwise Operators
let a1=2;
let b1=4;
console.log(a1&1);//0
console.log(a1&a1);//2
console.log(a1|1);//3
console.log(a1^1);//3
console.log(~(a1));//-3->-x+1
console.log(a1);//2
console.log(a1<<1);//4
console.log(a1);//2
console.log(a1>>1);//1
let s=-1
console.log(s<<1);
//Terenary Operators
let age=21;
let res=age>18 ? "Adult": "NotAdult";
console.log(res);
//Conditional Stmts
let age1=20;
//if stmt
if(age>18){
    console.log("ADULT");
    // we can do change css in dom we will learn
}
//if-else
    if(age<18){
    console.log("NotAdult");
    }
    else{
        console.log("Adult");
    }
//if-elseif-else
//grades example
let a2=prompt("Enter your Marks:");
if(a2>=90 && a2<=100){
    console.log("A");
}
else if(a2>=80 && a2<=90)
{
    console.log("B");
}
else if(a2>=70 && a2<=80){
    console.log("C");
}
else if(a2>=60  && a2<=70)
{
    console.log("D");
}
else{
    console.log("Fail");
}
//Nested if
let age3=21;
let id="Present";
if(age3>18)
{
    if(id === "Present"){
        console.log("Eligible");
    }
    else{
        console.log("Not eligible");
    }
}
else{
    console.log("Minor");
}
//Switch stmt
let day = 3;
switch(day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  default: console.log("Weekend");
}
