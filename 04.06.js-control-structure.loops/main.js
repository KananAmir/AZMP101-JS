let str = "code";

console.log(str.length); //4
console.log(str[0]); //c
// console.log(str[3]);
console.log(str[str.length - 1]); //e

let sampleText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis quam dolorem rem odit praesentium rerum sequi vero amet repellat incidunt esse vel, magni unde id, aspernatur possimus illo hic eius!`;

// console.log(sampleText[0]);

let count = 0;
for (let i = 0; i < sampleText.length; i++) {
  //   console.log(sampleText[i]);
  if (sampleText[i].toLowerCase() === "l") {
    count++;
  }
  //   console.log(count);
}

const students = ["Ali", "Nijat", "Riad", "Murad"];

// console.log(students[1]); //first item
// console.log(students[students.length - 1]); //last item

for (let i = 0; i < students.length; i++) {
  //   console.log(students[i]);
  console.log(`${i} - ${students[i]}`);
}

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }

let numbers = [1, 2, 4, 7, 3, 9, 5];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
  console.log(`SUM: ${sum}`);
}

// console.log(sum);

const scores = [55, 78, 90, 76, 50, 70];

let res = 0;
for (let i = 0; i < scores.length; i++) {
  res += scores[i];
}

let average = res / scores.length;
console.log("AVERAGE: ", average);

