const input1= document.getElementById("input1");
const but1= document.getElementById("but1")
const main= document.getElementById("main")
const breaker = document.createElement("br");
const obj = 0;
const pointArr = [];
let value = input1.value

function validate(){
    let value = input1.value
if (value === "" || value < 0  ){ error();}
// ||  (parseInt(value % 10) !== 0)
}
function error(){
    alert("try again");
input1.style.border = "1px solid red";
return;
}
function init(){
    value=0;
    pointArr.length = 0;
}

function populateArr(){
    let value = input1.value
    for (let i = 0; i < value; i++) {
        pointArr.push(i+1);
    }
}
function draw(){

    for (let ik = 0; ik < pointArr.length; ik++) {
       
            console.log([ik+1]);
       
        main.innerText+=("*")
        
    }
   

}

// start to build:
function minimal(){
    // console.log("yo")
    validate();
    init();
    populateArr()
draw();

}

function clicky(){
    but1.addEventListener("click", minimal)
}
clicky();
