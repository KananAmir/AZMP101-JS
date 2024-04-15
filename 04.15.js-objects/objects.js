const obj = new Object();

const arr = new Array(5);
// console.log(obj);

// let str = new String("hello");

// let userName = "Javidan";
// console.log(str);

const product = {
  productName: "Asus Zenbook 14",
  price: 5000,
  category: "tech",
};

console.log(product);

const student = {
  firstName: "Nijat",
  "first name": "Huseynov",
  birthDate: 2001,
  skills: ["html", "css", "js"],
  city: "London",
  education: {
    uniName: "AZMIU",
    faculty: "IT",
    tqdkScore: 455,
    gpa: 3.5,
  },
  //   getFullName: () => {
  //     return `${this.firstName} ${this.lastName}`;
  //   },
  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },
  calcAge: function (currentYear) {
    return currentYear - this.birthDate;
  },
};
student.nationality = "azerbaijan";
delete student.city;
console.log(student.city);
console.log(student.birthDate);
student.birthDate = 2003;
console.log(student.birthDate);
// console.log(student.lastName);
// console.log(student.education);
// console.log(student.education.tqdkScore);

// console.log(student.getFullName());
// console.log(student.calcAge(2024));
// console.log(student.skills);
// console.log(student["skills"]);
// console.log(student["first name"]);

console.log(student);

//function constructor

function User(userId, userName, email, isAdmin = false) {
  //constructor
  this.userId = userId;
  this.userName = userName;
  this.email = email;
  this.isAdmin = isAdmin;
}

const aysel = new User(22, "aysel_mammad", "aysel@code.edu.az");
const ali = new User(33, "ali_jalilov", "ali@code.edu.az");

console.log(aysel);
console.log(ali);

//keys, values,entries, hasOwnPropery

console.log(Object.keys(student));
console.log(Object.values(student));
console.log(Object.entries(student));
console.log(student.hasOwnProperty("test")); //false
console.log(student.hasOwnProperty("skills")); //true

const newStudent = Object.create(student);

console.log(newStudent);

function Human(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

function Employee(employeeId, salary, position) {
  this.employeeId = employeeId;
  this.salary = salary;
  this.position = position;
}

// setprototypof

const human = new Human("parvin", "alasgar");

const parvin = new Employee(11, 2000, "developer");
const seymur = new Employee(22, 10000, "designer");

Object.setPrototypeOf(parvin, human);

console.log(human);
console.log(parvin);

Object.setPrototypeOf(seymur, new Human("seymur", "hasanzada"));

console.log(seymur);
