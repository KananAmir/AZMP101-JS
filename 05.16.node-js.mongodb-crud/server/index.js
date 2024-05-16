const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 8000;

// const Schema = mongoose.Schema;

const { Schema } = mongoose;

const ProductSchema = new Schema(
  {
    title: { type: String, require: true },
    price: { type: Number, require: true },
    description: { type: String, require: true },
    image: { type: String, require: true },
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.mongoose.model("Products", ProductSchema);

//get all data
app.get("/api/products", async (req, res) => {
  try {
    const products = await ProductModel.find({});

    if (products.length > 0) {
      res.status(200).send({ message: "success", data: products });
    } else {
      res.status(204).send({ message: "empty data" });
    }
  } catch (error) {
    res.status(500).message({ message: error.message });
  }
});

// get data by id
app.get("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const product = await ProductModel.findById(id);
    if (product) {
      res.status(200).send({ message: "success", data: product });
    } else {
      res.status(404).send({ message: "not found", data: null });
    }
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.delete("/api/products/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedProduct = await ProductModel.findByIdAndDelete(id);
    const products = await ProductModel.find({});

    res.status(200).send({
      message: "deleted successfully",
      deletedProduct: deletedProduct,
      allProducts: products,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

// add new data

app.post("/api/products", async (req, res) => {
  try {
    const newProduct = new ProductModel({ ...req.body });
    await newProduct.save();
    const products = await ProductModel.find({});

    res.status(201).send({
      message: "created succesfully",
      newProduct: newProduct,
      allProducts: products,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

//update data
app.patch("/api/products/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await ProductModel.findByIdAndUpdate(id, { ...req.body });
    const updatedProduct = await ProductModel.findById(id);
    res.send({
      message: "updated succesfully!",
      updatedProduct: updatedProduct,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
});

app.put("/api/products/:id", (req, res) => {});

mongoose
  .connect(DB_URL)
  .then(() => {
    console.log("Connected!");
    app.listen(PORT, () => {
      console.log(
        `Example app listening on port ${PORT}, base url is http://localhost:${PORT}/`
      );
    });
  })
  .catch((err) => {
    console.log(err);
  });
