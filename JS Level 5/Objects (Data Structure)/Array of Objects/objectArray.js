const classInfo = [
    {
        name : "ibrahim",
        grade : "A",
        marks : 90
    },
    {
        name : "saad",
        grade : "B",
        marks : 80
    },
    {
        name : "faizan",
        grade : "C",
        marks : 80
    }
];
console.log(classInfo);
console.log(classInfo[2]);
console.log(classInfo[2].marks);
delete classInfo[2].marks;
console.log(classInfo[2]);