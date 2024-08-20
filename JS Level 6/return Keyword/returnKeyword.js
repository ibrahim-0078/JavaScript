// return Keyword => is used to return some value from the function

function isAdult(age){
    if(age <= 18){
        return "not Adult";
    }
    else{
        return "adult";
    }
}
let age = isAdult(10);
document.write(age);

document.write("<br>");

// return sum of n value
function getSum(n){
    let sum = 0;
    for(let i=1; i<=n; i++){
        sum += i;
    }
    return sum;
}
let sum = getSum(5);
document.write(sum);

document.write("<br>");

// return a single string
let arr =["hi","hello","bye"];
function concat(arr){
    let result = "";
    for(let i=0; i<arr.length; i++){
        result += arr[i];
    }
    return result;
}
let str = concat(arr);
document.write(str);