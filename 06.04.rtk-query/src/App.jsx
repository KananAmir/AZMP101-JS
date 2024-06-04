import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Categories from "./components/Categories";
import CategoryDetails from "./components/CategoryDetails";
import AddCategory from "./components/AddCategory";
import EditCategory from "./components/EditCategory";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Categories />} />
          <Route path="/:id" element={<CategoryDetails />} />
          <Route path="/add" element={<AddCategory />} />
          <Route path="/add/:id" element={<EditCategory />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
