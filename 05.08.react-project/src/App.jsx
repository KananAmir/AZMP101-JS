import { useEffect, useState } from "react";
import "./App.css";
import controller from "./services";
import ProductsTable from "./components/ProductsTable";
import AddProduct from "./components/AddProduct";

function App() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    controller.getAllData("products").then((res) => {
      setProducts(res.data);
    });
  }, []);

  return (
    <>
      <h2>Add Product</h2>
      <AddProduct products={products} setProducts={setProducts} />
      <h2>Products Table</h2>
      <ProductsTable products={products} setProducts={setProducts} />
    </>
  );
}

export default App;
