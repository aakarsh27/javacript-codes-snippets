//stings 

let str = "aakarsh";
let str2= "welcome to aakarsh's world";

console.log(str.length); // 7
console.log(str2.length); // 26

console.log(str[0])
console.log(str2[1])

// template literals

let specialstring = `this is a cool special sentence`
console.log(specialstring) 

//for eg.
let obj = {
    item: 'pen',
    price: 10
};

console.log(`the price of ${obj.item} is ${obj.price}`);

// \n is used for next line
// \t is used for tab space

//string methods

let sentence = "   the aakarsh is the best   "
let end = " okkok coool"

console.log(sentence.toUpperCase());
console.log(sentence.toLowerCase());
console.log(sentence.trim());
console.log(sentence.slice(0,8));
console.log(sentence.concat(end));
console.log(sentence.replace("k", "v"));
console.log(sentence.charAt(15));