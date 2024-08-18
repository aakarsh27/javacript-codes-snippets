// mathmatical operators in JS

let a = 5;
let b = 2;

console.log("a = ", a, " & b =", b)

console.log("a + b = ", a+b)
console.log("a - b = ", a-b)
console.log("a * b = ", a*b)
console.log("a / b = ", a/b)
console.log("a % b = ", a%b)
console.log("a ** b = ", a**b)

// unary operator
let c = 6
console.log(c++);
console.log("c-- = ", c--);

// assignment operators
/*

=, +=, -=, *=, %=, **=

*/

// comparision operators
/*

==, ===, !=, !==
>, =>, <, <=

*/
let x = 5
let y = "5"

console.log("x == y", x == y)
/* this will give true as javascript implicityly converts the 
string into number and then compares it and hence it returns true

on the other hand "===" operator also checks if the data type is matching or not* */


//logical operators
/*

&&, ||, !

*/

let p = 5;
let q = 6;
console.log("cond1 && cond2 = ", p>q && q ===6) //false
console.log("cond1 || cond2 = ", p>q || q ===6) //true
console.log("!(p>q) = ", !(p>q)) //true