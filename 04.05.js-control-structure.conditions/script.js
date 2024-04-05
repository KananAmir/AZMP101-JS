//conditions

// if else

let number = 5;

if (number > 0) {
  console.log(`${number} is positive`);
} else if (number < 0) {
  console.log(`${number} is negative`);
} else {
  console.log(`${number} is zero`);
}

if (number !== 0) {
  if (number > 0) {
    console.log(`${number} is positive`);
  } else {
    console.log(`${number} is negative`);
  }
} else {
  console.log(`${number} is zero`);
}

// if (number === 0) {
//   console.log(`${number} is equal to 0, neigher ODD or EVEN`);
// } else if (number % 2 !== 0) {
//   console.log(`${number} is ODD`);
// } else {
//   console.log(`${number} is EVEN`);
// }
let ticketPrice = 8;
let customerObj = {
  customerName: "Seymur",
  age: 18,
  balance: 30,
};
let customerName = "Seymur";
let age = 30;
let balance = 10;

if (customerObj.age > 18) {
  if (customerObj.balance >= 8) {
    customerObj.balance = customerObj.balance - ticketPrice;
    console.log(
      `${customerObj.customerName}, your balance: ${customerObj.balance}`
    );
  } else {
    console.log(`You are kasıb, ${customerObj.customerName}`);
  }
} else if (customerObj.age === 18) {
  console.log(`${customerObj.customerName}, you are 18`);
  customerObj.balance = customerObj.balance - ticketPrice / 2;
  console.log(
    `${customerObj.customerName}, your balance: ${customerObj.balance}`
  );
} else {
  console.log(`${customerObj.customerName}, böyüyəndə gələrsən :)`);
}

//switch case

// let weekDay = 54;

// let weekDay = +window.prompt("Enter week day here..", "test");
// let weekDay = Number(window.prompt("Enter week day here..", "test"));
let weekDay = parseInt(window.prompt("Enter week day here..", "test"));
// console.log("weekDay ", weekDay);
// if (weekDay === 1) {
//   console.log("today is MONDAY");
// } else if (weekDay === 2) {
//   console.log("today is SUNDAY");
// } else if (weekDay === 3) {
//   console.log("today is SUNDAY");
// } else if (weekDay === 4) {
//   console.log("today is SUNDAY");
// } else if (weekDay === 2) {
//   console.log("today i5 SUNDAY");
// } else if (weekDay === 6) {
//   console.log("today is SUNDAY");
// } else if (weekDay === 0) {
//   console.log("today is SUNDAY");
// } else {
//   console.log("there is no such week day");
// }

switch (weekDay) {
  case 1:
    // console.log("today is MONDAY");
    window.alert("MONDAY");
    break;
  case 2:
    console.log("today is TUESDAY");
    break;

  case 3:
    console.log("today is WEDNESDAY");
    break;

  case 4:
    console.log("today is THURSDAY");
    break;

  case 5:
    console.log("today is FRIDAY");
    break;

  case 6:
    console.log("today is SATURDAY");
    break;

  case 0:
    console.log("today is SUNDAY");
    break;

  default:
    console.log("there is no such week day");

    break;
}

let bool = window.confirm("are u sure to delete product??");

console.log(bool);

const btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  console.log("clicked");
});

let a, b, c;

a = 35;
b = 43;
c = 5;

// if (a > b && a > c) {
//   console.log(`en biyuk eded: ${a}`);
// } else if (b > c && b > a) {
//   console.log(`en boyuk eded ${b}`);
// } else {
//   console.log(`en boyuk eded: ${c}`);
// }

// console.log();

let num = 512;

let first;
let second;
let third;

first = (num - (num % 100)) / 100;
console.log(first);

second = ((num - ((num % 100) % 10)) / 10) % 10;
console.log(second);

third = (num % 100) % 10;
console.log(third);
