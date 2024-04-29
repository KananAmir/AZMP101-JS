import products from "./data.js";
const productDetail = document.querySelector(".product-detail");

const url = new URLSearchParams(window.location.search);

const id = url.get("id");

const product = products.find((q) => q.id == id);

console.log(product);

productDetail.innerHTML = `
<div class="card" style="width: 18rem">
<img src="${product.imageUrl}" class="card-img-top" alt="..." />
<div class="card-body">
  <h5 class="card-title">${product.title}</h5>
  <p class="card-text">
  ${product.description}
  </p>
  <p>Price: ${product.price}</p>
  <button class="go-back">Go Back</button>
</div>
</div>
`;

const goBackBtn = document.querySelector(".go-back");

goBackBtn.addEventListener("click", function () {
  window.history.back();
});
