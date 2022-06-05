// filter - The filter function allows us to create a new array with the elements that meet the given condition.
// use case: show people over 18 years old.

const persons = [20, 17, 19, 15];
const accepted = persons.filter(element => element > 18);
console.log(accepted);
