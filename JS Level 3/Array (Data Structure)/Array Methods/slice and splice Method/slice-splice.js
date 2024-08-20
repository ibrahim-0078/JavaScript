// slice Method => copies a portion of an Array => cannot change in Original Array

let cars = ["Audi","Civic","Mercedes","Supra"];
// slice => (startindex,endingindex)
// let slice = cars.slice();
// let slice = cars.slice(1);
let slice = cars.slice(2,4);
// let slice = cars.slice(-1;
// let slice = cars.slice(-3,-1);
document.write(`carsSlice = ${slice}`);

document.write("<br>");

// splice Method => removes , replace , add elements in Array and returns a new Arr

let carsName = ["Audi","Civic","Mercedes","Supra"];
// splice => (startindex,deleteCount,item...itemN)
// let splice = carsName.splice(2);
// let splice = carsName.splice(0,1);
let splice = carsName.splice(0,3,30,"BMW");
document.write(`carsSplice = ${splice}`);
document.write("<br>");
document.write(`carsName = ${carsName}`);