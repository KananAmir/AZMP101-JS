// for, while, do while, for of, for in

// console.log("hello world!");

// for(starterPoint; condition; steps)

for (let index = 0; index < 5; index = index + 1) {
  //   console.log("hello world!");
  //   console.log(index);
}

for (let index = 10; index <= 20; index = index + 2) {
  //   console.log(index);
}

//infinite loop with for

// let count = 0;
// for (;;) {
//   //   console.log("hello javascript");
//   console.log(count++);
// }

// break, continue

let count = 0;
for (;;) {
  //   console.log("hello javascript");
  //   console.log(count++);
  count++;
  if (count === 10) {
    break;
  }
}

// for (let i = 1; i <= 100; i = i + 2) {
//   console.log(i);
// }

for (let i = 1; i <= 100; i++) {
  if (i % 2 === 1) {
    continue;
  }

  //   console.log(i);
}

//1-100 aralığında sadecə cüt ədədləri çap edək

let sum = 0;
for (let i = 1; i <= 100; i++) {
  //   sum = sum + i;
  sum += i;
}

console.log("SUM: ", sum);

// let number = +window.prompt("enter number here...");
// let number = Number(window.prompt("enter number here..."));
// let number = parseInt(window.prompt("enter number here..."));

// let factorial = 1;
// for (let i = 1; i <= number; i++) {
//   factorial *= i;
// }

// console.log(factorial);

//while loop

let num = 0;
// while (num <= 10) {
//   console.log(num++);
// }

// while (true) {
//   num++;
//   console.log(num);
//   if (num === 10) break;
// }

let n = 123;

while (n > 0) {
  let res = n % 10;
  console.log(res);
  n = parseInt(n / 10);
}

//do while

do {
  console.log("hello");
} while (false);

//prime number

let number = 37;

let isPrime = true;

for (let i = 2; i < number; i++) {
  if (number % i === 0) {
    isPrime = false;
    break;
  }
}

if (isPrime === true) {
  console.log(`${number} is PRIME`);
} else {
  console.log(`${number} is NOT PRIME`);
}
