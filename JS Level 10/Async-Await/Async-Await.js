   // Async-Await : Async always return a Promise. & Await pauses 
        // the execution of its surrounding async fn until Promise is settled.


        const getData = (dataId)=>{
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    console.log(`data : ${dataId}`);
                    resolve('Promise Fulfilled');
                    // reject('some error occurred');
                },2000);
        });
        };

        // async function getAllData(){
        //     console.log('fetching data.....1');
        //     await getData(1);
        //     console.log('fetching data.....2');
        //     await getData(2);
        //     console.log('fetching data.....3');
        //     await getData(3);
        //     console.log('fetching data.....4');
        //     await getData(4);
        // }
        // getAllData();


        // with IIFE fn : (async () =>{})();

        (async () =>{
            console.log('fetching data.....1');
            await getData(1);
            console.log('fetching data.....2');
            await getData(2);
            console.log('fetching data.....3');
            await getData(3);
            console.log('fetching data.....4');
            await getData(4);
        })();