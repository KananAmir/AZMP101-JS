const countries = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"]; // array of strings, countries

const scores = [40, 55, 90, 98, 70, 45];
const numbers = [1, 3, 7, 9, 4, 2];

// function findMaxElementInArray(arr) {
//   let max = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }
//   }
//   return max;
// }
function findMaxElementInArray(arr) {
  let max = 0;
  arr.forEach((element) => {
    if (element > max) {
      max = element;
    }
  });
  return max;
}

console.log(findMaxElementInArray(scores));
console.log(findMaxElementInArray(numbers));

console.log(Math.max(1, 2, 3, 4, 5, 6)); //6
console.log(Math.max(...numbers)); //9
console.log(Math.min(...numbers)); //1

const students = ["riad", "parvan", "murad", "ali", "nijat", "aysel"];

console.log(students.find((q) => q.toLowerCase().startsWith("a"))); //ali
console.log(students.findLast((q) => q.toLowerCase().startsWith("a"))); //aysel
console.log(students.findIndex((q) => q.toLowerCase().startsWith("a"))); //3
console.log(students.findLastIndex((q) => q.toLowerCase().startsWith("a"))); //5
console.log(students.filter((q) => q.toLowerCase().startsWith("a")));

console.log(scores.find((item) => item > 80));
console.log(scores.filter((item) => item > 80));

const products = [
  {
    id: 1,
    title: "Smartphone",
    description: "A high-end smartphone with the latest features.",
    price: 799.99,
    count: 2,
  },
  {
    id: 2,
    title: "Laptop",
    description: "Powerful laptop with a large screen and fast processor.",
    price: 1299.99,
    count: 7,
  },
  {
    id: 3,
    title: "Coffee Maker",
    description: "An automatic coffee maker with a built-in grinder.",
    price: 99.99,
    count: 3,
  },
  {
    id: 4,
    title: "Headphones",
    description: "Wireless over-ear headphones with noise-cancellation.",
    price: 199.99,
    count: 4,
  },
  {
    id: 5,
    title: "Smart TV",
    description: "55-inch 4K Smart TV with streaming apps built-in.",
    price: 699.99,
    count: 3,
  },
];

const filteredProducts = products.filter((elem) => elem.price > 600);

console.log(filteredProducts);

//sum of array elements

let sum = numbers[0];
for (let i = 1; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);
//reduce

// let sumOfNumbers = numbers.reduce((sum, item, index, array) => {
//   return sum + item;
// }, 0);
// let sumOfNumbers = numbers.reduce((sum, item, index, array) => sum + item, 0);
// let sumOfNumbers = numbers.reduce((sum, item, index, array) => {
//   console.log(`${sum} + ${item} = ${sum + item}`);
//   return sum + item;
// });

let sumOfNumbers = numbers.reduce((sum, item, index, array) => {
  console.log(`${sum} + ${item} = ${sum + item}`);
  return sum + item;
}, 0);

// let multiplyOfNumbers = numbers.reduce((result, item) => result * item, 1);

// console.log("SUM: ", sumOfNumbers);
// console.log("MULTIPY: ", multiplyOfNumbers);

// let totalPrices = products.reduce((sum, item) => sum + item.price, 0);
let totalPrices = products.reduce(
  (sum, item) => sum + item.price * item.count,
  0
);

// console.log(totalPrices);

let str = countries.reduce((acc, curr) => acc + curr[0], "");

console.log(str);

//some vs every

console.log(scores.some((item) => item > 70)); //true
console.log(scores.some((item) => item > 99)); //false

console.log(scores.every((item) => item > 50)); //
console.log(scores.every((item) => item > 30)); //true

let userName = "ali_aliyev";
console.log([...userName]);
console.log(Array.from(userName));
console.log(userName.split(""));

// console.log(scores.keys());

let obj = {
  userName: "lorem",
  email: "lorem@gmail.com",
};

console.log({ ...scores });

// let newArr = numbers.concat(scores);
let newArr = [...numbers, ...scores];

console.log(newArr);
