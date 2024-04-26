import products from "./data.js";

const tBody = document.querySelector("tbody");
const searchInput = document.querySelector("#search");
const ascPriceBtn = document.querySelector(".asc-price");
const descPriceBtn = document.querySelector(".desc-price");
const defaultBtn = document.querySelector(".default-price");
// console.log(products);

function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((element) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
    <td><img src="${element.imageUrl}"/></td>
    <td>${element.id}</td>
    <td>${element.title}</td>
    <td>${element.category}</td>
    <td>${element.description}</td>
    <td>${element.price}</td>
    `;

    tBody.append(trElem);
  });
}

drawTable(products);

searchInput.addEventListener("input", function (e) {
  //   console.log(e.target.value);

  const filtered = products.filter((product) =>
    product.title
      .trim()
      .toLowerCase()
      .includes(e.target.value.trim().toLowerCase())
  );

  //   console.log(filtered);
  drawTable(filtered);
});

ascPriceBtn.addEventListener("click", function () {
  const sorted = [...products].sort((a, b) => a.price - b.price);

  drawTable(sorted);
});
descPriceBtn.addEventListener("click", function () {
  const sorted = [...products].sort((a, b) => b.price - a.price);

  drawTable(sorted);
});

defaultBtn.addEventListener("click", function () {
  drawTable(products);
});
