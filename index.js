// Hoisting - Thanks to hoisting we can use function variables before declaring them in the code.
// use case: Calculate the sum of the sides of a triangle.

const sides = [10, 10];
function calculateSides(side) {
    console.log("sum of the sides: " + (sides[0] + sides[1] + side));
}

calculateSides(10);