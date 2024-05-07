import React from "react";
import { AiFillDelete } from "react-icons/ai";

const StudentsTable = ({ students, setStudents }) => {
  //   console.log("students", students);

  const handleDelete = (id) => {
    // console.log(id);
    setStudents([...students].filter((q) => q.id !== id));
  };
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Student Name</th>
          <th>Email</th>
          <th>GPA</th>
        </tr>
      </thead>
      <tbody>
        {students.length !== 0 &&
          students.map((s) => {
            return (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.gpa}</td>
                <td>
                  <button onClick={() => handleDelete(s.id)}>
                    <AiFillDelete />
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default StudentsTable;
