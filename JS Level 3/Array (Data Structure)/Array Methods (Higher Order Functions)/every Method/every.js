// every method => like a AND logical operator => ye humy tbhi true return kerta hai gbh sary individual elements true hon => agr 1 b element false huwa tu humy false return kerta ha.

let nums = [2,4,6,8,10,1];
let find = nums.every((element)=>{
    return element % 2 == 0;
});
console.log(find);

// all numbers in our array are multiples of 10 Or not
// let nums = [10,20,30,40,50];
// let ten = nums.every((ele)=>{
//     return ele % 10 == 0;
// });
// console.log(ten);
