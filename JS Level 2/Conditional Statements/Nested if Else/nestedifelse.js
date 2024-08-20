const marks = 79;

if(marks >= 33){
    document.write("Congratulations, You have passed the examination");
    document.write("<br>");
    if(marks >= 80){
        document.write("Congratulations, You have Grade A");
    }
    else{
        document.write("Congratulations, You have Grade B");
    }
}
else{
    document.write("Better luck next time!");
}