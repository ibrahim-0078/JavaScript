const max = prompt("Enter your maximum number");
const random = Math.floor(Math.random() * max) + 1;
// console.log(random);

let guess = prompt("guess the number");
while(true) {
    if(guess == "quit"){
        console.log("user Quit!");
        break;
    }
    else if (guess == random){
        console.log("congrats! you guess the right number." , "random number was : ", random);
        break;
    }
    else if (guess < random){
        guess = prompt("Hint : Your guess was too small. Try again");
    }
    else{
        guess = prompt(" Hint : your guess was too large. Try again");
    }
}