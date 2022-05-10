var button = document.querySelector("#btn");
var fondo  = document.querySelector("#body");
var textColor = document.querySelector("#output");
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

function cambiaraEx(){
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += hex[generarNumeros()];
    }

    textColor.textContent = hexColor;
    fondo.style.backgroundColor = hexColor;
}

function generarNumeros(){
    return Math.floor(Math.random() * hex.length);
}

button.addEventListener("click", cambiaraEx);