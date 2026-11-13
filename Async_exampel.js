//  HIGH ORDER FUNCTIONS this is manual way of handling 
// to make easy of this then   ES6 invented PROMISES.

// welcome 
// register
// login 
// thankyou
console.log("Welcome");

const register = (log) =>{
    setTimeout(()=>{
        console.log("please Register");
        log();
    },5000);
}

const login = (thank) =>{
    setTimeout(() =>{
        console.log("please Login");
        thank();
    },4000);
}

const thankyou = ()=>{
    setTimeout(()=>{
        console.log("thankyou");
    },1000);
}

register(function(){
    login(function(){
        thankyou();
    });
});
