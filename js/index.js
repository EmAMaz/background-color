var button = document.querySelector("#btn");
var fondo  = document.querySelector("#body");
var textColor = document.querySelector("#output")
const colores = ["red","blue","green","yellow","orange","purple"];

function cambiarFondo(){
    const randomNumber = generarNumeros();
    
    fondo.style.backgroundColor = colores[randomNumber];
    textColor.textContent = colores[randomNumber];
}

function generarNumeros(){
    return Math.floor(Math.random() * colores.length);
}

button.addEventListener("click", cambiarFondo)
