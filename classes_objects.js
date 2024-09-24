//CREATING OBJECTS
const employeee = {
    calcTax() {
        console.log("10% tax");
    },
};

const aakarsh = {
    salary: 100000,
};

aakarsh.__proto__ = employee;



// CLASSES
class employeeee{
    salary1(){
        console.log("ur salary is high");
    }
    
    salary2(){
        console.log("youre salary is low");
    }

    source(money){
        this.money = money //this.money belongs to the class whereas the other one is meant to be used for function
    }
}

let aakarsh = new employee;
aakarsh.source("gpay")
let tiaa = new employee;
tia.source("paytm")


//  CONSTRUCTORS
class employeeee{
    constructor(money){
        console.log("account was created")
        this.money = money
    }
    salary1(){
        console.log("ur salary is high");
    }
    
    salary2(){
        console.log("youre salary is low");
    }
}

let aakarsh = new employee("paytm");
console.log(aakarsh);
let tia = new employee("gpay");
console.log(tia);


// INHERITANCE
class person {
    eat(){
        console.log("person needs to eat")
    }
    sleep(){
        console.log("person needs to sleep")
    }
}

class engineer extends person{
    build(){
        console.log("engineer needs to build")
    }
}

class doctor extends person{
    treat(){
        console.log("doctor needs to treat")
    }
}
let aakarshObj = new engineer;


//super keyword
class person {
    constructor(species){
        this.species = "homo sapiens";
    }
    eat(){
        console.log("person needs to eat")
    }
}

class engineer extends person{
    constructor(branch){
        super(); // to invoke part class constructor
        this.branch = branch
    }
    build(){
        super.eat(); // calls from parent class
        console.log("engineer needs to build")
    }
}

let engObj = new engineer("mechanical");


//ques
DATA = "this is the data of the school"
class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }
    viewData(){
        console.log("website data is", DATA);
    }
}

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        DATA = "this is the new data of the school";
    }
}

let student1 = new User("aakarsh", "okokok")
let student2 = new User("tia", "kokokoko")

let admin = new Admin("admin", "sososo")