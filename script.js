var a = 3;
var a = 5; // ✅ can redeclarable;
a = 8; // ✅ can reasign 
console.log(a);



let b = 5;
// let b = 6; ❌ not redeclarable
b = 4; // ✅ can reasign
console.log(b);



const c = 5;

// const c = 7; ❌ cannot redeclare.
// c = 50;❌ cannot reasign
console.log(c);



let arr = [2 ,35, 6 , "helo"];
console.log(arr);
console.log(arr[0]);


let obj = {
    name : "jaya",
    course: "js"
};
console.log(obj);
console.log(obj.name);


let opa =5;
opa--;
console.log(opa); // prints 4;



let ca = 5;
if(ca == 6){
    console.log("good");
}
else if(ca >3){
    console.log("bad");
}
else {
    console.log("man");
}


let ta = 5;
console.log((ta == 5)?"yes" :"no");



// let con = confirm("are you male?");
// console.log(con);
// let prom = prompt("Enter name");
// console.log(prom);




let typeint = 5;
typeint = String(typeint);
console.log(typeof(typeint));
typeint = parseInt(typeint);
console.log(typeof(typeint));





