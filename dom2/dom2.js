let divv = document.querySelector("div");
console.log(div);

let id = divv.getAttribute("id");
console.log(id);

let name = divv.getAttribute("name");
console.log(name);

let para = document.querySelector("p");
console.log(para.setAttribute("class", "NewClass"));


let divs = document.querySelector("div");
divs.style.backgroundColor="green";
divs.style.backgroundColor="purple";
divs.style.visibility="10%"

divs.style.fontSize="20px";
divs.innerText="learning DOM is difficult";



let newBtn = document.createElement("button");
newBtn.innerText="click me!"
console.log(newBtn);

let div = document.querySelector("div")
div.append(newBtn);
div.prepend(newBtn);

div.before(newBtn);
let p = document.querySelector("p");
p.after(newBtn);

let newheading = document.createElement("h1");
newheading.innerHTML ="<i> hi i am new </i>"
console.dir(newheading)
document.querySelector("body").prepend; 



//ques1
let clickk = document.createElement("button");
clickk.innerText = "click me";

let showbutton = document.querySelector("body")
showbutton.after(clickk);

clickk.style.backgroundColor = "red";
clickk.style.color = "white";

//ques2

let paragraph = document.createElement("p");
