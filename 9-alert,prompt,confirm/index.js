alert("Hello, World!");
let age=prompt("enter your age:",18);
age=Number.parseInt(age);
if(age>=18)
    {
    confirm("you are eligible for voting");
    }
else
    {
    confirm("you are not eligible for voting");
    }
//example
let uname = prompt("Enter your name:");
if(uname){
  let confirmUser = confirm("Is your name " + uname + "?");

  if(confirmUser){
    alert("Welcome " + uname);  
  } else {
    alert("Try again");
  }
}
let write=confirm("enter something:");
if(write){
    document.write("you entered: "+ write);
}
else{
    document.write("you cancelled the prompt");
}
