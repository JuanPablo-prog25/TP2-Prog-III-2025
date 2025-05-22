//obtener los valores
let peso= document.getElementById("peso");
let altura= document.getElementById("altura");
let boton = document.getElementById("Calc");
let resultado= document.getElementById("resultado");

function calcularImc(){
    let valorPeso= parseFloat(peso.value);
    let valorAltura= parseFloat(altura.value);

     let imc = valorPeso / (valorAltura * valorAltura);
    resultado.innerText= "Su IMC es: "+imc.toFixed(2);

    //mostrar el mensaje en alerta
    alert("Su IMC es "+ imc.toFixed(2));




}

//añadir el evento al boton
boton.addEventListener("click",calcularImc);