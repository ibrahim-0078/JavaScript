// unshift Method => add to the start of Array
let cars = ["Audi","Civic","Mercedes","Supra"];
cars.unshift("Toyota");
document.write(`carsName = ${cars}`);

document.write("<br>");

// shift Method => delete from the start and returns it
let carsName = ["Audi","Civic","Mercedes","Supra"];
// delete from the start
carsName.shift();
// add to the start
// carsName.unshift("BMW");
document.write(`carsName = ${carsName}`);

document.write("<br>");

let followers = ["ibrahim","sheraz","saad","faizan"];
let blocked = followers.shift();
document.write(`followers : ${followers}`);
document.write("<br>");
document.write(`Blocked Followers : ${blocked}`);



