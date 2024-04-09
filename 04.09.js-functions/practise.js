//polidrom

let str = "madam";
let num = 123454321;

let reverseStr = "";

for (let i = str.length - 1; i >= 0; i--) {
  // console.log(str[i]);
  reverseStr += str[i];
}

console.log(str);
console.log(reverseStr);

if (str === reverseStr) {
  console.log(`${str} is polidrom`);
} else {
  console.log(`${str} is NOT polidrom`);
}

let polidromStr = "aabbbaa";

// console.log([...polidromStr]);
// console.log(polidromStr.split(""));

console.log(polidromStr.split("").reverse().join("") === polidromStr);

//nested loop

for (let i = 1; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    // console.log(`${i}, ${j}`);
  }
}

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

//find max length country
let maxLengthCountry = countries[0];

for (let i = 0; i < countries.length; i++) {
  if (countries[i].length > maxLengthCountry.length) {
    maxLengthCountry = countries[i];
  }
}

console.log(maxLengthCountry);

// adinda ən çox "a" olan ölkə

let maxACountry = countries[0];
let maxCount = 0;

for (let i = 0; i < countries.length; i++) {
  let countA = 0;

  for (let j = 0; j < countries[i].length; j++) {
    if (countries[i][j].toLocaleLowerCase() === "a") {
      countA++;
    }
  }

  if (countA > maxCount) {
    maxCount = countA;
    maxACountry = countries[i];
  }
}
console.log(maxACountry);
