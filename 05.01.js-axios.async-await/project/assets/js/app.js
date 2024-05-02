import { BASE_URL } from "./constant.js";

const tBody = document.querySelector("tbody");
const form = document.querySelector("#customer-form");
const allInputs = document.querySelectorAll("input");
const searchInput = document.querySelector("#search");
const addEditBtn = document.querySelector("#add-edit");

let editStatus = false;
let editId = null;
let customers = null;

async function getAllData() {
  try {
    const response = await axios(`${BASE_URL}/customers`);
    customers = response.data;
    renderTable(response.data);
  } catch (error) {
    console.log(error);
  }
}
getAllData();

// console.log(customers);

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
async function updateDataById(id, payload) {
  try {
    const response = await axios.patch(`${BASE_URL}/customers/${id}`, payload);
    return response;
  } catch (error) {
    console.log(error);
  }
}

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
        <td><button class="btn btn-danger delete" data-id="${element.id}">DELETE</button>
        <button class="btn btn-success edit" data-id="${element.id}">EDIT</button></td>
        <td><a class="btn btn-primary" href="details.html?id=${element.id}">DETAILS</a></td>
    `;
    tBody.append(trElem);
  });

  const allDeleteBtns = document.querySelectorAll(".delete");
  const allEditBtns = document.querySelectorAll(".edit");

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

  allEditBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = this.getAttribute("data-id");
      const customer = customers.find((q) => q.id === id);
      // console.log(customerObj);
      fillForm(customer);
      addEditBtn.textContent = "EDIT";
      editStatus = true;
      editId = id;
      console.log("editId", editId);
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

  if (!editStatus) {
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
  } else {
    updateDataById(editId, customer).then((res) => {
      if (res.status === 200) {
        getAllData();
        Toastify({
          text: "Customer updated successfully!!",
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

    addEditBtn.textContent = "ADD";
    editStatus = false;
    editId = null;
  }

  resetForm();
});

// searchInput.addEventListener("input", async function (e) {
//   // console.log(e.target.value);
//   try {
//     const response = await axios(`${BASE_URL}/customers`);

//     const filtered = response.data.filter((item) =>
//       item.companyName
//         .toLowerCase()
//         .trim()
//         .includes(e.target.value.toLowerCase().trim())
//     );
//     console.log(filtered);
//     // renderTable();
//   } catch (error) {
//     console.log(error);
//   }
// });

searchInput.addEventListener("input", async function (e) {
  // console.log(customers);
  const filtered = customers.filter((item) =>
    item.companyName
      .toLowerCase()
      .trim()
      .includes(e.target.value.toLowerCase().trim())
  );

  // console.log(filtered);
  renderTable(filtered);
});

function fillForm(customerObj) {
  allInputs[0].value = customerObj.companyName;
  allInputs[1].value = customerObj.contactTitle;
  allInputs[2].value = customerObj.address?.street;
  allInputs[3].value = customerObj.address?.city;
  allInputs[4].value = customerObj.address?.country;
}

function resetForm() {
  allInputs.forEach((input) => {
    input.value = "";
  });
}
