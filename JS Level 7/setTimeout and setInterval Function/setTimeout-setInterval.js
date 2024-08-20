// setTimeout Function
console.log("hi ,there");
// callback => koi b aisa function hota hai ju kisi 2sry function my as a argument pass hota hai.
// setTimeout(func,timeout)
setTimeout(()=>{
console.log("my Website");
},1000);

console.log("Welcome! to");

// setInterval Function
let id = setInterval(()=>{
    console.log("welcome to my Website");
},2000);
// to stop the setInterval function
setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval run");
},5000);