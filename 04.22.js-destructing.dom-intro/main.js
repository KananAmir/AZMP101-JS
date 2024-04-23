// rest vs spread operatores

// const techsCopy = [...techs];
// console.log(techsCopy);

const user = {
  username: "jhon_doe",
  email: " jhon@gmail.com",
};

// const newUser = { ...user };

// console.log(newUser);

function sumOfDigits(a, b, c) {
  return a + b + c;
}

const nums = [3, 6, 7, 9, 14];
const numbers = [10, 24, 76];

console.log(sumOfDigits(1, 2, 3));

console.log(sumOfDigits(...nums));
console.log(sumOfDigits(...numbers));

const students1 = ["ali", "seymur"];
const students2 = ["rafail", "murad"];

const students = ["shams", ...students1, ...students2];
console.log(students);

//rest

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log("Sum:", sum(1, 2, 3, 4, 5)); // Sum: 15
console.log("Sum:", sum(10, 20)); // Sum: 30

// function test(...params) {
//   console.log(params);
// }

// test(1, 2, 3, 4, 5, 4);

//array destructing

const techs = [
  "HTML",
  "CSS",
  "JavaScript",
  "Redux",
  "MongoDB",
  "Express",
  "React",
  "Node",
];

// let h = techs[0];
// let c = techs[1];

// const [h, c, j] = techs;

const [h, c, j, ...restTechs] = techs;

console.log(h);
console.log(c);
console.log(j);
console.log(restTechs);

//object destructing

const student = {
  id: 23,
  firstName: "aysel",
  lastName: "mammadova",
  universityInfo: {
    studentId: "it145",
    faculty: "mit",
    group: "azmp101",
    graduated: false,
  },
  skill: ["html", "css", "js"],
};
// let firstName = student.firstName;
// let lastName = student.lastName;

// let { firstName, lastName } = student;
// let { firstName: ad, lastName: soyad, universityInfo } = student;
let {
  firstName: ad,
  lastName: soyad,
  universityInfo: { studentId },
} = student;

console.log(ad, soyad);
// console.log(universityInfo);
console.log(studentId);
