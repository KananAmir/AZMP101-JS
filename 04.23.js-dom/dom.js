// console.log("hello");

const wrapper = document.querySelector(".wrapper");

// const img = document.createElement("img");

// img.setAttribute(
//   "src",
//   "https://media.licdn.com/dms/image/D4D12AQF_pE4edl4ycA/article-cover_image-shrink_600_2000/0/1689574697691?e=2147483647&v=beta&t=udHmk5Qf-vfxRot9ovIonD3QvdicVIdcnRZXTwAIHMA"
// );

// img.setAttribute("alt", "js dom");
// img.setAttribute("width", "400");
// img.setAttribute("height", "200");

// const inputElem = document.createElement("input");
// // wrapper.appendChild(img);
// inputElem.setAttribute("placeholder", "username");
// // wrapper.append(img, inputElem);
// wrapper.prepend(img);
// wrapper.prepend(inputElem);

// wrapper.innerHTML = `
//     <img width="400" height="200" src="https://media.licdn.com/dms/image/D4D12AQF_pE4edl4ycA/article-cover_image-shrink_600_2000/0/1689574697691?e=2147483647&v=beta&t=udHmk5Qf-vfxRot9ovIonD3QvdicVIdcnRZXTwAIHMA" />
//     <input placeholder="username"/>
// `;

const list = document.querySelector(".list");

console.log(list.hasAttribute("id"));
console.log(list.hasAttribute("type"));
console.log(list.getAttribute("type"));
console.log(list.getAttribute("class"));

list.removeAttribute("type");

const primaryBtn = document.createElement("button");
primaryBtn.setAttribute("class", "primary-btn");
primaryBtn.textContent = "Click";
// const style = {
//   color: "red",
//   border: "1px solid teal",
// };
primaryBtn.style.color = "teal";
primaryBtn.style.border = "1px solid teal";
primaryBtn.style.borderRadius = "5px";
primaryBtn.style.padding = "5px 20px";
primaryBtn.style.cursor = "pointer";
const line = document.createElement("hr");

wrapper.append(primaryBtn, line);

// console.log(wrapper.className);
//add, remove, toggle, contains

wrapper.classList.add("bg-green");
console.log(wrapper.classList.contains("test")); //true
console.log(wrapper.classList.contains("bg-green")); //true

wrapper.classList.remove("test");
console.log(wrapper.className);

const toogleBgBtn = document.querySelector(".toggle-bg");

toogleBgBtn.addEventListener("click", function () {
  //custom toogle
  //   if (document.body.classList.contains("bg-orange")) {
  //     document.body.classList.remove("bg-orange");
  //   } else {
  //     document.body.classList.add("bg-orange");
  //   }
  document.body.classList.toggle("bg-orange");
});

// window.addEventListener("scroll", function (e) {
//   document.body.classList.toggle("bg-orange", window.scrollY > 100);
//   console.log(window.scrollY);
// });

const parag = document.querySelector(".text");

console.log(getComputedStyle(parag).color);
console.log(getComputedStyle(parag).backgroundColor);
