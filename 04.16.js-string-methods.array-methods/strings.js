// const students = ["ali", "seymur", "parvin", "elmeddin"];

// students[0] = "nijat";

// students.push("riad");

// console.log(students);
let str = "Javascript";

//strings are immutable

console.log(str.length); // 10
console.log(str.charAt(1));
console.log(str.at(1));
console.log(str.at(-1));
console.log(str.charAt(str.length - 1));
console.log(str[1]);
console.log(str.charCodeAt(1)); //97

console.log(str.slice()); //Javascript
console.log(str.slice(0)); //Javascript
console.log(str.slice(0, 4)); //Java
console.log(str.slice(4)); //script
console.log(str.slice(-6)); //script
console.log(str.slice(-4, -1)); //script

console.log(str.substr(0, 4)); //Java -- !depreciated
console.log(str.substring(4)); //script
console.log(str.substring(0, 4)); //Java

console.log(str.toLowerCase());
console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());
console.log(str.toLocaleUpperCase("az"));

let firstName = "Ali";
let lastName = "Aliyev";
console.log(lastName.concat(" ", firstName));

let searchValue = "     Iphone         ";

console.log(searchValue.trimStart());
console.log(searchValue.trimEnd());
console.log(searchValue.trim());

console.log(str.padStart(15, "*"));
console.log(str.padEnd(15, "*"));

let cardNum = 4169737702617503 + "";

console.log(cardNum.slice(-4).padStart(16, "*"));

console.log(str.repeat(3));

console.log(str.replace("Java", "type"));
console.log(str.replace("a", "b"));
console.log(str.replaceAll("a", "b"));

// console.log(str.split());
console.log(str.split(""));
console.log("hypertext markup languale".split(" "));
console.log("1,2,3,4,5".split(","));

console.log([...str]);

console.log(Array.from(str));

let sampleText = `lorem 
ipsum
dolor
`;

console.log(sampleText);
console.log(`${firstName} ${lastName}`);
console.log("lorem 'ipsum'");
console.log('lorem "ipsum"');
console.log("`salam`");

//string search methods

console.log(str.indexOf("a"));
console.log(str.indexOf("a", 2));
console.log(str.lastIndexOf("a"));

console.log(str.indexOf("Ja"));
console.log(str.search("java")); //-1
console.log(str.search("Java")); //0
console.log(str.search("va")); //2
console.log(str.search("p")); //2
console.log(str.search(/[A-Z]/)); //2
console.log(str.search(/[0-9]/)); //2

const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
const found = paragraph.match(regex);

console.log(found);
// Expected output: Array ["T", "I"]

const message = "JavaScript is a fun programming language.";

// regular expression that checks if message contains 'programming'
const exp = /programming/;

// check if exp is present in message
let result = message.match(exp);
console.log(result);

/*
Output: [
  'programming',
  index: 20,
  input: 'JavaScript is a fun programming language.',
  groups: undefined
  ]
*/

console.log(str.includes("z"));
console.log(str.includes("a"));
console.log(str.toLowerCase().includes("j"));

console.log(str.startsWith("Java"));
console.log(str.toLowerCase().startsWith("j"));
console.log(str.endsWith("t"));
console.log(str.endsWith("script"));
console.log(str.endsWith("a"));
