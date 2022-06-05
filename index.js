// findIndex - The "FindIndex" function returns the index of the element that meets the given condition.
// use case: Obtain the name of the customer with name "Erik".

const names = ["Juan", "Fernanda", "Erik", "Eduardo"];
const index = names.findIndex(i => i === "Erik");
console.log(index);
console.log(names[index]);