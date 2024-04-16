function capitalizeEachWord(sentence) {
  let arr = sentence.toLowerCase().split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i][0].toUpperCase() + arr[i].slice(1));
  }
  return newArr.join(" ");
}

console.log(capitalizeEachWord("hello hOw arE u?"));
console.log(capitalizeEachWord("lorem ipsum dolor"));
