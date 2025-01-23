let amigos = [];

/* Función para agregar nombres y limpiar el campo de entrada*/
function agregarAmigo() {
    const input = document.getElementById('amigo');
    const nombre = input.value.trim();
    if (nombre) {
        amigos.push(nombre);
        actualizarLista();
        input.value = '';
    }
}

/* Función para mostrar los nombres agregados en lista */
function actualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';
    amigos.forEach((amigo) => {
        const li = document.createElement('li');
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

/* Función para sortear los nombres y validar la entrada */
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('Por favor, inserte un nombre.');
        return;
    }
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: ${amigoSorteado}</li>`;
}