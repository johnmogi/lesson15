const input1= document.getElementById("input1");
const but1= document.getElementById("but1")
const main= document.getElementById("main")
const breaker = document.createElement("br");
let value = input1.value
let pValue  = value % 1 

function validate(){
    if ( parseInt(pValue) = 0)  {  alert("try again");
    input1.style.border = "1px solid red";
    init();
    return;
}
    alert("success: " +  value)
}


function draw(){
    validate();
    const breaker = document.createElement("br");
    for (let i = 0; i < value; i++) {
        breaker
        main.innerText+=("*")
        // main.append(breaker)
        
    }
}
draw();