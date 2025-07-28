console.log("ejecutando el sistema")
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const listaDeAmigos = [];
const listaDeGanadores = [];

function agregarAmigo() {
  const input = document.getElementById("amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  listaDeAmigos.push(nombre);
  input.value = "";
  mostrarLista();
  actualizarEstadoBoton();
}

function mostrarLista() {
  const ul = document.getElementById("listaAmigos");
  ul.innerHTML = "";

  listaDeAmigos.forEach((nombre, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${nombre}`;
    ul.appendChild(li);
  });
}

function mostrarGanadores() {
  const ul = document.getElementById("ganadores");
  ul.innerHTML = "";

  listaDeGanadores.forEach((nombre, i) => {
    const li = document.createElement("li");
    li.textContent = `${i + 1}. ${nombre}`;
    ul.appendChild(li);
  });
}

function sortearAmigo() {
  if (listaDeAmigos.length < 2) {
    alert("Debe haber al menos 2 amigos para hacer un sorteo.");
    return;
  }

  const indice = Math.floor(Math.random() * listaDeAmigos.length);
  const ganador = listaDeAmigos.splice(indice, 1)[0];
  listaDeGanadores.push(ganador);

  document.getElementById("resultado").innerHTML = `<li>🎉 El amigo secreto es: <strong>${ganador}</strong></li>`;

  mostrarLista();
  mostrarGanadores();
  actualizarEstadoBoton();

  if (listaDeAmigos.length < 2) {
    document.getElementById("resultado").innerHTML += `<li>🎊 Sorteo finalizado. Ya no hay suficientes participantes.</li>`;
  }
}

function actualizarEstadoBoton() {
  const boton = document.querySelector(".button-draw");
  boton.disabled = listaDeAmigos.length < 2;
}
