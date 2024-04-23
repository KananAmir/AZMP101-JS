const arr = [1, 2, 3, ["a", "b", "c"], { userName: "doe_jhon" }];

// const arrCopy = [...arr];
// const arrCopy = JSON.parse(JSON.stringify(arr));
const arrCopy = structuredClone(arr);

// numbers.pop();
arr[3][0] = "azmp101";
// arrCopy[arr.length - 1].email = "jhon@code.edu.az";

// delete arrCopy[arr.length - 1].userName;
// console.log(arr[3]);
console.log(arr);
console.log(arrCopy);

// const student = {
//   id: 23,
//   firstName: "aysel",
//   lastName: "mammadova",
//   universityInfo: {
//     studentId: "it145",
//     faculty: "mit",
//     group: "azmp101",
//     graduated: false,
//   },
//   skill: ["html", "css", "js"],
// };

// const { lastName, ...restStudent } = student;

// console.log(restStudent);
