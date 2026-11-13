

function aq(){
    console.log("hell");
};

aq();

// scopes in js 1. global , 2. function , 3. block

var apple = "red";

let orange = "orange";

const banana = "yellow";

// global
function fruit(){
    let fun = 55;
    console.log(fun);
    console.log(banana);
    console.log(orange);
}
fruit();

// console.log(fun); ❌ fun is function scope

function block(){
    if(10<20){
        let blo = 5;
        console.log(blo);
    }
    // console.log(blo);❌blo is block scope.
}
block();

let retur = function(){
    return "jgygfv";
}
console.log(retur());



let sum = (a,b) => {return a+b;};

console.log(sum(9,10));

//Array methods :  push() , pop() , shift(){delete first} , unshift("name"){adds element at start}, concat() , join(){makes arr of ele into stirng} , slice() , splice() , indexOf() , forEach()



// call back function
let arr1 = ["foreash",2,35,5 ,5 , 76, 7];
arr1.forEach((val) =>{
    console.log(val);
});



// String methods -> split() , trim(), charAt(), substring() , replace() , toUpperCase(), toLowerCase()


// loops -> for , while, do-while , forEach , for-in , for-of

console.log("LOOPS");
for(let i =0 ;i< 3 ;i++){
    console.log(i);
}
// while , do-while are same as java.

// for-in - accessed via index
let arr3 = ["for" , "in" , 5 , 2];
for(let k in arr3){
    console.log(arr3[k]);
};

// for-of - values will be retrived.
for(let k of arr3){
    console.log(k);
};



