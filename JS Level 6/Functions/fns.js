  // Create a fn that takes a str as an argument & returns
        // the num of vowels in the str.

        
        function countVowels(str){
            let count = 0;

            for(char of str){
                
                if(char === 'a' ||
                   char === 'e' || 
                   char === 'i' || 
                   char === 'o' || 
                   char === 'u'
                   ){

                   count++;
                   
                }
                
            }
            
            document.write(`Num of Vowels = ${count} <br>`);
            return count;
        }
        countVowels('ibrahim');
        
        countVowels('hjhh');

        // Same code with Arrow => fn


        // const countVowels = (str) => {
        //     let count = 0;

        //     for(char of str){
                
        //         if(char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u'){
        //             count++;
        //         }
                
        //     }
            
        //     document.write(`Num of Vowels = ${count} <br>`);
        //     return count;
        // }
        // countVowels('ibrahim');
        
        // countVowels('hjhh');