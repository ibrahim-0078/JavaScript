// Rest Operator => it allows a function to take an indefinite number of arguments and bundle them in an array.
const min = (...args)=>{
    return args.reduce((min , ele)=>{
        if(min > ele){
            return ele;
        }
        else{
            return min;
        }
    });
}
console.log(min(1,3,0,4,56));