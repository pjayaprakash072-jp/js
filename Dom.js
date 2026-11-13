//Methods
// 1. getElementById() , getElementsByClassName() , getElementsByTagName()
// queerySelector(), querySelectorAll() , setAttribute(), removeAttribute()

// properties
// 1. innerText- will consider css , innerHTML, textContent - will not consider css, value, name , attrubutes- doc.querysele....attrubutes.id.value, getAttrubutes , setAttrubutes

let attr = document.querySelector('#domclick');

// adding event listner.
// attr.addEventListener('click',sayhi);
// function sayhi(){
//     console.log("hi jp");
// }
attr.addEventListener('click' , function sayhi(){
    console.log("hi");
    
});


// objects

let obje = {
    name : "jayaprakash",
    age : 20,
    sum : function(a){
        return 5+a;
    }
};
console.log(obje.sum(5));

