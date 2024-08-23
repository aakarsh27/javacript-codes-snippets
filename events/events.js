let btn2 = document.querySelector("#btn1");
btn2.onclick = (e) =>{
    alert("hello the button was clicked");
    console.log(e);
    console.log(e.type);
    console.log(e.target);
    console.log(e.clientX, e.clientY);
    
}

let hover = document.querySelector("div");
hover.onmouseover = () =>{
    alert("hovered over the box area");
}

// event listener

btn1.addEventListener("click", ()=>{
    console.log("button was clicked - handler 1");
})
btn1.addEventListener("click", ()=>{
    console.log("button was clicked - handler 2");
})

const handler3 = () =>{
    console.log("button was clicked - handler 3");
} 
btn1.addEventListener("click", handler3)

btn1.addEventListener("click", ()=>{
    console.log("button was clicked - handler 4");
})

btn1.removeEventListener("click", handler3);

//ques

let modebutton = document.querySelector("#mode");
let currmode = "light";
modebutton.addEventListener("click", ()=>{
    if (currmode === "light"){
        currmode ="dark";
        document.querySelector("body").style.backgroundColor="black"
    } else{
        currmode ="light";
        document.querySelector("body").style.backgroundColor="white"
    }
    console.log(currmode);


});