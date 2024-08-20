let modeBtn = document.createElement('button');
        let body = document.querySelector('body');
        modeBtn.innerText = 'Change Mode' ;
        modeBtn.style.color = 'white';
        modeBtn.style.backgroundColor = 'aqua';
        modeBtn.style.border = '5px solid transparent';
        modeBtn.style.borderRadius = '5px';
        modeBtn.style.cursor = 'pointer';
        body.prepend(modeBtn);

        let currentMode = 'light';

        modeBtn.addEventListener('click', () =>{
            if(currentMode === 'light'){
                currentMode = 'dark';
                // body.style.backgroundColor = 'black';
                // body.style.color = 'white';

                body.classList.add('dark');
                body.classList.remove('light');
            }else{
                currentMode = 'light';
                // body.style.backgroundColor = 'white';
                // body.style.color = 'black';

                body.classList.add('light');
                body.classList.remove('dark');
                
            }
        })