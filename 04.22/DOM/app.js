// DOM vs BOM
// DOM - Documnet Object Model
// BOM - Browser Object Model

// console.log(document);
// console.log(document.head);
// console.log(document.body);

// getElementById() – select an element by id.
// getElementsByName() – select elements by name.
// getElementsByTagName()  – select elements by a tag name.
// getElementsByClassName() – select elements by one or more class names.
// querySelector()  – select only one element by CSS selectors.
// querySelectorAll()  – select all elements by CSS selectors.

// const heading1 = document.getElementById("heading1");
// // heading1.textContent = "azmp101";
// console.log(heading1);

const userInputs = document.getElementsByName("user");

console.log(userInputs); //node list
console.log(userInputs[0]);
console.log(userInputs[1]);

const allHeading = document.getElementsByTagName("h1");

console.log(allHeading); //html collection
console.log(allHeading[0]);
// console.log(allHeading[2].textContent);

const texts = document.getElementsByClassName("text");

console.log(texts); //html collection
console.log(texts[0]); //html collection

// const heading = document.querySelector("#heading1");
// const heading = document.querySelector(".container #heading1");
const heading = document.querySelector(".container .heading");
const headings = document.querySelectorAll(".container .heading");

console.log(heading);
console.log(headings);

//click event

const clickBtn = document.querySelector(".click");

// clickBtn.addEventListener("click", function () {
//   console.log("clicked");
// });

// node lits vs html collection

// const allBtns = document.getElementsByTagName("button"); //html collection
const allBtns = document.querySelectorAll("button"); //node list

const btnsArray = Array.from(allBtns);
// console.log(allBtns);

// her ikisni for ilƏ dovre salmaq olur
// for (let i = 0; i < allBtns.length; i++) {
//   console.log(allBtns[i]);
// }

// btnsArray.forEach((btn) => {
//   console.log(btn);
// });

allBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // console.log(this.textContent);

    document.body.style.backgroundColor = this.textContent;
    console.log(this.parentElement.parentElement);
  });
});

const btnsWrapper = document.querySelector(".btns");

// console.log(btnsWrapper);
// console.log(btnsWrapper.parentElement);
// console.log(btnsWrapper.parentNode);

// console.log(btnsWrapper.childNodes);
// console.log(btnsWrapper.children);

// console.log(btnsWrapper.firstChild);
// console.log(btnsWrapper.firstElementChild);

// console.log(btnsWrapper.lastChild);
// console.log(btnsWrapper.lastElementChild);

// const btnYellow = document.querySelector(".yellow");

// console.log(btnYellow.nextSibling);
// console.log(btnYellow.nextElementSibling.textContent);

// console.log(btnYellow.parentElement);
// console.log(btnYellow.previousElementSibling.textContent);

//

const heading1 = document.querySelector("#heading1");
const parag = document.querySelector(".parag");
// innerHTML, textContent, innerText;

// console.log(heading1.textContent);
// console.log(heading1.innerText);
// console.log(heading1.innerHTML);

// parag.textContent = "hello azmp 101";
// parag.innerText = "hello azmp 101";
parag.innerHTML = `hello <strong>azmp 101</strong>`;
console.log(parag.text);

//Manipulating elements

//create element

const anchorElement = document.createElement("a");

anchorElement.textContent = "vikipedia";
anchorElement.setAttribute("href", "www.wikipedia.com");

// console.log(anchorElement);

document.body.append(anchorElement);
// document.body.prepend(anchorElement);
