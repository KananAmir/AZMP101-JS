import { getAllData, getDataById } from "./services.js";

const favCards = document.querySelector(".fav-cards");

let user = null;
let userId = null;
let products = null;
window.addEventListener("load", function () {
  getProducts();
  //   userId = getUserIdFromLocalStorage();
  userId = localStorage.getItem("userId");

  getUser();
});

const getUser = async () => {
  const response = await getDataById("users", userId);
  user = response.data;
  console.log(user.favorites);
  renderFavs(user);
};

async function getProducts() {
  try {
    const response = await getAllData("products");

    products = response.data;
  } catch (error) {
    console.log(error);
  } finally {
  }
}

function renderFavs(u) {
  u.favorites.forEach((q) => {
    const favProducts = products.find((p) => p.id === q);
    favCards.innerHTML += `
           <div class="col col-12 col-md-6 col-lg-4">
        <div class="card" style="width: 18rem">
          <img src="${favProducts.image}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${favProducts.title}</h5>
            <p class="card-text">
             Price: ${favProducts.price}
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
      `;
  });
}
function getUserIdFromLocalStorage() {
  return localStorage.getItem("userId");
}
