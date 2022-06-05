// reduce - The function "reduce" allows us to add the values of an array and then return them.
// use case: show last week's sales total.

const sales = [1000, 5000, 8000, 2000];
const initialValue = 0;
const sumAllSales = sales.reduce(
    (prev, current) => prev + current, initialValue
);
console.log(sumAllSales);
