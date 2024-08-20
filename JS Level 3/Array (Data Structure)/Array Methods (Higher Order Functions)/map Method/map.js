// map Method => ye method hr element pr individually run hota ur fr wha sy ju value return huti h => yani 1 1 element ky liy ju value return huti h => us value ko store kr ky 1 naya array bnata hai => ur is new array ka same size hota h as my original array.
let num = [1,2,3,4,5];
let newArr = num.map((element) =>{
    return element ** element;
});
console.log(newArr);

// const students = [{
//     name : "faizan",
//     marks : 80
// },{
//     name : "saad",
//     marks : 70
// },{
//     name : "ibrahim",
//     marks : 75
// }];

// let newArr = students.map((element) =>{
//     return element.marks / 10;
// });
// console.log(newArr);