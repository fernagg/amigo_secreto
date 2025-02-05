// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
    const nombreIngresado = document.getElementById("amigo");
    const nombreAmigo = nombreIngresado.value.trim();

    if (nombreAmigo == "") {
        alert("Ingresa un nombre antes de hacer click en agregar.");
        return;
    }else{
        listaAmigos.push(nombreAmigo);
        actualizarLista();
        nombreIngresado.value = "";
    }
}

//Funcion que muestra la lista de los amigos ingresados
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}