import { getDataById } from "./services.js";

// const BASE_URL = "https://northwind.vercel.app/api";

// axios(`${BASE_URL}/customers`).then((res) => {
//   console.log(res.data);
// });

//async await

// async function getAllData() {
//   const response = await axios(`${BASE_URL}/customers`);
//   console.log(response);
// }
// async function getAllData() {
//   try {
//     const response = await axios(`${BASE_URL}/customers`);
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   } finally {
//   }
// }

// getAllData();

getDataById("products", 8)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// async function getData() {
//   const res = await getDataById("products", 8);
//   console.log(res.data);
// }

// getData();
