let lang = ["HTML","CSS","Bootstrap","Tailwind CSS","JS"];
// lang.push("react js");
for(let i=0; i<lang.length; i++){
    document.write(`${i} : ${lang[i]} <br>`);
}

document.write("<br>");
// forward
for(let i=lang.length-1; i>=0; i--){
    document.write(`${i} ${lang[i]} <br>`);
}