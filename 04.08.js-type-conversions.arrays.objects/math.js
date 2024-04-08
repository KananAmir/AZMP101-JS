let result;

result = Math.abs(-13);
result = Math.pow(2, 8);
result = Math.ceil(34.234); //35
result = Math.floor(34.234); //34
result = Math.round(34.534); //35
result = Math.trunc(34.934); //34
result = Math.trunc(34.134); //34
result = Math.min(3, 72, 4, 9, 222, 0); //0
result = Math.max(3, 72, 44, 9, 222, 0); //222
result = Math.sqrt(9); //3
result = Math.sqrt(121); //11
result = Math.sqrt(121); //11
result = Math.cbrt(64); //4

// result = Math.random() * 10;
// result = Math.floor(Math.random() * 10);
// result = Math.floor(Math.random() * (max-min) + min);
// result = Math.floor(Math.random() * (40-10) + 10);
result = Math.floor(Math.random() * 10 + 10);

console.log(result);

let otp = Math.floor(Math.random() * 9000 + 1000);

console.log(otp);
