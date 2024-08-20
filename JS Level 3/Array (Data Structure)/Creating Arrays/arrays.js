  // by for loop
  let heroes = ['spiderman', 'superman' , 'thor' , 'hulk', 'ironman' ];
  for(i=0; i<heroes.length; i++){
      document.write(heroes[i]+ '<br>');
  }

  // by for_of loop
  // let heroes = ['spiderman', 'superman' , 'thor' , 'hulk', 'ironman' ];
  // for(hero of heroes){
  //     document.write(hero+ '<br>');
  // }

  // find average marks of entire class using Arrays

  // let marks=[85,97,44,37,76,60];
  // let sum=0;
  // // by for_of loop
  // for(let mark of marks){
  //     document.write(mark+'<br>');
  //     // using assignment operator +=
  //     sum+=mark;
  // }
  // document.write("total marks ="+ sum);
  // let avg = sum/marks.length;
  // // `backtick`, ${embed variable} = template literals
  // document.write(` <br> avg marks of class = ${avg}`);


  // one array which has 10% offer on every item .CHange the Array
  // to store final price after applying offer. 

  // by for loop

  // let items= [250, 645, 300, 900, 50];
  // for(let i=0; i<items.length; i++){
  //     let offer = items[i]/10;
  //     items[i] -= offer;
  // }
  // document.write(`finalPrice =[${items}]`);