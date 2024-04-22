class Animal {
  age;
  static id = 1;
  constructor(name, birthDate, gender, hasChild = false) {
    this.name = name;
    this.birthDate = birthDate;
    this.gender = gender;
    if (this.getAge() > 0) {
      this.age = this.getAge();
    } else {
      this.age = 0;
    }
    // this.id = ++Animal.id;
    this.id = Date.now();
    this.hasChild = hasChild;
  }
  getAge() {
    return new Date().getFullYear() - this.birthDate;
  }
}
class Cat extends Animal {
  constructor(name, birthDate, gender, weight, color, hasChild) {
    super(name, birthDate, gender, hasChild);
    this.weight = weight;
    this.color = color;
  }

  getInfo() {
    return `name is ${this.name}, birthDate is ${this.birthDate}, color is ${this.color}`;
  }
}

const cat = new Cat("garfield", 2007, "male", "6.7kq", "orange");
const animal = new Animal("garfield", 2017, "femail");

console.log(cat);
// console.log(cat.getInfo());
// console.log(cat.getAge());
console.log(cat.age);

const employees = [
  { name: "Jamil", salary: 50000, department: "IT" },
  { name: "Jale", salary: 60000, department: "HR" },
  { name: "Bayram", salary: 55000, department: "IT" },
  { name: "Sahil", salary: 75000, department: "HR" },
  { name: "Maryam", salary: 65000, department: "IT" },
  { name: "Elnara", salary: 80000, department: "HR" },
  { name: "Davud", salary: 70000, department: "IT" },
];

const ascBySalaray = [...employees].sort((a, b) => a.salary - b.salary);
const descBySalaray = [...employees].sort((a, b) => b.salary - a.salary);
const ascByName = [...employees].sort((a, b) => a.name.localeCompare(b.name));
const descByName = [...employees].sort((a, b) => b.name.localeCompare(a.name));

// console.log(descBySalaray);
console.log(ascByName);
console.log(descByName);
// console.log(employees);
