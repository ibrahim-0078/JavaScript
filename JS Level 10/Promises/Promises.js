        // Promises is for 'eventual'(resolve=fulfilled,reject=Cancel)completion of task.
        // It is an object in js.It is a solution to Callback Hell.

        // Promises creation
        // const getData = (dataId, getNextData)=>{
        //     return new Promise((resolve, reject)=>{
        //         setTimeout(()=>{
        //         console.log(`data : ${dataId}`);
        //         resolve('success');
        //         // reject('some error occurred');
        //         if(getNextData){
        //             getNextData();
        //         }
        //     },10000);
        //     });
        // }

        // let promise = getData(1);
        // console.log(promise);








        // How to use Promises

        // const getPromise = ()=>{
        //     return new Promise((resolve,reject)=>{
        //     console.log('I am a Promise');
        //     resolve('success');
        //     // reject('some error occurred');
        // });
        // };

        // let promise = getPromise();

        // promise.then((res)=>{
        //     console.log(`promise fulfilled ${res}`);
        // });

        // // promise.catch((err)=>{
        // //     console.log(`promise rejected ${err}`);
        // // });


        // Promise Chain


        const getData = (dataId)=>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log(`data : ${dataId}`);
                    resolve('Promise Fulfilled');
                    // reject('some error occurred');
                },3000);
        });
        };

        // Promise Chaining
        console.log('fetching data.....1');
        getData(1)
        .then((res)=>{
            console.log('fetching data.....2');
            return getData(2);
        })
        .then((res)=>{
            console.log('fetching data.....3');
            return getData(3);
        })
        .then((res)=>{
            console.log(res);
        })