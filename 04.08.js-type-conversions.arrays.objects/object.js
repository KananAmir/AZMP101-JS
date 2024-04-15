//object litheral
const obj = {};

console.log(obj); //empty object

const emptyObj = new Object();

console.log(obj); //empty object

const student = {
  firstName: "Ali",
  lastName: "Zeynalov",
  age: 20,
  university: "Azmiu",
  city: "London",
  isMarried: false,
  skills: ["html", "css", "js"],
};

// console.log(student);
console.log(student.firstName);
console.log(student.skills);
console.log(student["city"]);
console.log(student["isMarried"]);

//array of objects
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

for (let i = 0; i < products.length; i++) {
  if (products[i].price > 40) {
    console.log(products[i]);
  }
}

