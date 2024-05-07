import { useState } from "react";
import { Student } from "../../classes";

const AddStudent = ({ students, setStudents }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gpa, setGpa] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();
    const student = new Student(name, email, gpa);
    setStudents([...students, student]);
    console.log(students);
    setName("");
    setGpa(0);
    setEmail("");
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <br />
      <input
        type="email"
        placeholder="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <br />
      <input
        type="number"
        placeholder="gpa"
        onChange={(e) => {
          setGpa(e.target.value);
        }}
        value={gpa}
      />
      <br />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddStudent;
