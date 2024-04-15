// for in, for of

const products = [
  { name: "one Product 1", price: 20, category: "electronics" },
  { name: "two Product 2", price: 30, category: "Clothes" },
  { name: "three Product 3", price: 40, category: "Electronics" },
  { name: "four Product 4", price: 50, category: "Clothes" },
  { name: "five Product 5", price: 60, category: "Clothes" },
  { name: "six Product 6", price: 70, category: "Electronics" },
  { name: "seven Product 7", price: 80, category: "Clothes" },
  { name: "eight Product 8", price: 90, category: "electronics" },
];

const numbers = [2, 66, 84, 33, 25];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
// }
for (item of numbers) {
  console.log(item);
}

const student = {
  firstName: "Ali",
  lastName: "Zeynalov",
  age: 20,
  university: "Azmiu",
  city: "London",
  isMarried: false,
  skills: ["html", "css", "js"],
};

// console.log(student["firstName"]);
// for (item in student) {
//   console.log(item);
// }

// for (item in student) {
//   console.log(student[item]);
// }

for (item in student) {
  console.log(`${item} ->>> ${student[item]}`);
}

for (item in numbers) {
  console.log(numbers[item]);
}

// console.log(typeof student);
// console.log(typeof numbers);

console.log(Array.isArray(student));
console.log(Array.isArray(numbers));
console.log(isNaN(4));
console.log(isNaN("salam"));
console.log(isFinite(5)); //true
console.log(isFinite(Infinity)); // false
console.log(isFinite(6 / 0)); //false
