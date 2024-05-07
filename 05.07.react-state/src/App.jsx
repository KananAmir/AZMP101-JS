import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Counter from "./components/Counter";
import Counter2 from "./components/Counter2";
import AddStudent from "./components/add-student";
import StudentsTable from "./components/StudentsTable";
import TodoApp from "./components/TodoApp";

// hooks: useState, useEffect, useRef, useMemo, useCallback

function App() {
  const [name, setName] = useState("Shams");
  const [cardStatus, setCardStatus] = useState(false);

  const [students, setStudents] = useState([]);
  console.log("component rendered");
  // let name = "Shams";

  console.log(cardStatus);
  return (
    <>
      <h2>Student Name: {name}</h2>
      <button
        onClick={() => {
          setName("Parvan");
        }}
      >
        Change
      </button>
      <hr />
      <button
        onClick={() => {
          setCardStatus(true);
        }}
      >
        Show Card
      </button>
      <button
        onClick={() => {
          setCardStatus(false);
        }}
      >
        Hide Card
      </button>

      <hr />
      <button
        onClick={() => {
          setCardStatus(!cardStatus);
        }}
      >
        Toggle Card
      </button>
      <hr />
      {cardStatus && (
        <Card
          product={{ name: "Asus", price: 1900, desc: "lorem ipsum dolor" }}
        />
      )}
      <hr />
      {/* <Counter /> */}
      <Counter2 />
      {/* ADD STUDENT EXAMPLE */}
      <hr />
      <AddStudent students={students} setStudents={setStudents} />
      <hr />
      <StudentsTable students={students} setStudents={setStudents} />

      <hr />
      <TodoApp />
    </>
  );
}

export default App;
