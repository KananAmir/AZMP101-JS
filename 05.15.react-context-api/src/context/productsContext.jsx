import { createContext, useEffect, useState } from "react";
import { getAllData } from "../api";
import { endpoints } from "../api/constant";

export const ProductsContext = createContext(null);

const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    getAllData(endpoints.products).then((res) => {
      setProducts(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;
