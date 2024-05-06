import "./App.css";
import Button from "./components/Button";
import Main from "./components/Main";
import Wellcome from "./components/Wellcome";
import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import { nanoid } from "nanoid";
import { products } from "./data";
import ProductLists from "./components/ProductLists";
import ProductListItem from "./components/ProductListItem";

function App() {
  // console.log(products);
  let userName = "Jhon Doe";
  let student1 = {
    id: nanoid(),
    firstName: "Ali",
    lastName: "Zeynal",
    gpa: 3.2,
  };
  let student2 = {
    id: nanoid(),
    firstName: "Seymur",
    lastName: "Hasan",
    gpa: 3.7,
  };
  let student3 = {
    id: nanoid(),
    firstName: "Nijat",
    lastName: "Huseyn",
    gpa: 3.5,
  };
  return (
    <>
      <Header />
      <main>
        {/* <Button /> */}
        {/* 
        <Wellcome name="Riad" surname="Gafar" />
        <Wellcome name="Ali" surname="Jalil" />
        <Wellcome name="Parvin" surname="Alasgar" /> */}
        <Wellcome studentObj={student1} />
        <Wellcome studentObj={student2} />
        <Wellcome studentObj={student3} />

        <hr />
        {/* prop drilling */}
        <Main userName={userName} age={34} />

        <hr />

        {/* <ProductLists products={products} /> */}

        <ProductLists>
          {products &&
            products.map((product) => {
              return <ProductListItem product={product} />;
            })}
        </ProductLists>
      </main>
      <Footer />
    </>
  );
}

export default App;

// function getStudentInfo(student) {
//   return `Wellcome ${student}`;
// }

// getStudentInfo("Riad")
