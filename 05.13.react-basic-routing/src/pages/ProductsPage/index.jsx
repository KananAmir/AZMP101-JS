import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const ProductsPage = () => {
  const BASE_URL = "https://fakestoreapi.com";

  const [products, setProducts] = useState([]);

  async function getData(endpoind) {
    try {
      const res = await axios(`${BASE_URL}/${endpoind}`);
      setProducts(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData("products");
  }, []);

  console.log(products);
  return (
    <ul>
      {products.length > 0 &&
        products.map((p) => {
          return (
            <li key={p.id}>
              <span>{p.title}</span>
              <Button>
                <Link to={`/products/${p.id}`} style={{ color: "#fff" }}>
                  Details
                </Link>
              </Button>
            </li>
          );
        })}
    </ul>
  );
};

export default ProductsPage;
