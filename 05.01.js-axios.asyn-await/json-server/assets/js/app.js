const BASE_URL = "http://localhost:8080";

const getAllData = async (endpoint) => {
  try {
    const response = await axios(`${BASE_URL}/${endpoint}`);
    console.log(response.data);
  } catch (error) {}
};

getAllData("products");
getAllData("users");
