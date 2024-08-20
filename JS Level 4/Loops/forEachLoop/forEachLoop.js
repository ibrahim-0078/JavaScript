// for a given array of numbers. Print the square of each value using forEach Loop.

let nums = [2, 3, 4, 5, 6];
let calSquare = (num) =>{
    document.write(`square of each value = ${num**2}<br> `);
}
nums.forEach(calSquare);