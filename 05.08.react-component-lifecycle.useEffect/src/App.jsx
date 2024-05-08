import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import CustomersTable from "./components/CustomersTable";
import "bootstrap/dist/css/bootstrap.min.css";

//component lifecycle
// component mounting/updating/unmouinting
function App() {
  const [show, setShow] = useState(false);

  function showOrHideCard() {
    setShow(!show);
  }
  return (
    <>
      <Header />
      <hr />
      <button onClick={showOrHideCard}>Toggle</button>
      {show && <Card />}
      <hr />
      <CustomersTable />
      <Footer />
    </>
  );
}

export default App;
