const input1= document.getElementById("input1");
const input2= document.getElementById("input2");
const but1= document.getElementById("but1");
const stage= document.getElementById("stage")
// const input3 = document.getElementsByTagName("input")
const formControl = document.getElementsByClassName("form-control")
//
const oneValue = input1.value
const twoValue = input2.value
const threeValue = inputT.value


function clicky(){
    but1.addEventListener("click", process)
}

function draw(){ 
    for (let ii = 0; ii < formControl.length; ii++) {
    formControl[ii].style.border = "1px solid grey";
    }
        stage.innerHTML = ("Your details are: " + "<br/>" + oneValue + "<br/>" + twoValue + "<br/>" +  threeValue)     
    }
    
    function validate(){
        for (let ii = 0; ii < formControl.length; ii++) {
            if (formControl[ii].value === "")  {  alert("One of the fields is missing, check again");
            formControl[ii].style.border = "1px solid red";
            return true;
        }   
        }
    }

clicky();

function process(){
    if (validate(true)) return;
    draw();
}
