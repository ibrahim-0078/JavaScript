// forEach Method => sary ky sary elements ky liy bar bar is method ko run kry ga => ye method hr element pr individually run hoga

let arr = [1,2,3,4,5];
arr.forEach((element) =>{
    document.write(element , "<br>");
});
document.write("<br>");

const students = [{
    name : "faizan",
    marks : 30
},{
    name : "saad",
    marks : 90
},{
    name : "ibrahim",
    marks : 29
}];
students.forEach((element) =>{
    document.write(element.marks , "<br>");
});