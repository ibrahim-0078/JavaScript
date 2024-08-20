// reduce Method => it reduces the Arr to a single value.

// let nums = [1,2,3,4,5];
// // array.reduce((accumulator, element) => accumulator + element);
// let finalValue = nums.reduce((res, ele)=>{
//     document.write("result value : ", res ,"<br>" );
//     return res + ele;
// });
// document.write("final value : ", finalValue);

// find a maximum value in Array with reduce Method
// let nums = [2,3,4,5,10,3,4,7,35,15,8,1,2,20];
// let maxValue = nums.reduce((max, ele)=>{
//     if(ele > max){
//         return ele;
//     }
//     else{
//         return max;
//     }
// });
// document.write("maxValue : ", maxValue);

// find a minimum value in Array with reduce Method
let nums = [3,4,5,10,3,4,7,35,2,15,82,20];
const getMin = (nums)=>{
    let minValue = nums.reduce((min, ele)=>{
        if(min < ele){
            return min;
        }
        else{
            return ele;
        }
    });
    return minValue;
}
document.write("minValue : ", getMin(nums));