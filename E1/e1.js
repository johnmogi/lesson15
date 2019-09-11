const input1= document.getElementById("input1");
const but1= document.getElementById("but1")

// function validate(){
//     if (input1,value == "") return 
//     alert("VOID")
// }
function clicky(){
    but1.addEventListener("click", draw)
}
clicky();

function draw(){
    if (input1.value === "")  {  alert("VOID");
    input1.style.border = "1px solid red";
    return;
}
    alert(input1.value)
}