let arr = [
  {
    name: "test",
    key: 1,
  },
  {
    name: "task",
    key: 2,
  },
  {
    name: "tanqo",
    key: 3,
  },
  {
    name: "likel",
    key: 4,
  },
  {
    name: "task",
    key: 5,
  },
  {
    name: "trust",
    key: 6,
  },
  {
    name: "test",
    key: 7,
  },
  {
    name: "last",
    key: 8,
  },
  {
    name: "tanqo",
    key: 9,
  },
  {
    name: "elephant",
    key: 10,
  },
  {
    name: "love",
    key: 11,
  },
  {
    name: "small",
    key: 12,
  },
  {
    name: "little",
    key: 13,
  },
];

// 1) "name"-i "t" herfi ile bashlayan obyektleri yeni arraya yigin (filter)

// let filtered = arr.filter((item) => item.name.toLowerCase().startsWith("t"));

// 2) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin sayini tapin (forEach)
// let filtered = arr.filter(
//   (item) =>
//     item.name.toLowerCase().startsWith("t") &&
//     item.name.toLowerCase().endsWith("t")
// );

// console.log(filtered);
// console.log(filtered.length);

// let count = 0;
// arr.forEach((item, i, arr) => {
//   if (
//     item.name.toLowerCase().startsWith("t") &&
//     item.name.toLowerCase().endsWith("t")
//   ) {
//     count++;
//   }
// });

// console.log(count);

// 3) "name"-i "t" herfi ile bashlayib "t" herfi ile biten obyektlerin "key"- lerinin cemini tapin
// let filtered = arr.filter(
//   (item) =>
//     item.name.toLowerCase().startsWith("t") &&
//     item.name.toLowerCase().endsWith("t")
// );
// console.log(filtered.reduce((sum,item)=>sum+item.key , 0));

// let result = arr
//   .filter(
//     (item) =>
//       item.name.toLowerCase().startsWith("t") &&
//       item.name.toLowerCase().endsWith("t")
//   )
//   .reduce((sum, item) => sum + item.key, 0);
// console.log(result);

// 4) "name"-i "e" herfi ile biten obyeklerdeki name-in deyerini "SuperDev" sozu ile evezleyin.

// arr.forEach((item) => {
//   if (item.name.toLowerCase().endsWith("e")) {
//     // console.log(item);
//     item.name = "SuperDev";
//   }
// });
// console.log(arr);
// 5) "name"-i en uzun olan obyekti tapin

// let maxLength = arr[0];
// arr.forEach((item) => {
//   if (item.name.length > maxLength.name.length) {
//     maxLength = item;
//   }
// });
// console.log(maxLength);
// 6) "name"-i en uzun olan obyektin key'ni tapin
// console.log(maxLength.key);

// 7)  "name"-i en uzun olan obyektin indexin kvadratini hesablayin
// let maxLength = arr[0];
// let maxIndex = 0;
// arr.forEach((item, index) => {
//   if (item.name.length > maxLength.name.length) {
//     maxLength = item;
//     maxIndex = index;
//   }
// });
// console.log(maxIndex);

// 8) "name"-inin uzunlugu 4 olan obyektlerden ibaret yeni array yaradin. (filter)
// let result = arr.filter((item) =>{
//     if(item.name.length===4) {
//         return item
//     }
// })
let result = arr.filter((item) => item.name.length === 4);
console.log(result);

// 9)  en boyuk "key" - i olan obyektin "name"-i ni tapin
let bigKeyElem = arr[0];
arr.forEach((item) => {
  if (item.key > bigKeyElem.key) {
    bigKeyElem = item;
  }
});
console.log(bigKeyElem.key);
console.log(bigKeyElem);
console.log(bigKeyElem.name);

// 10) terkibinde 2 'l' (el) herfi olan obyekt(ler)in index(ler)ini tapin.
let resultItems = [];

for (let i = 0; i < arr.length; i++) {
  let count = 0;
  for (let j = 0; j < arr[i].name.length; j++) {
    if (arr[i].name.toLocaleLowerCase()[j] == "l") {
      count++;
    }
  }

  if (count == 2) {
    resultItems.push(arr[i]);
  }
}

console.log(resultItems);
console.log(arr);
// 10) keylərin cəmini tapın

console.log(arr.reduce((sum, item) => sum + item.key, 0));

// 11) terkibinde ən az 2 't' herfi olan obyekt(ler)i tapın.
console.log(
  arr.filter(
    (item) =>
      item.name.toLowerCase().indexOf("t") !==
      item.name.toLowerCase().lastIndexOf("t")
  )
);

// 12) key'leri 10'dan boyuk ve "name"-i 'l' herfi ile bashlayan obyektleri tapaq
let filteredObject = arr.filter(
  (obj) => obj.key > 10 && obj.name.startsWith("l")
);
console.log(filteredObject);

let mixedArr = [1, null, 15, true, false, undefined, "salam", NaN, 77];


