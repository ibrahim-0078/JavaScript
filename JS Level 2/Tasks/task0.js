let str = "banana";

if(str[0] == 'a' && str.length > 3){
    document.write("Good String");
}
else{
    document.write("Not a Good String");
}

document.write("<br>");

let num = 15;

if((num % 3 == 0) && ((num +1 == 15 || num -1 == 14))){
    document.write("Code Executed Successfully")
}
else{
    document.write("Code unSuccessFull");
}