// // PROMISES. 
// // it contain executre function(promise)
// // syntax 
// // new Promise((resolve, reject) =>{
// // logic
// // })

// // resolve --> .then()     reject --> .catch()


// // stages(3)
// // 1. pending
// // 2. fulfilled - after pending state if fullfulled then i falls under resolve else in reject.
// // 3. rejected 


// const register = () =>{
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log("please register");
//             resolve("Successfull");
//             // reject("registration failed.");
//         },2000);
//     })
// }
// const login = ()=>{
//     return new Promise((resolve, reject)=>{

//         setTimeout(()=>{
//             console.log("please Login");
//             resolve();
//             // reject("login failed");
//         },1000);

//     })
// }


// const thankyou =()=>{
//     return new Promise((resolve , reject)=>{
//         setTimeout(()=>{
//             console.log("thankyou");
//             resolve("program executed successfully.");
//             // reject("further failed.");
//         },20);
//     })
// }
// // register().then((data)=>{console.log(data)});
// register().then(login).then(thankyou).then((data)=>{console.log(data)}).catch((data)=>{console.log(data);}); // this is called method chain
// // thankyou();


function getdate(){
    return new Promise((r)=>{
        setTimeout(()=>{
            r("data Loaded");
        },2000)
    })
}

async function runtask(){
    console.log(await getdate());
}
runtask();