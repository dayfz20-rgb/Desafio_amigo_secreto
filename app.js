// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Crear un array para almacenar los nombres
let amigos = [];

function agregarAmigo() {
    // Implementa una función para agregar amigos
    let nombreAmigo = document.getElementById('amigo').value;

    // Validar entrada: si el campo de texto está vacío, mostrar una alerta
    if (nombreAmigo === '') {
        alert('Por favor, ingresa un nombre válido.');
        return;
    }

    // Agregar el nombre al array
    amigos.push(nombreAmigo);

    // Limpiar el campo de texto
    document.getElementById('amigo').value = '';

    // Visualizar la lista actualizada
    mostrarLista();
}

function mostrarLista() {
    // Implementa una función para actualizar la lista de amigos
    let listaAmigosHTML = document.getElementById('listaAmigos');
    listaAmigosHTML.innerHTML = ''; // Limpiar la lista antes de actualizar

    amigos.forEach(amigo => {
        let li = document.createElement('li');
        li.textContent = amigo;
        listaAmigosHTML.appendChild(li);
    });
}

function sortearAmigo() {
    // Sorteo aleatorio: al hacer clic en el botón "Sortear Amigo", selecciona aleatoriamente un nombre
    if (amigos.length === 0) {
        alert('Por favor, agrega al menos un amigo para poder sortear.');
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la página
    let resultadoHTML = document.getElementById('resultado');
    resultadoHTML.innerHTML = `¡El amigo secreto es: ${amigoSorteado}! 🎉`;
}
