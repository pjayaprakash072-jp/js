// printing strings with backticks(`);

let str = "welcome";

let str2 = "jayaprakash";


document.write(

`<br>hello ${str2} ! ${str} to <br> jpindustries.`

)



// arrow functions


let fun = () => {console.log("hello world")};

fun();



let sum = (a,b) => {
    return a+b;
}

console.log(sum(3,5));



// for of -- [Arrays];

// for in -- {objects};

let nums = [2,5,5,3,5];

for(let x of nums){
    console.log(x*2);
}

let detail = {
    name : "jayaprakash",
    age : 23,
    func : function(){
        console.log("printisn obj");
    }
}

for( let y in detail){
    console.log(detail[y]);
}


//Rest operator used in declaration of function
// used when creating a functoin.
// syntax (...)

function samplerest(name , ...myages){
    let sum = 0;
    for(let x in myages){
        sum += myages[x];
    }
    console.log(name +"  "+ sum);
    
}

samplerest("jaya",100,23,34,542,43,5456,765,3);
// let arr = [3,4,5,3,2,2,10];
// // using spread.
// samplerest("jaya" , ...arr);




// spread operator (...) - easy way to COMBINE all arrays or objects

// used when calling a function.

const games = ["cricket" , "football" , "tennis"];

const players = ["jaya" , "ganesh" , "gopi"];

const mouses = ["mousex" , "mousey" , "mousez"];

const all = [...games,...players,...mouses];

console.log(all);

const fname = {
    first :"jaya"
};

const mname ={
    middle :"p"
}

const lname = {
    last :"prakash"
};

const fullname = {...fname, ...mname ,...lname};

console.log(fullname);
