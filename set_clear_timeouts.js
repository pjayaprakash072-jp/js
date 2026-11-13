// setIimeout(function , millisec)- it will delay the code execution
// clearTimeout(identifier);
// example executin a functon after 2 seconds

const changer = setTimeout(() => {
    const ele = document.querySelector("#title");
    ele.style.color = "red";

}, 2000);

function stopchange(){
    clearTimeout(changer);
}