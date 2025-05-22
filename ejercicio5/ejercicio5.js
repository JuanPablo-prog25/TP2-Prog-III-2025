let boton= document.getElementById("calcular");
function calcularArea(){
    //obtiene los valores ingresados convertidos a numeros
    let A = parseFloat(document.getElementById("a").value);
    let B = parseFloat(document.getElementById("b").value);
    let C = parseFloat(document.getElementById("c").value);
    let Resultado= document.getElementById("Resultado");

    let area = (A * B) + ((A - C) * B / 2);

    //mostrar el resultado en el html
    Resultado.innerText= "El area del terreno es: " + area.toFixed(2) + " metros cuadrados";
    

}
//asigna el evento click al boton
boton.addEventListener("click",calcularArea);