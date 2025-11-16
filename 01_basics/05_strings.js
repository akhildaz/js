// const name = "akhil"

// const repoCount = 50;

// // console.log(name + repoCount + " Value");


// // String interpolation

// console.log(`Hello, my name is ${name}, and my repoCount is ${repoCount}!`);

// const user = {
//     userName: "Akhil",
//     level: 100,
// }

// const now = new Date();

// console.table(`
// User: ${user.userName.toUpperCase()} 
// Level: ${user.level} 
// Time: ${now.toLocaleTimeString()} 
// Status: ${user.level > 90 ? "Pro" : "Intermediate"}`);

// output
// User: AKHIL 
// Level: 100 
// Time: 2:49:55 PM 
// Status: Pro

// const userName = "Akhil"
// console.log(userName[3]);
// console.log(userAge);
// console.log(typeof userAge);

// console.log(userName.length);

// let userAge = new Number(7);
// userAge = 1


// console.log(userAge);


// mutation
// let numObj = {age: 7}
// let newNumObj = numObj
// newNumObj.age = 10;
// console.log(newNumObj);

// let age = new Number(7);
// let copy = age
// console.log(age); output: [Number: 7]

// age = 10;
// console.log(copy); output: [Number: 7]

// console.log(copy.valueOf()); output: 7

// console.log(age); output: 10

const name = "Akhil"

// console.log(name.charAt(3));
// console.log(name.indexOf('i'));

// output
// i
// 3


// const userName = "Akhil";

// const newString = userName.substring(0, 3);
// console.log(newString);

// const anotherString = userName.slice(-8, 4);
// console.log(anotherString);

// When negative indices are provided, slice() interprets them as counting from the end of the string, whereas substring() treats negative values as zero.
//  For example, str.slice(-3) extracts the last three characters, but str.substring(-3) behaves as if the index were 0.

// const newString = "  akhil";
// console.log(newString);
// console.log(newString.trim());

const url = "https://akhil.com/akhil%20google";

console.log(url.replace("%20", "-"));

console.log(url.includes("akhil"));

console.log(url.split("/"));

// output

// https://akhil.com/akhil-google
// true
// [ 'https:', '', 'akhil.com', 'akhil%20google' ]

