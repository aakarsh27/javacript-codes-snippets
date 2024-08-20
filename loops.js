// loops

//for loop

for (let i = 1; i <= 5; i++ ){
    console.log("aakarsh is cool");
}

//calculate sum from 1 to n

let sum = 0;
let n = 6
for (let j = 1; j <= n; j++){
    sum = sum + j;
}
console.log(sum)
// the value of j only exists inside the loop since it is a block scope variable
// "let" expression survives only in the loop where as "var" expression is globlally true

for (var i = 1; i <= 5; i++ ){
    console.log("i = ", i);
}
console.log(i)


//while loop

let j = 0
while (j <= 5){
    console.log("j =", j);
    j++;
}

//for of loop (used for strings and arrays)
let name = "AakarshSharma";
let size = 0;
for (let k of name){
    console.log("k =", k)
    size++;
}
console.log("size is", size);

//for in loop(used for objects)
let student = {
    name: "Aakarsh Sharma",
    age: 21,
    cgpa: 9.1
};

for (let key in student){
    console.log(key);
}
for (let key in student){
    console.log(student[key]);
}


//ques1
let eve = 0
for (i=0;i<=100;i++){
    if (i%2 == 0){
        eve = eve + i;
    }
}
console.log(eve);

//ques2
let noo = 25;
let guess = prompt("guess the number");

while (noo != guess){
    guess = prompt("you have not guess correctly, try again")
}

alert("you guessed the correct numberrrr");