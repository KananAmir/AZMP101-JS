// js functions

// function declearation (regluar)
// function expression
// arrow functions

// function with no parameter
function sayHi() {
  console.log("hello azmp101");
}

//function call
sayHi();

// function with  parameter

console.log(greeting("Riad"));

function greeting(userName) {
  return `hello ${userName}`;
}

console.log(greeting("Shams"));
console.log(greeting("Murad"));
console.log(greeting()); // hello undefined

//function with default value
function getStudentIfo(studentName, age, university = "BDU", faculty = "IT") {
  return `I am ${studentName}, I am ${age}. I am studing at ${university}, my faculty is ${faculty}`;
}

// console.log(getStudentIfo("Nijat Huseynov", 21, "AZMIU"));
// console.log(getStudentIfo("Ali Jalilov", 55));

//sum of two numbers

function sumOfTwoNums(num1, num2) {
  let result = num1 + num2;
  return result;
}

let sum = sumOfTwoNums(4, 55);
console.log(sum);

console.log(sumOfTwoNums(3, 6)); //9
console.log(sumOfTwoNums(3)); //NaN
console.log(sumOfTwoNums()); //NaN
console.log(sumOfTwoNums(4, "5")); //45

//function expression (anonim)

const expressionFunction = function () {
  return "I am function expression";
};

console.log(expressionFunction());

//square

// let eded = +window.prompt("ededi daxil edin!");

const calcSquare = function (number) {
  let res = number ** 2;
  return res;
};

// console.log(calcSquare(4)); //16
// console.log(calcSquare(15)); //225
// console.log(calcSquare(eded));

//arrow functions

// const welcome = () => {
//   return `hello`;
// };

// const welcome = () => `hello`;

const welcome = (name) => `hello ${name}`;

// console.log(welcome()); //hello undefined
// console.log(welcome("Aysel")); //hello Aysel

//anonim
// ()=>{}
// function(){}

// console.log(calcPowerOfNum(3, 4)); //Uncaught ReferenceError: Cannot access 'calcPowerOfNum' before initialization

const calcPowerOfNum = (number, pow) => Math.pow(number, pow);

// console.log(calcPowerOfNum(4, 3));

//sum of array elements
function sumOfArrayElements(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

let nums = [5, 8, 9, 12, 43];
// console.log(sumOfArrayElements([1, 2, 3, 4, 5])); //15
// console.log(sumOfArrayElements(nums)); //77

// unlimited argument

const sumOfAllDigits = (...args) => {
  let result = 0;
  for (let i = 0; i < args.length; i++) {
    result += args[i];
  }

  return result;
};

// console.log(sumOfAllDigits(4, 7, 2, 3));
// console.log(sumOfAllDigits(1, 2, 3));

//find factorial

function calcualteFactorial(n) {
  let fact = 1;
  for (let i = 2; i < n; i++) {
    fact *= i;
  }
  return fact;
}

// console.log(calcualteFactorial(9));
// console.log(calcualteFactorial(5));
// console.log(calcualteFactorial(51));

const studentsReasults = [80, 70, 78, 58, 90, 50];
const scores = [1, 2, 3, 4, 5];

const findAverage = (arr) => {
  let average = sumOfArrayElements(arr) / arr.length;
  return average;
};

// console.log("AVERAGE", findAverage(studentsReasults));
// console.log("AVERAGE", findAverage(scores));
// console.log("AVERAGE", findAverage([2, 3, 4]));

// iife - immediately invoked function expression

// ()()
(function () {
  console.log("I am IIFE");
})();
(() => {
  console.log("I am IIFE");
})();

console.log(
  ((userName) => {
    return `Hello ${userName}`;
  })("Parvin")
);

// /recursion function

function findFactorial(num) {
  if (num === 0) return 1;
  let factorial = num * findFactorial(num - 1);
  return factorial;
}

findFactorial(5); // 120

// function findFactorial(num) {
//   let factorial = 1;
//   for (let i = num; i > 0; i--) {
//     factorial *= i;
//   }
//   return factorial;
// }

findFactorial(5); // 120
// callback functions

function mainFunc(cb) {
  return cb();
}
console.log(mainFunc(callBack));
console.log(
  mainFunc(() => {
    return "cb cb cb";
  })
);

function callBack() {
  return "Hi, I am CallBack";
}

// console.log(callBack());

// highher order functions -> mainFunc

//ternary operators

let age = 19;
// if (age >= 18) {
//   console.log("wellcome");
// } else {
//   console.log("boyuyende gelersen");
// }

age >= 18 ? console.log("wellcome") : console.log("boyuyende gelersen");
