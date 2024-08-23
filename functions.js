// functions in js
function myfunction(){
    console.log("hello aakarsh sharma")
}
myfunction();

function myfunctionn(msg){
    console.log(msg);
}
myfunctionn("hellooo");

function myfunctionnn(msg, n){
    console.log(msg*n);
}
myfunctionnn("hellooo", 100);
// this will output NaN which is Not a Number


function summ(x,y){
        // x & y are local variables which means they'll only exist inside of this function
    s = x+y;
    return s;
}
console.log(sum(3,4));


//arrow functions (compact functions)
function sum(x,y){
    return x + y;
}
const arrowsum = (x,y) => {
    console.log(x + y);
}
arrowsum(5,5);

const arrowmul = (x,y) =>{
    return x*y;
}
console.log(arrowmul(5,5));

const printhello = () => console.log("hello world"); //single line function


//ques
function CountVowels(str){
    let count = 0;
    for (const char of str){
        if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            count++;
        }
    }
    console.log(count);
}

const arrowcount =(str) => {
    let count = 0;
    for (const char of str){
        if (char === "a" || 
            char === "e" ||     
            char === "i" || 
            char === "o" || 
            char === "u"){
            count++;
        }
    }
    console.log(count);
}

//for each loop in arrays

//functions in javascript can be used in other functions as parameters and arguments

// arr.foreach(val, idx, arr)
let arr = [1,2,3,4,5]
arr.forEach(function printval(val){ //val means foreach loop will call elements from arr
    console.log(val);
})

city = ["mumbai", "pune", "nagpur"]
city.forEach((val, idx) =>{
    console.log(val.toUpperCase(), idx);
})


//ques
let arr1 = [2,3,4,5];

let calsquare = (num) =>{
    console.log(num*num);
}
arr1.forEach(calsquare);


//array methods 
//map method - creates new array from results of the function
//arr.map(callbackfnx(value, index, array))

let arr11 = [25,23,24]

let newarr = arr11.map((val) =>{
    return val*val
})
console.log(arr11);
console.log(newarr);

//filter methods - filters out based on conditions

let newarr1 = arr11.filter((val) =>{
    return val % 2 === 0;
})
console.log(newarr1);

//reduce methods - tries to reduce array into single value
let array1 = [1,2,3,4]

const output = array1.reduce((res, curr) =>{
    return res + curr;
})
console.log(output)

//returing largest value
const largest = array1.reduce((prev, curr) => {
    return prev > curr ? prev: curr;
})
console.log(largest);


//ques1
marks = [99,98,56,76,89,91]

let toppers = marks.filter((val) =>{
    return val > 90;
})
console.log(toppers);

//ques2
let n = prompt("enter a number");
let arrayy = [];
for (let i = 0; i <= n; i++){
    arrayy  [i-1] = i; //1(0), 2(1), 3(2),...
}
console.log(arrayy);

let summm = arrayy.reduce((res, curr)=>{
    return res + curr;
})
console.log(summm);

let factorial = arrayy.reduce((res, curr)=>{
    return res * curr;
})
console.log(factorial)