// onclick event
// let btn = document.querySelector("button");
// btn.onclick = function (){
//     console.log("photo was liked");
// };
// btn.onclick = function (){
//     alert("photo was liked");
// };

// onmouse event
// let btns = document.querySelectorAll("button");
// for(btn of btns){ // hr 1 single btn pyb ja kr 
//     btn.onmouseenter = function (){
//         console.log("you like the photo");
//     };
// };

// event Listeners => 1 aisa method ju events ky  liy listen kerta yani wo wait kerta h kb page pr mera event hoga ur kb mai us kam ko perform kro ga ju mery event ky andr likha huwa hai
// let btns = document.querySelectorAll("button");

// for(btn of btns){
//     btn.addEventListener('click', () =>{
//         console.log("you liked");
//     });
//     btn.addEventListener("mouseenter", () =>{
//         console.log("you like the pic");
//     });
// };

// this in event listeners
// let btn = document.querySelector("button");
// btn.addEventListener("click", function() {
//     console.log(this.innerText);
//     this.style.backgroundColor = "hotpink";
// });


// form events
// let form = document.querySelector("form");
// form.addEventListener("submit", function(event){
//     alert("form submitted");
//     event.preventDefault(); // prevent mean rokna
// });

// Extracting form Data
let form = document.querySelector("form");
form.addEventListener("submit", function(event){
    event.preventDefault();

    let user = document.querySelector("#user");
    let pass = document.querySelector("#pass");

    console.log(user.value);
    console.log(pass.value);

    alert(`hi ${user.value}! your password is set`)
});
