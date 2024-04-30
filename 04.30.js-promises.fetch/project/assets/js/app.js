import { BASE_URL } from "./constant.js";

const tBody = document.querySelector("tbody");
const form = document.querySelector("#customer-form");
const allInputs = document.querySelectorAll("input");

const getAllData = (endpoint) => {
  fetch(`${BASE_URL}/${endpoint}`).then((res) =>
    res.json().then((data) => {
      //   console.log(data);
      renderTable(data);
    })
  );
};

getAllData("customers");

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
        <td><button class="btn btn-danger delete" data-id="${element.id}">DELETE</button></td>
        <td><a class="btn btn-primary" href="details.html?id=${element.id}">DETAILS</a></td>
    `;
    tBody.append(trElem);
  });

  const allDeleteBtns = document.querySelectorAll(".delete");

  //   console.log(allDeleteBtns);

  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (window.confirm("are u sure to delete customer??")) {
        const id = this.getAttribute("data-id");

        fetch(`${BASE_URL}/customers/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            //   console.log(res);
            if (res.status === 200) {
              // this.parentElement.parentElement.remove();
              this.closest("tr").remove();
            } else {
              alert("404 not found");
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
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

  //   console.log(customer);

  fetch(`${BASE_URL}/customers`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(customer),
  })
    .then((res) => {
      if (res.status === 201) {
        getAllData("customers");
      }
    })
    .catch((err) => {
      console.log(err);
    });
});
