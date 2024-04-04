//Arithmetic Operators
let sum, division, multiply, subtruct, number1, number2;

number1 = 20;
number2 = 15;

sum = number1 + number2;
subtruct = number1 - number2;
multiply = number1 * number2;
division = number1 / number2;
remainder = number1 % number2;

console.log("SUM ", sum);
console.log("SUBTRUCT ", subtruct);
console.log("MULTIPLY ", multiply);
console.log("DIVISION ", division);
console.log("REMAINDER ", remainder);

console.log("SQUARE OF NUMBER1 ", number1 ** 2);

let count = 0;

// count = count + 1;
// count++;

console.log(count);

// Assignment Operators

let c = 0;

// c = c + 10;
c += 10;

console.log(c);

// JavaScript Comparison Operators

console.log(4 == 4); //true
console.log(4 == "4"); //true
console.log(4 === "4"); //false

console.log(0 == false); // true
console.log(0 === false); // false

console.log(4 != 3); //true
console.log(4 > 3); //true
console.log(4 >= 3); //true
console.log(4 < 3); //false
console.log(4 <= 3); //false

let firstName = "Riad";
let lastName = "Gafarzada";

let fullName = firstName + " " + lastName;
console.log(fullName);

// JavaScript Logical Operators

// && , ||, !

console.log(true && false); //false
console.log(true && true); //true
console.log(true || false);

console.log("hello" && 54 && "Ali"); //Ali
console.log("hello" && 0 && "Ali"); //0
console.log(undefined && 0 && "Ali"); //undefined
console.log("undefined" && "0" && NaN); //NaN
console.log("undefined" && 0 && "Ali"); //0

console.log("hello" || 54 || "Ali"); //hello
console.log(null || 0 || "Ali"); //Ali
console.log(undefined || "0" || "Ali"); // "0"
console.log("undefined" || "0" || NaN); //"undefined"
console.log(false || 0 || null); //null

// not operator

let bool = true;
console.log(bool); //true
console.log(!bool); //false
// falsy values

null, undefined, NaN, 0, -0, false, 0n, "";

// truth values

// if (true)
// if ({})
// if ([])
// if (42)
// if ("0")
// if ("false")
// if (new Date())
// if (-42)
// if (12n)
// if (3.14)
// if (-3.14)
// if (Infinity)
// if (-Infinity)
