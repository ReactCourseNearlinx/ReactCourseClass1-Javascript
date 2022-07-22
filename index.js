//------------------------------ES6-----------------------------------------


// let - const
let a = 4;
a += 5;

const b = 4;
//b += 5;
console.log(a,b);


// arrow functions
const fun1 = () => 4;
const fun2 = () => { 
    return 4;
};
const fun3 = function() {
    return 4;
}
function fun4() {
    return 4;
}
console.log(fun1(),fun2(),fun3(),fun4());


// destructuring 
const json1 = {
    hello: 'hello',
    num: 4, 
    func: (add) => add*5,
    otherObj: {
        again: '1',
        num: 2,
        otherThing: 'Just another string'
    },
    andArray: [2,3,5,1,'I','am','not','here']
}

const {hello, func, num} = json1;
console.log(hello,func(num));
const {otherObj: {otherThing} } = json1;
console.log(otherThing);


// template literals
const tl = `you can reference *${otherThing}* 
and other variables like *${num}*, 
even do a function like: *result: ${func(num+num)}*`
console.log(tl);




//-------------------ARRAY FUNCTIONS-------------------------------


let numbers = [3, 56, 2, 48, 5];

//MAP -Create a new array by doing SOMETHING with EACH ITEM in an array.

console.log(
    numbers.map(number=>number*2)
);

//Filter - Create a new array by KEEPING the items who match the condition

console.log(
    numbers.filter(num => num > 15)
);

//Reduce - ACCUMULATE a value by doing something to EACH ITEM in an array.

console.log(
    numbers.reduce((acumulator,currentNumber) => acumulator + currentNumber)
);

//Find - find the FIRST item that matches from an array.

console.log(
    numbers.find(num=>num > 10)
);

//FindIndex - find the INDEX of the FIRST item that matches.

console.log(
    numbers.findIndex(num => num >20)
);


//reverse =  it reverse the array items
//find the last item that matches the condition
console.log(
    numbers.reverse().find(num=> num >10)
);





//----------------------------HIGH ORDER FUNCTIONS-------------------

function toDollars(value) {
    console.log(value);
    return (() => {
          const exchangeRate = 699;
          value = value*exchangeRate;
          console.log(value);
    })()
 }

toDollars(850);


function callback(fn) {    
    fn();
 }
callback( () => console.log("Anything") );



//------------------------ASYNCHRONOUS PROGRAMMING-------------------------

const ApiCalls = [ { desc: 'API call 1' },{ desc: 'API call 2' }]

const getApiCalls = () => {
    setTimeout(()=>{
        let print = '';
        ApiCalls.forEach((ApiCall,index)=>{
            print+= `<li>${ApiCall.desc}</li>`
        })
        document.body.innerHTML = print;
    },1000);
}


// NOT HANDLING ASYNCHRONOUS DATA

// const newApiCall = (data) => {
//     setTimeout(()=>{
//         ApiCalls.push(data);
//     },2000)
// }
// getApiCalls();
// newApiCall({ desc: 'API call 3' })



// WITH CALLBACK

// const newApiCall = (data, callback) => {
//     setTimeout(()=>{
//         ApiCalls.push(data);
//         callback();
//     },2000)
// }

// newApiCall({ desc: 'API call 3' }, getApiCalls);


// WITH PROMISE

// const newApiCallPromise = (data) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(()=>{
//             ApiCalls.push(data);
//             const simulateError = false;
//             if(!simulateError){
//                 resolve();
//             } else{
//                 reject('Error')
//             }
//         },2000);
//     });
// }

// newApiCallPromise({ desc: 'API call 3' })
//     .then(getApiCalls())
//     .catch((err)=> console.log(err));



// ASYNC-AWAIT

// async function getData() {
//     const data = await newApiCallPromise({ desc: 'API call 3' });
//     getApiCalls();
// }
// getData()



// PROMISE ALL

// const promise2 = Promise.resolve('hello world');
// const promise3 = Promise.resolve(2);

// Promise.all([promise2,promise3,newApiCallPromise])
//     .then(values => console.log(values));