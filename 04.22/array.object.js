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

//array copy

//shallow copy
// const techsCopy = techs;
const techsCopy = [...techs];

techs[2] = "js";
techs.pop();
techsCopy.push("php");
console.log(techs);
console.log(techsCopy);

const users = [
  {
    name: "Anar",
    surname: "Hesenli",
    info: {
      uni: "ADA",
      gender: "male",
      salary: "3001",
      age: "22",
    },
  },
  {
    name: "Nicat",
    surname: "Sadiqov",
    info: {
      age: "25",
      uni: "GDU",
      gender: "male",
      salary: "200",
    },
  },
  "a",
  "b",
];

// const usersCopy = [...users];
// const usersCopy = structuredClone(users); //deep copy
const usersCopy = JSON.parse(JSON.stringify(users)); //deep copy

users[3] = "c";
users[0].name = "Rufat";

console.log(users);
console.log(usersCopy);

console.log(JSON.parse(JSON.stringify(users)));

//

// let a = [1, 2, 3];
// let b = a; //shallow copy
// let c = [...a]; //birinic dereceden deep copy
// console.log([] == []); //false
// console.log([1, 2, 3] == [1, 2, 3]); //false
// console.log({} == {}); //false

// console.log(a == b); //true
// console.log(a == c); //false

// console.log([1, 2, 3].toString());
// console.log([1, 2, 3].toString() == [1, 2, 3].toString());

// console.log({ userName: "riad_gafar", email: "riad@gmail.com" }.toString());
// console.log({}.toString());

// console.log(
//   { userName: "riad_gafar", email: "gafar@gmail.com" }.toString() ==
//     { userName: "riad_gafar", email: "riad@gmail.com" }.toString()
// ); //object has not toString Mehtod: yanlisdir

console.log(
  JSON.stringify({ userName: "riad_gafar", email: "gafar@gmail.com" }) ==
    JSON.stringify({ userName: "riad_gafar", email: "riad@gmail.com" })
);
