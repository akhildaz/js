// const arr = [0, 1, 2, 3, 4];
// console.log(arr);

// const country = ["japan", "india", "china", "korea"];

// console.log(typeof country);

// const names = new Array("Eve", "Kama", "Emma", "Emily");

// console.log(typeof names);
// console.log(names);


// array methods

// arr.push(7);
// arr.pop();
// arr.unshift(8);
// arr.shift();

// console.log(arr);

// const newArr = [9, 8, 7, 6];

// const diffArr = arr.join();
// join function converts type array(object) into type string
// console.log(diffArr);

// splice, slice

// const nums = [1, 10, 22, 11];

// console.log("A", nums);

// const num1 = nums.slice(1, 3);
// console.log("slice array: ", num1);
// console.log("og array: ", nums);

// const num2 = nums.splice(1, 3);
// console.log("splice array: ", num2);
// console.log("og array: ", nums);

// part 2 array


// const girls = ["eve", "emma", "emily"];
// const girls2 = ["kama", "kiara", "kali"];

// girls.push(girls2);
// console.log(girls);
// // [ 'eve', 'emma', 'emily', [ 'kama', 'kiara', 'kali' ] ]

// const newGirls = girls.concat(girls2);
// console.log(newGirls);
// [ 'eve', 'emma', 'emily', 'kama', 'kiara', 'kali' ]

// spread operator

// const spreadop = [...girls, ...girls2];
// console.log(spreadop); 

// array flat

// const newArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [10, 11, 12]]];
// const flatedArr = newArr.flat(3); // or use flat(Infinity), when dont know how much depth is there.
// console.log(flatedArr);

// console.log(Array.isArray("Akhil"));
// console.log(Array.from("Akhil"));
// [ 'A', 'k', 'h', 'i', 'l' ]

const user = {
    userName: "Akhilsdas",
    age: "18"
}

// console.log(Array.from(user.userName));
// [
//   'A', 'k', 'h',
//   'i', 'l', 's',
//   'd', 'a', 's'
// ]

// join multi array using of

let score1 = 100;
let score2 = 200;
let score3 = 300;

// console.log(Array.of(score1, score2, score3, user.userName, user.age));
// [ 100, 200, 300, 'Akhilsdas', '18' ]







