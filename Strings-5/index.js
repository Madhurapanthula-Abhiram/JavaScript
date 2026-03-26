//String Methods
//1.length
let str1="name";
console.log(str1.length);
//2.toUpperCase()
console.log(str1.toUpperCase());
//3.toLowerCase()
let str2="NAME";
console.log(str2.toLowerCase());
//4.concat
console.log(str1.concat(str2));
//5.replace()
console.log(str2.replace('N','Y'));
//6.reaplaceAll()
let str3="hello";
console.log(str3.replaceAll("l","p"));
//7.trim(),trimStart(),trimEnd()
str4="    ab  c    ";
console.log(str4.trim());
console.log(str4.trimStart());
console.log(str4.trimEnd());
//8.charAt() and charCodeAt()
str5="Abhiram"
console.log(str5.charAt(1));
console.log(str5.charCodeAt(0));
//9.at()
console.log(str5.at(-1));
//10.stratswith() and endsWith()
console.log(str5.startsWith("Ab"));
console.log(str5.endsWith("m"));
//11.slice
console.log(str5.slice(1,3));
//12.includes
console.log(str5.includes("bhi"));
//13.indexOf() and lastIndexOf()
let str6="hello";
console.log(str6.indexOf("l"));
console.log(str6.lastIndexOf("l"));
//14.substring-diff between slice and substring is here the negative index is treated as zero
console.log(str6.substring(1));
//15.repeat
// "Hi".repeat(3); // "HiHiHi"
//16.split()
let str11="Hello"
let arr=str11.split(',');
console.log(arr);
//Escape characters
let str7="Abhi";
//1.\n
console.log(str7+"\n"+"Ram");
console.log("Hello\nWorld");
//2./t
console.log("Abhi\tRam");
//3.\\
console.log("c:users\\Drive");
//4.\
console.log('It\'s my Pen');
console.log("The \"Batman\"");