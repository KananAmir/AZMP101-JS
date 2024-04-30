//promise

// const students = ["riad"];
// const promise = new Promise((resolve, reject) => {
//   if (students.length) {
//     resolve("SUCCESS");
//   } else {
//     reject("FAILED");
//   }
// });

// promise states: pending, fullfilled, rejected
const students = ["ali"];
const promise = new Promise((resolve, reject) => {
  if (students.length) {
    resolve({
      data: students,
      errorMessage: null,
    });
  } else {
    reject({
      data: null,
      errorMessage: "there is no student",
    });
  }
});

//then, catch, finally

// promise
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("finally block");
//   });

//promise chaning

const products = ["asus", "lenova", "msi"];

const promise2 = new Promise((resolve, reject) => {
  if (products.length) {
    resolve(products);
  } else {
    reject("failed");
  }
});

promise2
  .then((res) => {
    res.push("dell");
    return res;
  })
  .then((data) => {
    data.push("mac");
    return data;
  })
  .then((products) => {
    console.log(products);
  })
  .catch((err) => {
    console.log(err);
  });

console.log("hello");
console.log("azmp101");
