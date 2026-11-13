// setInterval() - executes coe contiously.

// syntax : setInterval(function, millisecond);   1sec = 1000sec.




// const animator = setInterval(sampleanimation , 1000);

let ani =0;

function sampleanimation(){
    ani += 10;

    if( ani == 5){
        clearInterval(animator);
    }

    let title = document.querySelector("#title")
    title.style.fontSize = ani+"px";

};