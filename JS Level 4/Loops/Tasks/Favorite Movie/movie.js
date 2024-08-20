 alert("Guess my favorite movie");

 const favMovie = "avengers";

 let guess = prompt("Guess my favorite Movie");

 while(guess != favMovie){

   if(guess == "quit"){
      alert("Oops! You quit the game");
      // break keyword => it stops the loop execution and get out of the loop
      break;
   }

    guess = prompt("Oops! wrong guess, Please try Again OR write 'quit' to quit the game");
 }
 
 if(guess == favMovie){
   alert("Congratulations! Your guess is correct. ");
}