//array methods

//length

const students = ["riad", "parvan", "murad", "ali", "nijat"];

// students.length = 0;

// console.log(students.length);
// console.log(students.toString());
// console.log(students.at(0)); //riad
// console.log(students.at(students.length - 1)); //nijat

// console.log(students.join());
// console.log(students.join("-"));
// console.log(students.join("#"));
// console.log(students.join(" "));

// students.pop();
// console.log(students.pop());

// students.push("seymur");

console.log(students.push("seymur"));

students.shift();
students.unshift("rafail");
console.log(students);

const nums1 = [1, 2, 3, 4];
const nums2 = [, 3, 5, 4, 5, 6];
console.log(nums1.concat(nums2));
console.log([...nums1, ...nums2]);

// students.reverse();
// console.log(students);

// console.log(students.slice(0));
// console.log(students.slice(0, 5));
// console.log(students.slice(-1));

let arr = [1, 2, [3, 4, [5, 6]]];

// console.log(arr.flat());
// console.log(arr.flat(2));

//splice

console.log(students);

// students.splice(3, 1);
// students.splice(3, 1, "aysel");
// students.splice(3, 0, "aysel");
const newStudens = students.toSpliced(3, 0, "aysel", "javidan");

console.log(students);
console.log(newStudens);

// JavaScript Array Search

const allNums = [...nums1, ...nums2];

console.log(allNums.indexOf(33)); //-1
console.log(allNums.indexOf(3));
console.log(allNums.indexOf(3, 5));
console.log(allNums.lastIndexOf(3));
console.log(allNums.includes(3));
console.log(allNums.includes(33));

//interations

// for (let i = 0; i < students.length; i++) {
//   console.log(students[i]);
// }

// students.forEach((item, index, array) => {
//   //   console.log(item);
//   //   console.log(array);
//   console.log(`${index}. ${item}`);
// });
const newArr = students.map((item, index, array) => {
  //   console.log(item);
  //   console.log(array);
  return `${index}. ${item}`;
});

console.log(newArr);

// console.log(
//   students.map((item, index, array) => {
//     // return item.toUpperCase();
//     return (
//       item[0].toUpperCase() +
//       item.slice(1, item.length - 1) +
//       item.at(-1).toUpperCase()
//     );
//   })
// );
console.log(
  students.map(
    (item, index, array) =>
      item[0].toUpperCase() +
      item.slice(1, item.length - 1) +
      item.at(-1).toUpperCase()
  )
);

let countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
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

const updatedCountries = countries.map((item) =>
  item.slice(0, 3).toUpperCase()
);

console.log(updatedCountries);

// console.log(countries.filter((item) => item.toLowerCase()[0] == "a"));
// console.log(
//   countries.filter(
//     (item) =>
//       item.toLowerCase()[0] == "a" && item.toLowerCase()[item.length - 1] == "a"
//   )
// );
console.log(
  countries.filter(
    (item) =>
      item.toLowerCase().startsWith("a") && item.toLowerCase().endsWith("a")
  )
);

const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Elnara", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];

// const result = [];

// for (let i = 0; i < employees.length; i++) {
//   if (employees[i].salary > 60000) {
//     result.push(employees[i]);
//   }
// }

// const result = employees.filter((q) => q.salary > 60000);
const result = employees.filter((element) => element.salary > 60000);
console.log(result);

//find

console.log(students.find((item) => item.toLowerCase().startsWith("a")));

console.log(employees.find((item) => item.department.toLowerCase() === "it"));
console.log(employees.filter((item) => item.department.toLowerCase() === "it"));
//sort

// sort by number

const numbers = [1, 4, 50, 455, 100, 25];
// console.log(students.sort());

// console.log(numbers.sort());

// const ascNumbers = numbers.soret((a, b) => {
//   return a - b;
// });
console.log(numbers);

const ascNumbers = numbers.sort((a, b) => a - b);
// const descNumbers = numbers.sort((a, b) => b - a);

console.log(ascNumbers);
// console.log(descNumbers);

console.log(employees.sort((a, b) => a.salary - b.salary));
console.log(employees.sort((a, b) => b.salary - a.salary));

// sort by string

// asc
// console.log(employees.sort((a, b) => (a.name > b.name ? 1 : -1)));
console.log(
  employees.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  })
);
// desc

console.log(employees.sort((a, b) => (b.name > a.name ? 1 : -1)));

// asc
console.log(employees.sort((a, b) => a.name.localeCompare(b.name)));
// desc
console.log(employees.sort((a, b) => b.name.localeCompare(a.name)));
