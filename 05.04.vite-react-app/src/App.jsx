import { Fragment } from "react";
import "./App.css";
import Card from "./components/card";
import Footer from "./layouts/footer";
import Header from "./layouts/header";

function sum(a, b) {
  return a + b;
}
sum(1, 2);
function App() {
  // jsx - javascript xml
  //prop - properties (js object)
  let number = 15;
  return (
    <>
      <Header />
      <main>
        <hr />
        <h1>Hello React JS</h1>
        <Card title={"asus"} />
        <Card title={"dell"} />
        <Card title={"lenova"} />
        <hr />
        <p>number is {number}</p>
      </main>
      <Footer />
    </>
  );
}

export default App;
