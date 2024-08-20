 // Callback : It is a fn passed as an argument to another fn.

        // Sycronous Programming Callbacks
        
        // const sum = (a,b)=>{
        //   document.write(a+b);  
        // }

        // const calculator = (a,b,sumCallback)=>{
        //     sumCallback(a,b);
        // }

        // calculator(2,2,sum);


        // // Asycronous Callbacks

        // setTimeout((helloCallback) =>{
        //     document.write('hello');
        // },5000);


        // Callback Hell are nested callbacks 

        const getData = (dataId, getNextData)=>{
            setTimeout(()=>{
                document.write(`data : ${dataId} <br>`);
                if(getNextData){
                    getNextData();
                }
            },2000);
        }

        // Callback hell
        getData(1, ()=>{
            document.write('Getting Data 2..... <br>');
            getData(2, ()=>{
                document.write('Getting Data 3..... <br>');
                getData(3, ()=>{
                    document.write('Getting Data 4..... <br>');
                    getData(4)
                })
            });
        });