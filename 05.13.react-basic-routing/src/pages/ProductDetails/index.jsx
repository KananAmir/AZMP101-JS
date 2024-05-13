import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const BASE_URL = "https://fakestoreapi.com";

  const { id } = useParams();
  const navigate = useNavigate();

  async function getData(endpoind, productId) {
    try {
      const res = await axios(`${BASE_URL}/${endpoind}/${productId}`);
      setProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getData("products", id);
  }, []);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={product.image} width={50} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>{product.description}</Card.Text>
        <Button variant="primary" onClick={() => navigate("/products")}>
          Go Home
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductDetails;
