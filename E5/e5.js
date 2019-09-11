
const but1= document.getElementById("but1");
const stage = document.getElementById("stage")
const breaker = document.createElement("br");

function clicky(){
    but1.addEventListener("click", generate)
}

function generate(){
    const rand = Math.floor(Math.random() * 20)+5; 
    
    for (let i = 0; i < rand; i++) {
    
    }
}

clicky();
