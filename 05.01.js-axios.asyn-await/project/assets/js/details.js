import { BASE_URL } from "./constant.js";
const detail = document.querySelector(".detail");
const url = new URLSearchParams(window.location.search);

const id = url.get("id");

console.log(id);

async function getDataById() {
  try {
    const response = await axios(`${BASE_URL}/customers/${id}`);
    // console.log(response.data);
    drawCard(response.data);
  } catch (error) {}
}

getDataById();

function drawCard(customer) {
  detail.innerHTML = `
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${customer.companyName}</h5>
        <p class="card-text">street: ${customer.address?.street}</p>
        <p class="card-text">city: ${customer.address?.city}</p>
        <p class="card-text">country: ${customer.address?.country}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>
  `;
}
