// arrays

let marks = [99,98,97,96,95];
console.log(marks);
console.log(marks.length);

let names = ["harsh", "aakarsh", "manasi"];
console.log(names);
console.log(names.length);

//array itself is of no type, it is an object (special type of object)
console.log(typeof(marks));

//array indices

console.log(marks[3]);
console.log(names[2]);

//to change values we use "=" expression
marks[0] = 30;
console.log(marks);

//this wont be the same for strings in js because strings are immutable in js and thus no changes will be applied
/*
string  -> immutable
array   -> mutable
*/

//looping over an array

//for loop
let cars = ["bmw", "merc", "audi", "bugati", "mclaren", "pagani", "lamborghini"];
for (let i = 0; i < cars.length; i++ ){
    console.log(cars[i]);
}
//for of loop
for (let car of cars){
    console.log(car)
}
//for in loop
for (let i in cars){
    console.log(cars[i]);
}

//ques1
let scores = [85, 97, 44, 37, 76, 60];
let sum = 0;
let avg;

for (let score of scores){
    sum = sum + score;
}
avg = sum / scores.length;
console.log(`average marks of the class is = ${avg}`);


//array methods
let foods = ["chips", "juice", "coldrink"]
console.log(foods.push("money"));
console.log(foods);

let deleteditem = foods.pop();
console.log(foods);
console.log(deleteditem);

let markss = [12,13,14,15];
console.log(markss.toString());

console.log(names.concat(cars));

//unshift adds to start and shift deletes from starts and return

console.log(cars.shift()); //deletes bmw

console.log(cars.slice(2,5)); // bugati, mclaren, pagani

//splice(startidx, delcount, newelemt)
console.log(cars.splice(2,2,"apple", "google"));
console.log(cars);


//ques

let companies = ["bloomerg", "microsoft", "uber", "google", "ibm", "netflix"];
console.log(companies.shift());
console.log(companies);
console.log(companies.splice(1,1,"ola"));
console.log(companies);
console.log(companies.push("amazon"));
console.log(companies);