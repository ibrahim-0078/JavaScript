// spread Operator => it allows you to spread (expand) the elements of an iterable(such as arrays, strings, or objects) into another iterable or function call.

// iterable => iterable kisi b cheez ko krny ka matlb hota h ky uspr hum loop chla skhty hain ur 1 1 krky uski values ko access kr skhty hai.

// let arr = [3,6,7,3,10,4,2];
// document.write(Math.max(...arr), "<br>");
// document.write(Math.min(...arr));

// Spread Operator with strings

// let chars = [..."ibrahim"];
// console.log(chars);

// Spread Operator with Array Literals

// let arr = [1,2,3,4,5];
// let newArr = [...arr];
// console.log(newArr);

// let odd = [1,3,5,7,9];
// let even = [2,4,6,8,10];
// let newArr = [...odd, ...even];
// let newArr = [10,...odd,50,...even,90];
// console.log(newArr);

// Spread Operator with Object Literals

// let obj1 =[
//     {
//         name : "ibrahim",
//         age : 23
//     }
// ];
// let obj2 = [
//     {
//         name : "saad",
//         age : 21
//     }
// ];
// let newObj = [...obj1 ,...obj2];
// console.log(newObj);

// let obj3 = {
//     name : "ibrahim",
//     age : 23
// };
// let newObj = {country : "Pakistan", ...obj3 , id : 20};
// console.log(newObj);