const amigos = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (nombre === '') {
    alert('Por favor, escribe un nombre.');
    return;
  }

  if (amigos.includes(nombre)) {
    alert('Este amigo ya está en la lista.');
    input.value = '';
    return;
  }

  amigos.push(nombre);
  actualizarLista();
  input.value = '';
  input.focus();
}

function actualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';

  amigos.forEach((amigo) => {
    const li = document.createElement('li');
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

function sortearAmigo() {
  if (amigos.length < 2) {
    alert('Necesitas al menos dos amigos para hacer el sorteo.');
    return;
  }

  // Crear una copia de la lista para hacer el sorteo
  let asignados = amigos.slice();
  let resultados = [];

  // Intentar asignar sin que nadie se asigne a sí mismo
  for (let i = 0; i < amigos.length; i++) {
    const amigo = amigos[i];
    // Filtrar opciones posibles para que no se autoasigne
    let opciones = asignados.filter(a => a !== amigo);

    if (opciones.length === 0) {
      // Si no hay opciones válidas, reiniciar y sortear de nuevo
      return sortearAmigo();
    }

    // Elegir un amigo secreto al azar
    const elegido = opciones[Math.floor(Math.random() * opciones.length)];

    resultados.push({ amigo, elegido });

    // Eliminar elegido de asignados
    asignados = asignados.filter(a => a !== elegido);
  }

  mostrarResultados(resultados);
}

function mostrarResultados(resultados) {
  const contenedorResultados = document.getElementById('resultado');
  contenedorResultados.innerHTML = '';

  resultados.forEach(({ amigo, elegido }) => {
    const li = document.createElement('li');
    li.textContent = `${amigo} → ${elegido}`;
    contenedorResultados.appendChild(li);
  });
}
