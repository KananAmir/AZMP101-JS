//functions

// let num1 = +window.prompt("enter first num");
// let num1 = parseInt(window.prompt("enter first num"));
// let num1 = Number(window.prompt("enter first num"));
let num2 = 9;
function sumOfNums(a, b) {
  let result;
  result = a + b;
  return result;
}

// console.log(sumOfNums());// undefined
// console.log(sumOfNums(num1, num2)); //13
// console.log(sumOfNums(1, 2)); //3
// console.log(sumOfNums(67, 17)); //84

let azmiuResults = [99, 68, 90, 40, 55, 100, 70];
let aztuResults = [60, 76, 80, 30, 45, 95, 100, 58];
let bduResults = [100, 48, 87, 39, 60, 75];

//declearation or regular function
function averageOfStudents(array, uniName) {
  let average,
    sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  average = sum / array.length;
  return `${uniName} average is ${Math.round(average)}`;
}

console.log(averageOfStudents([1, 2, 3], "test"));
console.log(averageOfStudents(azmiuResults, "azmiu"));
console.log(averageOfStudents(bduResults, "bdu"));

//expression function

const calcSquare = function (num) {
  return num ** 2;
};

//arrow function

const calcPower = (num, pow) => {
  return Math.pow(num, pow);
};

//iife - immediately invoked function expression

(function () {
  console.log("I am IIFE");
})();

//callback functions

function callBack() {}

//high order functions

function mainFunc(cb) {
  return cb();
}

console.log(
  mainFunc(() => {
    return "Hi, I am Callback";
  })
);

console.log(mainFunc(callBack));

function sum(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function subtruct(a, b) {
  if (a > b) {
    return a - b;
  } else {
    return b - a;
  }
}
function divide(a, b) {
  return a / b;
}

function calculator(num1, num2, calcOperation) {
  return calcOperation(num1, num2);
}

console.log("RESULT:", calculator(10, 5, sum));
console.log("RESULT:", calculator(10, 5, subtruct));
console.log("RESULT:", calculator(10, 5, multiply));
console.log("RESULT:", calculator(10, 5, divide));

// 3) Verilmiş ədədin bölənlərinin sayını tapan proqram tərtib edin.

function countOfDivisions(number) {
  let count = 0;
  for (let i = 0; i <= number; i++) {
    if (number % i === 0) {
      count++;
    }
  }

  return count;
}

console.log(countOfDivisions(10));
console.log(countOfDivisions(10));

// 4) for loop'undan istifadə edərək aşağıdakı console'da aşağıdakı görüntünü alın
//  0 x 0 = 0
//  1 x 1 = 1
//  2 x 2 = 4
//  3 x 3 = 9
//  4 x 4 = 16
//  5 x 5 = 25
//  6 x 6 = 36
//  7 x 7 = 49
//  8 x 8 = 64
//  9 x 9 = 81
//  10 x 10 = 100

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

//is prime
function onlyPrimes(number) {
  let isPrime = true;
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    return `${number} is prime`;
  } else {
    return `${number} is not prime`;
  }
}
console.log(onlyPrimes(10));
console.log(onlyPrimes(11));
console.log(onlyPrimes(59));
console.log(onlyPrimes(55));

// 6)  0 - 100 arası yalnız sadə ədədləri console'da çap edin

for (let i = 2; i <= 100; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}

const products = [
  {
    id: 1,
    title: "Smartphone",
    description: "A high-end smartphone with the latest features.",
    price: 799.99,
  },
  {
    id: 2,
    title: "Laptop",
    description: "Powerful laptop with a large screen and fast processor.",
    price: 1299.99,
  },
  {
    id: 3,
    title: "Coffee Maker",
    description: "An automatic coffee maker with a built-in grinder.",
    price: 99.99,
  },
  {
    id: 4,
    title: "Headphones",
    description: "Wireless over-ear headphones with noise-cancellation.",
    price: 199.99,
  },
  {
    id: 5,
    title: "Smart TV",
    description: "55-inch 4K Smart TV with streaming apps built-in.",
    price: 699.99,
  },
];

//   # product arrayindəki producların qiymətləri cəmini və ortalamasını tapın\

let sumOfPrices = 0;
for (let i = 0; i < products.length; i++) {
  sumOfPrices += products[i].price;
}

console.log("SUM: ", sumOfPrices);
console.log("AVERAGE: ", sumOfPrices / products.length);

let countries = ["Azerbaijan", "Albania", "Germany", "America", "Russian"];

//   countries arrayində a ilə başlayıb a ilə bitən ölkələri tapın

for (let i = 0; i < countries.length; i++) {
  if (
    countries[i].toLowerCase()[0] === "a" &&
    countries[i].toLowerCase()[countries[i].length - 1] === "a"
  ) {
    console.log(countries[i]);
  }
}
//   -------------------------------------

//   # Verilmiş ədədin bölənlərinin sayını tapan funksiya tərtib edin.

//   function findNumberOfDivisors(n) {
//     ...
//   }

//   ----------------------------------

//   daxil edilmiş cümlə daxilində boşluqların sayini tapan function yazin

//   function findSpaceCounts(str){
//           ...
//       }

// 8) filterEmployees adında funksiya yaradın, parameter kimi bir array alsın və salary > 60000 olan objectləri return etsin
const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Elnara", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];

function filterEmployees(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].salary > 60000) {
      console.log(arr[i]);
    }
  }
}

filterEmployees(employees);

// 9) verilmiş ədədin array'in elementləri arasında olub olmadığını müəyyən edən function yazın

// ex: function findElement(arr, number) {
//   ...
// }

function findElement(arr, num) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === num) {
      return `${num} array elemenlərindən biridir`;
    }
  }

  return `${num} array elemenləri arasinda yoxdur`;
}

console.log(findElement([33, 28, 45, 17], 45)); // 45 array elemenlərindən biridir
console.log(findElement([33, 28, 45, 17], 38)); // 38 array elementləri arasında yoxdur
console.log(findElement(["a", "g", "y", "d"], "d")); // d array elementərindən biridir
