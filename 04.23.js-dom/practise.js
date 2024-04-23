const students = [
  { id: 1, name: "ali", score: 88 },
  { id: 2, name: "nijat", score: 70 },
  { id: 3, name: "shams", score: 45 },
  { id: 4, name: "murad", score: 67 },
];

const ulElem = document.createElement("ul");
ulElem.setAttribute("class", "student-lists");
document.body.append(ulElem);
// students.forEach((student) => {
//   const liElem = document.createElement("li");
//   liElem.textContent = `${student.name[0].toUpperCase()}${student.name.slice(
//     1
//   )}`;

//   liElem.addEventListener("click", function () {
//     // console.log(this.textContent);
//     this.remove();
//   });
//   //   console.log(liElem);

//   ulElem.append(liElem);
// });
// students.forEach((student) => {
//   const liElem = document.createElement("li");
//   const spanElem = document.createElement("span");
//   spanElem.textContent = `${student.name[0].toUpperCase()}${student.name.slice(
//     1
//   )}`;
//   const deleteBtn = document.createElement("button");
//   deleteBtn.textContent = "delete";

//   deleteBtn.addEventListener("click", function () {
//     // this.parentElement.remove();
//     this.closest("li").remove();
//   });
//   liElem.append(spanElem, deleteBtn);
//   ulElem.append(liElem);
// });

const header = document.createElement("header");
const containerDiv = document.createElement("div");
// containerDiv.className = "container";
// containerDiv.classList.add("container");
containerDiv.setAttribute("class", "container");
const headerDiv = document.createElement("div");
headerDiv.setAttribute("class", "header");

const logo = document.createElement("h1");
logo.style.color = "#fff";
logo.style.fontSize = "2.5rem";
logo.textContent = "Azmp101";
const navElem = document.createElement("nav");

const listElem = document.createElement("ul");
listElem.setAttribute("class", "list");
ulElem.innerHTML = `
    <li>
         <a href="#">About</a>
    </li>
    <li>
         <a href="#">Team</a>
    </li>
    <li>
         <a href="#">Contact</a>
    </li>
`;
navElem.append(ulElem);
headerDiv.append(logo, navElem);
header.append(containerDiv);
containerDiv.append(headerDiv);
document.body.prepend(header);
