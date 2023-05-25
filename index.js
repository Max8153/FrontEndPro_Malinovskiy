const userInput = prompt("Enter some numbers, symbols or words divided with space");
const array = userInput.split(" ");
console.log(array);
array.sort();
console.log(array);
array.splice(1, 3);
console.log(array);