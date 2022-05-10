var button = document.querySelector("#btn");
var fondo  = document.querySelector("#body");
var textColor = document.querySelector("#output");

function cambiaraRgb(){
    var colorRgb = [];
    
    for(let i = 0; i < 3; i++){   
        colorRgb.push(generarNumeros());
    }
    
    nuevoColor = "rgb(" + colorRgb.toString() + ")";

    textColor.textContent = nuevoColor;
    fondo.style.backgroundColor = nuevoColor;
}

function generarNumeros(){
    return Math.floor(Math.random() * 256);
}

button.addEventListener('click', cambiaraRgb);