// DOM(Document Object Model) => 
// selecting elements by id
// DOM Manipulation
let img = document.getElementById("img");
img.src = "web.webp";
let text = document.getElementById("text");
text.innerText = "Coding";
let para = document.getElementById("para");
para.innerHTML = "<h1>coder</h1>";

// selecting elements by className
let className = document.getElementsByClassName("para");
console.log(className);


// selecting elements by tagName
let tag = document.getElementsByTagName("p");
console.log(tag);

// selecting elements by Query selectors
let Id = document.querySelector("#Id");
Id.innerText = "hello";
let Class = document.querySelector(".Class");
console.log(Class);
let pg = document.querySelectorAll("p");
console.log(pg);

// Manipulating Attributes
console.log(img.getAttribute("id"));
img.setAttribute("src","code.jpg");

// style property
let h1 = document.querySelector("h1");
h1.style.color = "ghostwhite";
h1.style.backgroundColor = "hotpink";

let lis = document.querySelectorAll(".box li");
for(li of lis){
    li.style.color = "orangered";
}

// classList property

let heading = document.querySelector("h1");
heading.classList.add("heading"); // to add new classes
// heading.classList.remove("heading"); // to remove classes
heading.classList.contains("heading"); // to check if class exists
heading.classList.toggle("heading"); // to toggle between add & remove => class exist krti h tu ussy remove krdu => class exist nhi krti tu ussy add krdu
heading.classList.toggle("text");

// adding elements on page 

let newPara = document.createElement("p");
newPara.innerText = "hi , im a developer";
let body = document.querySelector("body");
body.appendChild(newPara); // insert in last 

let box = document.querySelector(".box");
box.appendChild(newPara);

let btn = document.createElement("button");
btn.innerText = "End";
body.appendChild(btn);

// append => add in last => kisi b string ko ya text ko b append krskhty hain
newPara.append(" in techfuckology");
// prepend => add in start => kisi b string ko ya text ko b append krskhty hain
btn.prepend("the ");

// body.removeChild(btn);
// btn.remove();
// newPara.remove();

// newPara.insertAdjacentElement('beforebegin',btn);
// newPara.insertAdjacentElement('afterbegin',btn);
// newPara.insertAdjacentElement('beforeend',btn);
// newPara.insertAdjacentElement('afterend',btn);

let para1 = document.createElement("p");
para1.innerText = "Hey Im red!";
document.querySelector("body").append(para1);
para1.classList.add("red");
// para1.style.color = "red";

let div = document.createElement("div");
let h4 = document.createElement("h4");
let p = document.createElement("p"); 

h4.innerText = "hello im in div";
p.innerText = " im also in div";
div.append(h4);
div.append(p);
div.classList.add("border");
document.querySelector("body").append(div);