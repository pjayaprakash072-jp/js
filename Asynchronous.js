// async is a run time it will make code not stop.
console.log("first output");
console.log("second output");
console.log("third output");
console.log("forth output");
console.log("fifth output");

// asynchronous operations invlove the use of callbacks, promises , or async/await.

console.log("first output");
console.log("second output");
setTimeout(()=>{
    console.log("third output");
},2000);
console.log("forth output");
console.log("fifth output");



