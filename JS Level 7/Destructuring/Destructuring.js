// Destructuring => it stores the values of array Or object into multiple variables.

// Destructuring with Arrays
let names = ["ibrahim","saad","sheraz","faizan"];
// let winner = names[0];
// let runnerUp = names[1];
// let secondWinner = names[2];
// let secondRunnerUp = names[3];
let [winner, runnerUp, ...others] = names; // ...others => using rest operator
console.log(winner);
console.log(runnerUp);
console.log(others);

// Destructuring with Objects
const student = {
    name : "ibrahim",
    age : 23,
    department : "ADPCS",
    subjects : ["HTML","CSS","JS","react js","MONGODB","node js"],
    username : "ibrahim12",
    password : "abcd1234"
};
// let {username , password} = student;
// console.log(username);  
// console.log(password);  

let {username : user , password : pass , subjects, ...remaining} = student;
console.log(user);  
console.log(pass);  
console.log(subjects);  
console.log(remaining);