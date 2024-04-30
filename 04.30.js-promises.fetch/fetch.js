import { BASE_URL } from "./contstant.js";
//fetch

//api - application proggramming interface

// console.log(fetch("https://northwind.vercel.app/api/suppliers"));

//http request methods: get, delete, post, put, patch
//get data
fetch(`${BASE_URL}/suppliers`, {
  method: "GET",
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//get data by id

function getDataById(id) {
  fetch(`${BASE_URL}/suppliers/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// getDataById(8);

function deleteDataById(id) {
  fetch(`${BASE_URL}/suppliers/${id}`, {
    method: "DELETE",
  })
    .then((res) => console.log(res))
    .catch((err) => {
      console.log(err);
    });
}

// deleteDataById(7);

//add new data

function addNewData(payload) {
  fetch(`${BASE_URL}/suppliers`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(payload),
  });
}

const newSupplier = {
  companyName: "Code MMC",
  contactName: "code edu az",
  address: "AF Business House",
};

// addNewData(newSupplier);
// addNewData({ companyName: "azmp101" });

//update data by id with put

function updateDataById(id, payload) {
  fetch(`${BASE_URL}/suppliers/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(payload),
  });
}

updateDataById(4, {
  companyName: "Riyad",
  contactName: "Gafarvv mmc",
  contactTitle: "code",
});
updateDataById(8, {
  companyName: "Javidan",
  contactName: "Peter Wilson",
  contactTitle: "Sales Representative",
  address: {
    street: "28 may",
    city: "Manchester",
    region: "NULL",
    postalCode: "M14 GSD",
    country: "UK",
    phone: "(161) 555-4448",
  },
});

//update data by id with patch

function updateDataByIdOnlySpecificFileds(id, payload) {
  fetch(`${BASE_URL}/suppliers/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => {
      return res;
    })
    .catch((err) => {
      console.log(err);
    });
}

updateDataByIdOnlySpecificFileds(5, { contactName: "Hello" });
