// Scope => hummy batata ha ky kis variable ko kha pr use kia jha skhta ur kha pr nhi use kia jha skhta

// let sum = 50; // Global Scobe

function calSum(a,b){
    // Function Scope => Variables defined inside a function are not accessible (visible) from outside the function
    let sum = a+b; // Function Scope
    document.write(sum);
}
// document.write(sum);
calSum(10,8);
document.write("<br>");

// Block Scope => Variables declared inside a {} block cannot be accessed from outside the block
let age = 20;
if(age>=18){
    let str = "Adult";
    document.write(str);
}
// document.write(str);
document.write("<br>");

// Lexical Scope => A variable defined outside a function can be accessible inside another function defined after the variable  declaration

let greet = "hello"; // Globle Scope

function changeGreet(){
    let greet = "Asslam-u-Alikum" // Function Scope
    document.write(greet);

    function innerGreet(){  
        // let greet = "h1";
        document.write(greet); // Lexical Scope
    }
    document.write("<br>")
    innerGreet();
}
document.write(greet , "<br>");
changeGreet();