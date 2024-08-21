// DOM manipulation

//selecting with id (for something unique)
let header = document.getElementById("heading");
console.dir(header);

//selecting with class (for a collection)
let headings = document.getElementsByClassName("heading3");
console.dir(headings)

//selecting with tag (by using individual tags)
let paras = document.getElementsByTagName("p")
console.dir(paras);


//query selector (can pass id, class and tag)
let firstEl = document.querySelector("p") //for tag
console.dir(firstEl)

let allEl = document.querySelectorAll("p")
console.dir(allEl)

let ffirstEl = document.querySelector(".heading3") // for class
console.dir(firstEl)

let aallEl = document.querySelectorAll(".hedaing3")
console.dir(allEl)

let fffirstEl = document.querySelector("#heading") // for id
console.dir(firstEl)

let aaallEl = document.querySelectorAll("#heading")
console.dir(allEl)


//properties of elements
//tagName
let ftEl = document.querySelector("p") //for tag
console.dir(ftEl)

let classEl = document.querySelector(".heading3");
console.dir(classEl)

console.log(ftEl.tagName)
console.log(ftEl.innerText)
console.log(classEl.innerText)
console.log(classEl.innerHTML)


//ques1
let h2 = document.querySelector("h2");
console.dir(h2.innerText);

h2.innerText = h2.innerText + " from Aakarsh Sharma";

//ques2
let divs = document.querySelectorAll(".box");
divs[0].innerText = "unique value 1";
divs[1].innerText = "unique value 2";
divs[2].innerText = "unique value 3";