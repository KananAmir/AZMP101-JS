// I. 1 dən 100'ə qədər sadecə cüt ədədləri çapa verin.

// for (let i = 1; i < 100; i++) {
//   if (i % 2 === 0) console.log(i);
// }

for (let i = 1; i < 100; i++) {
  if (i % 2 === 1) continue;

  console.log(i);
}

// III. Verilmiş ədədin bütün bölənlərini console'a çıxaran proqram tərtib edin.

let num = 15;

for (let i = 1; i <= num; i++) {
  if (num % i === 0) {
    console.log(i);
  }
}

// VI.question) Üçbücağın 3 tərəfi verilib.
// Onların bərabərtərəfli üçbucaq olduğunu təyin edən proqram tərtib edin.

// let a, b, c;
// a = 3;
// b = 5;
// c = 5;

// if (a === b && b === c && a === c) {
//   console.log(`${a}, ${b}, ${c} bərabərtərəflidir`);
// } else console.log(`${a},${b},${c} bərabərtəfəli deyil`);

// if ((a === b && b !== c) || (b === c && b !== a) || (a === c && a !== b)) {
//   console.log("bərabəryanlıdır");
// } else {
//   console.log("bərabəryanlı deyil");
// }

// IX. question) Ayın adlarına uyğun olaraq neçə gündən ibarət olduğunu cavablandıran alqoritm tərtib edin.
// Alqoritm  Switch Case  vasitəsi yazılsın.

// Məsələn: month="january" dedikdə cavab "january has 31 days",
// month="february" dedikdə cavab "february has 28 days" şəklində olsun

let month = "november";
switch (month) {
  case "january":
  case "march":
  case "may":
  case "jule":
  case "august":
  case "october":
  case "december":
    console.log(`${month} has 31 days`);
    break;
  case "february":
    console.log(`${month} has 28 or 29 days`);
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    console.log(`${month} has 30 days`);
    break;

  default:
    console.log(`${month} adinda ad yoxdur`);
    break;
}

// X. 3 rəqəmli hər hansı bir ədəd verilib.
// Həmin ədədin rəqəmlərindən ibarət olan max və min ədədlərini tapın

let number = 904;

let a = number % 10; // 4
let b = ((number % 100) - a) / 10;
let c = (number - b * 10 - a) / 100;

console.log(a);
console.log(b);
console.log(c);

if (a >= b && a >= c) {
  if (b >= c) {
    console.log("MAX", `${a}${b}${c}`);
    console.log("MIN", `${c}${b}${a}`);
  } else {
    console.log("MAX", `${a}${c}${b}`);
    console.log("MIN", `${b}${c}${a}`);
  }
} else if (b >= a && b >= c) {
  if (a >= c) {
    console.log("MAX", `${b}${a}${c}`);
    console.log("MIN", `${c}${a}${b}`);
  } else {
    console.log("MAX", `${b}${c}${a}`);
    console.log("MIN", `${a}${c}${b}`);
  }
} else {
  if (a >= b) {
    console.log("MAX", `${c}${a}${b}`);
    console.log("MIN", `${b}${a}${c}`);
  } else {
    console.log("MAX", `${c}${b}${a}`);
    console.log("MIN", `${a}${b}${c}`);
  }
}

let numb = 456 + "";

// console.log([...numb].sort().reverse().toString());

// let max, min;

// max = Math.max(...numb);
// min = Math.min(...numb);

// console.log(max);
// console.log(min);

// XII. İstifadəçidən 3 dəyər alın bunlardan ikisi rəqəm, biri isə riyazi əməl olsun.
// Riyazi əmələ görə rəqəmlər üzərində əməliyyat aparsın.
// Riyazi əməllər toplama,çıxma,vurma və bölmə olacaq.Bu dörd əməldən başqası daxil edilərsə console "Zəhmət olmasa düzgün əməl daxil edin yazılsın."
// Taskı switch-case ilə yazın.

// let num1 = +window.prompt("enter first numner");
// let num2 = +window.prompt("enter second numner");
// let operator = window.prompt("enter operator");

// let result = 0;

// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     break;
//   case "-":
//     result = num1 - num2;
//     break;
//   case "*":
//     result = num1 * num2;
//     break;
//   case "/":
//     result = num1 / num2;
//     break;

//   default:
//     result = "Belə əməliyyat yoxdur!";
//     break;
// }

// console.log(result);


