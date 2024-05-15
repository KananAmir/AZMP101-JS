import axios from "axios";
import { BASE_URL } from "./constant";

// get all data
export async function getAllData(endpoint) {
  try {
    const response = await axios(`${BASE_URL}/${endpoint}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

// get one data by id

export async function getDataById(endpoint, id) {
  try {
    const response = await axios(`${BASE_URL}/${endpoint}/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

//delete data by id

export async function deleteDataById(endpoint, id) {
  try {
    const response = await axios.delete(`${BASE_URL}/${endpoint}/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

//add new data

export async function addNewData(endpoint, payload) {
  try {
    const response = await axios.post(`${BASE_URL}/${endpoint}`, payload);
    return response;
  } catch (error) {
    console.log(error);
  }
}
