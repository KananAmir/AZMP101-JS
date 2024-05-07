import { nanoid } from "nanoid";

export class Student {
  constructor(name, email, gpa) {
    this.name = name;
    this.email = email;
    this.gpa = gpa;
    this.id = nanoid();
  }
}
