const BASE_URL = "https://northwind.vercel.app/api";

function getData(endpoint) {
  fetch(`${BASE_URL}/${endpoint}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

// getData("suppliers");
// getData("products");
// getData("orders");
// getData("customers");

//get all data
axios(`${BASE_URL}/suppliers`)
  .then((response) => {
    console.log(response.data);
  })
  .catch((err) => {
    console.log(err);
  });

//delete data by id

function deleteDataById(endpoint, id) {
  //   axios.delete(BASE_URL + "/" + endpoint + "/" + id);
  axios.delete(`${BASE_URL}/${endpoint}/${id}`).then((res) => {
    console.log(res);
  });
}

// deleteDataById("suppliers", 4);

//add new data

function addNewData(endpoint, payload) {
  axios.post(`${BASE_URL}/${endpoint}`, payload).then((res) => {
    console.log(res);
  });
}

addNewData("suppliers", { companyName: "code edu az" });

function updateDataById(endpoint, id, payload) {
  axios.put(`${BASE_URL}/${endpoint}/${id}`, payload).then((res) => {
    console.log(res);
  });
}
// updateDataById("suppliers", 12, {
//   companyName: "Aysel",
//   contactName: "frontend",
//   contactTitle: "axios",
// });
function updateDataByIdWidthPatch(endpoint, id, payload) {
  axios
    .patch(`${BASE_URL}/${endpoint}/${id}`, payload)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
}

updateDataByIdWidthPatch("suppliers", 13, {
  companyName: "Aysel",
  contactName: "frontend",
  contactTitle: "axios",
  address: {
    street: "M.A.Sabir 13",
  },
});
