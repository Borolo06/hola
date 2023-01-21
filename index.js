let imga1 = document.querySelector('.contenedorSinEstilos');
let img2 = document.querySelector('.contenedorConDiseños');
let infoUno = document.querySelector('.contenedorInfoUno');
let infoDos = document.querySelector('.contenedorInfoDos');
let titulo = document.querySelector('h1');

imga1.addEventListener("mouseover", () => {
    infoUno.style.visibility = "visible"
    infoDos.style.visibility = "hidden"
});

img2.addEventListener("mouseover", () => {
    infoDos.style.visibility = "visible"
    infoUno.style.visibility = "hidden"
});

titulo.addEventListener("mouseover", () => {
    infoDos.style.visibility = "hidden"
    infoUno.style.visibility = "hidden"
});

let button = document.querySelector('.botonLeer');
let texto = document.querySelector('.span');

button.addEventListener("click", () => {
    texto.style.visibility = "visible"
    button.style.visibility = "hidden"
});