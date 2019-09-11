const input1= document.getElementById("input1");
const input2= document.getElementById("input2");
const but1= document.getElementById("but1");
const stage= document.getElementById("stage")
const input3 = document.getElementsByTagName("input")

function clicky(){
    but1.addEventListener("click", process)
}

function draw(){ 
    if (input1.value !== "ABCD" || input2.value !== "cool" )  { 
     stage.innerHTML = ("Incorrect Username or Password")
    }
    
    if (input1.value == "ABCD" && input2.value == "cool" )  { 
        stage.innerHTML = ("Halleluja")     
    }
    }
    
    function validate(){
        for (let ii = 0; ii < input3.length; ii++) {
            if (input3[ii].value === "")  {  alert("One of the fields is missing, check again");
            input3[ii].style.border = "1px solid red";
            return;
        }   
        }
    }

clicky();

function process(){
    validate()
    draw();
}
