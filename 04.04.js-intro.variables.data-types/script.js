console.log("hello javascript!!");

let x = 5;
let y = 3;

console.log("RESULT ", x + y);

//naming conventions

// camelCase
// PascalCase
// snake_case

//variables (dəyişənlər)

// var, let, const

let userName = "ali_aliyev";
let age = 20;
console.log("USERNAME: ", userName);
let universityName = "AZMIU";

// console.log(userName, age, universityName );
let firstName, lastName;

firstName = "Ali";
lastName = "Aliyev";

age = 22;

console.log(
  `Hello, I am ${firstName} ${lastName}, I am studying at ${universityName}. I am ${age} years old`
);

// console.log(FIN_KOD); // error: can not access before initialization
const FIN_KOD = "12asd2j";

// console.log(number); // error: can not access before initialization
let number = 5;

// FIN_KOD = "1234567";

// let and const - block scope / can not be redeclared

// if(){}
// for(){}
// while(){}
// do{} while()

{
  let faculty = "Programming";
  //   let faculty = "IT" // Cannot redeclare block-scoped variable 'faculty'.ts(2451)

  console.log(faculty);
  var skills = ["html", "css", "js"];
}
// console.log(skills);

//var - function scope

function sayHi() {
  var fullName = "Ali Aliyev";
  console.log("FULL NAME: ", fullName);
}

sayHi();
// console.log(fullName);

var className = "azmp101";
var className = "azmp101-FE";

// hobby = "tennis";

// console.log(hobby);

console.log(className);

// hoisting

// console.log("a ", a);
// let a;

console.log("b ", b);
console.log("c ", c);

var b;
var c = 15;

{
  let d = 15;
  d = 12;
  console.log(d);
}

d = 10;

console.log(d);
