import React, { useState } from "react";
import controller from "../../services";

const AddProduct = ({ products, setProducts }) => {
  const [product, setProduct] = useState({
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await controller.addNewData("products", product);
    if (res.status === 201) {
      controller.getAllData("products").then((res) => {
        setProducts(res.data);
        //   setProducts([...products, product]);
      });
    }
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => setProduct({ ...product, title: e.target.value })}
      />
      <br />
      <br />
      <input
        type="number"
        placeholder="price"
        onChange={(e) =>
          setProduct({ ...product, price: e.target.valueAsNumber })
        }
      />
      <br />
      <br />
      <select
        name=""
        id=""
        onChange={(e) => setProduct({ ...product, category: e.target.value })}
      >
        <option value="" selected hidden>
          SELECT CATEGORY
        </option>
        <option value="electronics">Electronics</option>

        <option value="jewelery">Jewelery</option>

        <option value="women's clothing">Women's clothing</option>

        <option value="men's clothing">Mens's clothing</option>
      </select>
      <br />
      <br />
      <input
        type="text"
        placeholder="description"
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
      />
      <br />
      <br />
      <input
        type="text"
        placeholder="iamge"
        onChange={(e) => setProduct({ ...product, image: e.target.value })}
      />
      <br />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddProduct;
