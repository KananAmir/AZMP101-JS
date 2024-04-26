//get data from local
export function getDataFromLocalStorage() {
  return JSON.parse(localStorage.getItem("todos")) || [];
}

//add data to local
export function setTodosToLocalStorage(arr) {
  localStorage.setItem("todos", JSON.stringify(arr));
}
