// Filter Method => filter method hummy condition check krky 1 newArr return krky deta hai => ju b humaeri values huti hai unko callback function my run kry gay => agr callback humy output my true dy deta hai => tu humara element newArr my add hojata hai => lekin agr callback output my false deta hai tu us case my element hamera reject hojata hai ur newArr my add nhi hota.
let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let newArr = nums.filter((element)=>{
    return element % 2 == 0;
    // return element % 2 !== 0;
    // return element > 7;
    // return element <= 10;
    
});
console.log(newArr);