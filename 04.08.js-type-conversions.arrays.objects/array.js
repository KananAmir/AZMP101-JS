// const arr = new Array();
const arr = new Array(5);

// console.log(arr);
// console.log(arr[0]);
const students = ["Ali", "Nijat", "Aysel", "Javidan", "Parvin"];

const emptyArr = [];

//length
// console.log(students);
console.log(students.length); //5
console.log(students[0]); //Ali
console.log(students[5]); //undefined
console.log(students[4]); //Parvin
console.log(students[students.length]); //undefined
console.log(students[students.length - 1]); //Parvin

let numbers = [11, 52, 23, 5, 96, 6];

// sum of array elements
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  //   console.log(i);
  //   console.log(numbers[i]);

  sum += numbers[i];
}

console.log(sum);

let copyStudents = students; //shallow copy

copyStudents[0] = "Murad";
// console.log(students);
console.log(students);

const tech = ["html", "css", "js", "react", "redux"];

const techCopy = [...tech];

techCopy[1] = "scss";
console.log(tech);
console.log(techCopy);

let nums = [1, 2, 3];

nums.length = 2;
nums.length = 0;
console.log(nums);

let countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "andorra",
  "Angola",
  "Anguilla",
  "Antigua &amp; Barbuda",
  "Argentina",
  "Aruba",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bermuda",
  "Bhutan",
  "Bolivia",
  "Bosnia",
  "Botswana",
  "Brazil",
  "British Virgin Islands",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Cape Verde",
  "Cayman Islands",
  "Chad",
  "Chile",
  "China",
  "Colombia",
  "Congo",
  "Cook Islands",
  "Costa Rica",
  "Cote D Ivoire",
  "Croatia",
  "Cruise Ship",
  "CUBA",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Estonia",
  "Ethiopia",
  "Falkland Islands",
  "Faroe Islands",
  "Fiji",
  "Finland",
  "France",
  "French Polynesia",
  "French West Indies",
  "Gabon",
  "Gambia",
  "Georgia",
  "Germany",
  "Ghana",
  "Gibraltar",
  "Greece",
  "Greenland",
  "Grenada",
  "Guam",
  "Guatemala",
  "Guernsey",
  "Guinea",
  "Guinea Bissau",
  "Guyana",
  "HAITI",
  "Honduras",
  "Hong Kong",
  "Hungary",
  "Iceland",
  "INDIA",
  "Indonesia",
];

// for (let i = 0; i < countries.length; i++) {
//   if (countries[i][0] === "A") console.log(countries[i]);
// }

for (let i = 0; i < countries.length; i++) {
  if (
    countries[i][0].toLowerCase() === "a" &&
    countries[i][countries[i].length - 1].toLowerCase() === "a"
  ) {
    console.log(countries[i]);
  }
}
