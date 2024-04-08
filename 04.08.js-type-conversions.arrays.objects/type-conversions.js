// JavaScript Implicit Conversion

let result;

// Implicit Conversion to String
// result = "3" + 2;
// console.log(result); // "32"

// result = "3" + true;
// console.log(result); // "3true"

// result = "3" + undefined;
// console.log(result); // "3undefined"

// result = "3" + null;
// console.log(result); // "3null"

//Implicit Conversion to Number
// result = "4" - "2";
// console.log(result); // 2

// result = "4" - 2;
// console.log(result); // 2

// result = "a" * 2;
// console.log(result); // 8

// result = "4" / 2;
// console.log(result); // 2

//Non-numeric String Results to NaN

// result = "a" * 4; //NaN
// result = "a" - 3; //NaN
// result = 15 / "a5"; //NaN

//Implicit Boolean Conversion to Number
// if boolean is used, true is 1, false is 0

result = "4" - true;
console.log(result); // 3

result = 4 + true;
console.log(result); // 5

result = 4 + false;
console.log(result); // 4

result = "4" + true;
console.log(result); //  "4true"

// null is 0 when used with number

result = 4 + null;
console.log(result); // 4

result = 4 - null;
console.log(result); // 4

// Arithmetic operation of undefined with number, boolean or null gives NaN

result = 4 + undefined;
console.log(result); // NaN

result = 4 - undefined;
console.log(result); // NaN

result = true + undefined;
console.log(result); // NaN

result = null + undefined;
console.log(result); // NaN

// JavaScript Explicit Conversion

// result = Number("6"); //6
// result = Number(null); //0
// result = Number(NaN); //NaN
// result = Number(undefined); //NaN
result = Number("hello"); //NaN

console.log(parseInt("12.37")); //12
console.log(parseInt("75.1234")); //75
console.log(parseFloat("75.1234")); //75
console.log(result);

let a = 34.567245;

console.log(a.toFixed(2)); //34.57 - string
console.log(+a.toFixed(3)); //34.577 - number

//number to string
result = String(324);
console.log(result); // "324"

//boolean

result = Boolean(" "); //false
result = Boolean(null); //false
result = Boolean(undefined); //false
result = Boolean(NaN); //false
result = Boolean(0); //false

result = Boolean(" "); //true
result = Boolean("salam"); //true
result = Boolean([]); //true
result = Boolean(432); //true
result = Boolean(-432); //true
