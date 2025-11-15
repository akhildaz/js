// Primitive type

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol("123");
const anotherId = Symbol("123");

// console.log(id == anotherId);  output: false

// console.log(id === anotherId);  output: false


// Reference type (non primitive)

// Arrays, Objects, Functions

// arrays
// const anime = ["solo leveling", "blue lock", "demon slayer"];

// console.log(anime); output: [ 'solo leveling', 'blue lock', 'demon slayer' ]
// console.log(typeof anime); output: object

// objects
// let studentInfo = {
//     name: "akhil",
//     age: 18,
// }


// functions
const myFunction = function() {
    console.log("hello world");
}

// myFunction(); output: hello world
// console.log(typeof myFunction); output: function



// console.log(studentInfo); output: { name: 'akhil', age: 18 }
// console.log(typeof studentInfo); output: object





/* JavaScript is a dynamically typed language.
 This means that the type of a variable is determined at runtime based on the value it holds, rather than being fixed at compile time.
 Variables in JavaScript can change their type throughout the program's execution; for example, a variable can hold a number one moment and a string the next.
 Type checking in JavaScript occurs during runtime, which allows code to compile even if it contains type errors that would only be caught when the program is executed.
 While JavaScript itself is dynamically typed, tools like TypeScript and Flow provide optional static type checking, allowing developers to add type safety to their code before it runs. */