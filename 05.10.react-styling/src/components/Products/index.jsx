import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import ProductCard from "../ProductCard";
import { useEffect, useState } from "react";
import axios from "axios";
const Products = () => {
  const [products, setProducts] = useState(null);
  const [favs, setFavs] = useState(null);
  useEffect(() => {
    getData("products");
  }, []);

  const BASE_URL = "http://localhost:8080";
  async function getData(endpoint) {
    try {
      const response = await axios(`${BASE_URL}/${endpoint}`);
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div id="products" style={{ margin: "2rem 0" }}>
      <Container>
        <Grid container spacing={2}>
          {products &&
            products.map((product) => {
              return (
                <Grid item xs={12} md={6} lg={4} key={product.id}>
                  <ProductCard product={product} />
                </Grid>
              );
            })}
        </Grid>
      </Container>
    </div>
  );
};

export default Products;
