const productForm = document.querySelector("form");
const allInputs = document.querySelectorAll("input");
const products = [];
// console.log(allInputs);
class Product {
  constructor(
    productName,
    category,
    unitPrice,
    stockCount,
    description,
    imageUrl
  ) {
    this.productName = productName;
    this.category = category;
    this.unitPrice = unitPrice;
    this.stockCount = stockCount;
    this.description = description;
    this.imageUrl = imageUrl;
    this.id = Date.now();
  }
}
productForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const product = new Product(
    allInputs[0].value,
    allInputs[1].value,
    allInputs[2].value,
    allInputs[3].value,
    allInputs[4].value,
    allInputs[5].value
  );

  let validate = Array.from(allInputs).every((input) => input.value);

  //   console.log(validate);
  //   console.log(product);

  if (validate) {
    products.push(product);
    drawTable(products);
  } else {
    window.alert("inputs can not be empty!");
  }

  console.log(products);
  resetInputFields();
});

function resetInputFields() {
  allInputs.forEach((input) => {
    input.value = "";
  });
}

const tBody = document.querySelector("tbody");

function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((product) => {
    const trElem = document.createElement("tr");

    trElem.innerHTML = `
    <td>${product.id}</td>
    <td>${product.productName}</td>
    <td>${product.category}</td>
    <td>${product.unitPrice}</td>
    <td>${product.stockCount}</td>
    <td>${product.description}</td>
    <td><img src="${product.imageUrl}"></td>
    `;

    tBody.append(trElem);
  });
}
