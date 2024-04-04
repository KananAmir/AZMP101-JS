//DATA DTYPES

// primitive (value based) vs nanprimitive (referance based)

let userName = null;

userName = "Jhon_Doe";
let age = 44;
let n = 15n;
let isMarried = false;
let uniqueId = Symbol("2d54v3s");

// console.log(NaN); // not a number

// let skills = ["html", "css", "js"];
// let obj = {
//   fullName: "Lorem Ipsum",
//   age: 22,
// };

console.log(typeof 44); //number
console.log(typeof "a"); //string
console.log(typeof true); //boolean
console.log(typeof {}); //object
console.log(typeof []); //object
console.log(typeof undefined); //undefined
console.log(typeof null); // object
console.log(typeof NaN); // number
