// Higher Order Functions => aisa function ju kisi 2sry function ko as a argument ly Or returns a function called higher order functions

// higher order functions ju input ly as a argument
let firstName = function(func,count){
    for(let i=1; i<=count; i++){
        func();
    }
}
let myName = function(){
    document.write(`My name is ibrahim <br>`);
}
firstName(myName,5);
document.write("<br>");

// higher order function return a function as an output
let request = "even";
function oddOrEvenFactory(request){
    if(request == "odd"){
        return function(n){
            document.write(!(n%2 == 0));
        }
    }
    else if(request == "even"){
        return function(n){
            document.write(n%2 == 0);
        }
    }
    else{
        document.write("wrong request");
    }
}
let func = oddOrEvenFactory(request);
document.write(func);