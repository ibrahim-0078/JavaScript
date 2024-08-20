let name = document.querySelector('#name');
// name.innerText = `I am a Web Developer`;
// name.innerText = `${name.innerText} I am a Web Developer`;
name.innerHTML = `<i> ${name.innerText} I am a Web Developer </i>`;
name.style.color = `yellowgreen`;



let box = document.querySelectorAll('.box');
let idx = 1;
// box[0].innerText = `square 1`;
// box[1].innerText = `square 2`;
// box[2].innerText = `square 3`;

for(box of box){
    box.innerText = `square ${idx}`;
    box.style.backgroundColor = `green`;
    box.style.color = `yellow`;
    box.style.fontSize = `25px`;
    box.style.height = `150px`;
    box.style.width = `150px`;
    box.style.margin = `20px`;
    box.style.padding = `20px`;
    box.style.border = `5px solid yellow`;
    idx++;
}






// let newHeading = document.createElement('heading');
// newHeading.innerText = 'I am ibrahim';
// newHeading.style.color = 'yellowgreen';
// let h1 = document.querySelector('h1');
// h1.append(newHeading);
// // h1.prepend(newHeading);


// let btn = document.createElement('button');
// btn.innerText = 'Click it';
// let div = document.querySelector('div');
// btn.style.cursor = 'pointer';

// // div.before(btn);
// div.after(btn);


// // let para = document.querySelector('p');
// // para.remove(para);
// // btn.remove(btn);
// // div.remove(div);
// // h1.remove(newHeading);







// creat a btn


//  let btn = document.createElement('button');
//  btn.innerText = 'click me!';
//  btn.style.color = 'white';
//  btn.style.backgroundColor = 'aqua';
//  btn.style.border = '5px solid transparent';
//  btn.style.borderRadius = '5px';
//  btn.style.cursor = 'pointer';
//  document.querySelector('body').prepend(btn);









// let para = document.querySelector('p');
// para.classList.add('secondClass');
// para.classList.remove('firstClass');