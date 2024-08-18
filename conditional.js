//conditional statements
//if
let age = 16;
if(age >= 18){
    console.log("you can vote")
}
if (age <18){
    console.log("you cannot vote")
}

//if else

let mode = "light";
let color;
if (mode == "light"){
    color = "white";
} else{
    color = "black";
}
console.log(color)

if (age > 18){
    console.log("voting allowed")
} else{
    console.log("no u cannot ban")
}


let num = 10;
if (num % 2 == 0){
    console.log(num ,"is even");
} else{
    console.log("number is odd");
}

//ternary operation
// conditon ? true output : false output

let result = age > 18 ? "adult" : "child";
console.log(result)



//ques1
let numberr = prompt("enter a number")
if (numberr % 5 === 0){
    console.log(numberr, " is a multiple  of 5")
    alert("the number is a multiple of 5")
} else{
    console.log(numberr, " is a not multiple  of 5")
    alert("the number is not a multiple of 5")
}

//ques2

let score = prompt("enter the score")

if (score <=100 && score >= 80){
    console.log("A")
}else if (score <=79 && score >=70){
    console.log("B")
}else if (score <=69 && score >=60){
    console.log("C")
}else if (score <=59 && score >=50){
    console.log("D")
}else{
    console.log("F")
}
