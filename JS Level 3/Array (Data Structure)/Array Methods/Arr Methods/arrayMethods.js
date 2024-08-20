// map method : map creates a new arr with results of some operation.
        // the value its callback returns are used to form neew arr.

        // arr.map(callbackFnx(value))

        // let nums = [67 , 52, 39];

        // let newArr = nums.map((val) =>{
        //     return val * 2;
        // });
        // document.write(`values = ${newArr}`);


        // filter method : filter out some values from original arr and creates new arr.

        // let arr = [1,2,3,4,5,6,7,8,9,10];

        // let evenArr = arr.filter((val) =>{
        //     return val %  2 === 0; 
        // });

        // document.write(`evenArr = ${evenArr}`);


        // reduce method :performs some operations & reduces the Arr to a single value.
        // It returns that single value.

        // let arr = [1,2,3,4];
        
        // const sum = arr.reduce((prev,curr) =>{
        //     return prev + curr;
        //     // return prev > curr ? prev : curr;
        // });

        // document.write(`single value = ${sum}`);


        // Given a arr of marks of students .Filter out 90+ marks of students.

        // let marks = [97, 64,43,99,86,96];

        // let toppers = marks.filter((val) =>{
        //     return val > 90;
        // })

        // document.write(`Toppers = ${toppers}`);




        // Take a num n as input from user. Create an arr of nums from 1 to n.
        // use the reduce method to calculate Sum of all nums in Arr.
        // use the reduce method to calculate Product of all nums in Arr.


        let n = prompt('enter a number : ');

        let arr = [];

        for(i=1; i<=n; i++){
            arr[i-1] = i;
        }

        document.write(`arr = ${arr} <br>`);

        let sum = arr.reduce((prev,curr) =>{
            return prev + curr;
        })

        document.write(`sum = ${sum} <br>`);

        let factorial = arr.reduce((prev,curr) =>{
            return prev * curr;
        })

        document.write(`factorial = ${factorial}`);