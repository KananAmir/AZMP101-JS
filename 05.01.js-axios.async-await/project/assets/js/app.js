import { BASE_URL } from "./constant.js";

const tBody = document.querySelector("tbody");
const form = document.querySelector("#customer-form");
const allInputs = document.querySelectorAll("input");

async function getAllData() {
  try {
    const response = await axios(`${BASE_URL}/customers`);
    renderTable(response.data);
  } catch (error) {
    console.log(error);
  }
}

async function deleteDataById(id) {
  try {
    const response = await axios.delete(`${BASE_URL}/customers/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function addNewData(payload) {
  try {
    const response = await axios.post(`${BASE_URL}/customers`, payload);
    return response;
  } catch (error) {
    console.log(error);
  }
}

getAllData();

function renderTable(array) {
  tBody.innerHTML = "";
  array.forEach((element) => {
    const trElem = document.createElement("tr");
    trElem.innerHTML = `
        <td>${element.id}</td>
        <td>${element.companyName}</td>
        <td>${element.contactTitle}</td>
        <td>${element.address?.street}</td>
        <td>${element.address?.city}, ${element.address?.country}</td>
        <td><button class="btn btn-danger delete" data-id="${element.id}">DELETE</button><button class="btn btn-success edit" data-id="${element.id}">EDIT</button></td>
        <td><a class="btn btn-primary" href="details.html?id=${element.id}">DETAILS</a></td>
    `;
    tBody.append(trElem);
  });

  const allDeleteBtns = document.querySelectorAll(".delete");

  //   console.log(allDeleteBtns);

  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      deleteDataById(id).then((res) => {
        // console.log(res);
        if (res.status === 200) {
          this.closest("tr").remove();
          Toastify({
            text: "Customer deleted successfully!!",
            duration: 3000,
            // destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function () {}, // Callback after click
          }).showToast();
        }
      });
    });
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const customer = {
    companyName: allInputs[0].value,
    contactTitle: allInputs[1].value,
    address: {
      street: allInputs[2].value,
      city: allInputs[3].value,
      country: allInputs[4].value,
    },
  };

  addNewData(customer).then((res) => {
    if (res.status === 201) {
      getAllData();
      Toastify({
        text: "Customer added successfully!!",
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();
    }
  });
});
