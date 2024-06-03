import "./App.css";
import Counter from "./components/UseReducer/Counter";
import TodoApp from "./components/UseReducer/TodoApp";
import CardComp from "./components/UseRef";
// import Counter from "./components/Counter";

function App() {
  return (
    <>
      <CardComp />
      <hr />
      <Counter />
      <hr />
      <TodoApp />
    </>
  );
}

export default App;
