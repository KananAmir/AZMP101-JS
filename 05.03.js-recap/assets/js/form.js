const form = document.querySelector("form");
const allInputs = document.querySelectorAll("input");
const category = document.querySelectorAll("#category");
import { Product } from "./classes.js";
import { addNewData, getDataById, updateDataById } from "./services.js";

const url = new URLSearchParams(window.location.search);
const id = url.get("id");
console.log(id);

function fillForm(productObj) {
  allInputs[0].value = productObj.title;
  allInputs[1].value = productObj.price;
  allInputs[2].value = productObj.description;
  allInputs[3].value = productObj.image;
  category[0].value = productObj.category;
  console.log(category[0]);
}
async function getProduct() {
  const response = await getDataById("products", id);
  //   console.log(response.data);
  fillForm(response.data);
}

window.addEventListener("load", function () {
  getProduct();
});
form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("hi");

  const product = new Product(
    allInputs[0].value,
    allInputs[1].value,
    allInputs[2].value,
    category[0].value,
    allInputs[3].value
  );

  console.log(product);

  if (!id) {
    addNewData("products", product);
  } else {
    updateDataById("products", id, product);
  }
});
