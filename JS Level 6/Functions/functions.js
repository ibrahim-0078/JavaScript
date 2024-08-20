// Functions => are block of code which is used to perform some specific tasks.=> bhtt sary block of code bar bar likhny ki ju effort huti h ussy bachny ky liy hum funtctions use krty hain
document.write("<h2>Poem</h2>");
function poem(){
    document.write("twinkle twinkle ,little star <br>");
    document.write("how i wonder, what you are <br>");
    document.write("up above the world, so high <br>");
    document.write("like a diamond, in the sky");
}
poem();
// Print a Random number
document.write("<br> <h2>Random number</h2>");
function rollDice(){
    
    let random = Math.floor(Math.random() * 6) + 1;
    document.write(random);
}
rollDice();
document.write("<br> <h2>About Me</h2>");

// Functions with Arguments|Parameters => are values we pass to the function in the form of variables.
function aboutMe(name , age){
    document.write(`${name}'s age is ${age}`);
}
aboutMe("ibrahim", 23);
document.write("<br>");

function sum(a , b){
    document.write(a+b);
}
sum(25,75);
document.write("<br>");

function calAvg(a , b, c){
    let avg = (a+b+c)/3;
    document.write(avg);
}
calAvg(2,3,4);
document.write("<br>");
calAvg(25,75,30);

// Print Multiplication Table of a number
document.write("<br> <h2>Multiplication Table of a Number</h2>");

function printTable(n){
    for(let i=n; i<=n*10; i+=n){
        document.write(`${i}<br>`);
    }
}
printTable(2);
document.write("<br>");
printTable(20);


