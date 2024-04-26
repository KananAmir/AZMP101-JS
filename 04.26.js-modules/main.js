import { BASE_URL, className as sinif } from "./constant.js";
// import { className } from "./constant.js";
import { getDataFromLocalStorage, setTodosToLocalStorage } from "./helpers.js";
import students from "./constant.js";

console.log(BASE_URL);
console.log(sinif);
console.log(students);

setTodosToLocalStorage([1, 2, 3]);

console.log(getDataFromLocalStorage());

//default vs named imports/exports
