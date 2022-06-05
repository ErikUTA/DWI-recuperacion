// filter - The find function returns the first element that meets the condition.
// use case: show first number greater than 18.

const numbers = [10, 18, 19, 20];
const found = numbers.find(element => element > 18);
console.log(found);
