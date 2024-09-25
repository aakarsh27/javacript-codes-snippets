console.log("one");
console.log("two");

setTimeout(() => {
    console.log("hello")
}, 4000);

console.log("three");
console.log("four");


function sum(a,b) {
    console.log(a+b);
}

function calculator(a,b,sumCallback){
    sumCallback(a,b);
}


// callback
function getData(dataId, nextDataId){
    setTimeout( () =>{
        console.log("data is", dataId);
        if (nextDataId){
            nextDataId();
        }
    }, 2000);
}

getData(123, ()=>{
    getData(234, ()=>{
        getData(345,()=>{   // this is an example of callback hell, too many nested calls(forms a pyramid structure)
            getData(456)
        }); 
    });
});

// promise

let promise = new Promise((resolve, reject) =>{
    console.log("i am a promise");
    reject("promise is not done");
})

function takeData1(IdData, nextIdData){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("data is", IdData);
            resolve("success");
            if (nextIdData){
                nextIdData();
            }
        }, 5000);
    });
}

function takeData2(IdData, nextIdData){
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            reject("error loading up");
            if (nextIdData){
                nextIdData();
            }
        }, 5000);
    });
}

const getPromise = () =>{
    return new Promise((resolve, reject) =>{
        console.log("i am a big promise");
        resolve("yes its a success");
        //reject("network failed")
    })
}

let statusPromise = getPromise();

statusPromise.then((res)=>{
    console.log("correct:", res);
})

statusPromise.catch((err) =>{
    console.log("failed due to", err);
})



const getAsync1 = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("data1")
            resolve("success")
        }, 4000)
    })
}
const getAsync2 = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log("data2")
            resolve("success")
        }, 4000)
    })
}


console.log("feteching data1....")
let p1 = getAsync1();
p1.then((res) =>{
    console.log("feteching data2....")
    let p2 = getAsync2();
    p2.then((res)=>{});
})

// we can also write this as 
console.log("feteching data1....")
getAsync1().then((res) =>{
    console.log("feteching data2....")
    getAsync2().then((res)=>{});
})


//promise chaining

function datadata(myid){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("data is", myid);
            resolve("successfluu")
        },2000);
    })
}


datadata(123).then((res)=>{
    return datadata(234);
}).then(()=>{
    return datadata(345);
}).then((res)=>{
    console.log(res);
})


// async await (async always returns a promise) (await pauses the execution of surrounding async fun till promise is settled)

function api(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("weather data");
            resolve("success");
        },2000);
    });
}

async function getWeather(){
    await api(); //1st time
    await api(); //2nd time
}

//another thing that is called IIFE can be used to immediately execute the function without having to call it
// the syntax is:-
(async function(){
    await api(); //1st time
    await api(); //2nd time
})();

