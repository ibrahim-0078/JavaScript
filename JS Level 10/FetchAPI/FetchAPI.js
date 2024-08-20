// API => Application Programming Interface.
        // APIs are mechanisms that enable two software components to communicate
        // with each other using a set of definitions and protocols.
        // Fetch API => It provides an interface for fetching(sending/receiving)resources.
        // It uses Request and Response objects.
        // The fetch() method is use to fetch a resource(data).



        const URL = 'https://cat-fact.herokuapp.com/facts';
        const factPara = document.querySelector('#fact');
        const btn = document.querySelector('#btn');


        const getFacts = async () => {
            console.log('fetching data....');
            let response = await fetch(URL);
            console.log(response);
            // request to API => get response in JSON foramat
            // convert this Json format to JS object.to convert this format in JS object
            // we use Json()method
            let data = await response.json();
            // console.log(data[0].text);
            factPara.innerText = data[0].text;
        };
        // getFacts();

        btn.addEventListener("click", getFacts);
        btn.innerText = "getFacts";