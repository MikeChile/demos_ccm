const frases = [
  { texto: "La educación es la clave para el éxito.", autor: "Nelson Mandela" },
  { texto: "Aprender es crecer.", autor: "Benjamin Franklin" },
  { texto: "La sabiduría es la suma de la experiencia y la reflexión.", autor: "Aristóteles" },
  { texto: "La educación es el pilar fundamental de la sociedad.", autor: "Horacio" },
  { texto: "El conocimiento es poder.", autor: "Francis Bacon" },
  { texto: "La curiosidad es la semilla del aprendizaje.", autor: "Aristóteles" },
  { texto: "La educación es un viaje, no un destino.", autor: "Ralph Waldo Emerson" },
  { texto: "Aprender de los errores es la clave para el éxito.", autor: "Thomas Edison" },
  { texto: "La educación es la herramienta más poderosa para cambiar el mundo.", autor: "Nelson Mandela" },
  { texto: "El aprendizaje es un proceso continuo.", autor: "Benjamin Franklin" }
];

let indiceFrase = 0;

function mostrarFrase() {
  const fraseTexto = document.getElementById("frase-texto");
  const autor = document.getElementById("autor");
  const fraseActual = document.querySelector(".frase-actual");

  fraseActual.classList.add("fade-out");

  setTimeout(() => {
    fraseTexto.textContent = frases[indiceFrase].texto;
    autor.textContent = frases[indiceFrase].autor;
    fraseActual.classList.remove("fade-out");
    fraseActual.classList.add("fade-in");
    setTimeout(() => {
      fraseActual.classList.remove("fade-in");
    }, 500);
  }, 500);

  indiceFrase = (indiceFrase + 1) % frases.length;
}

setInterval(mostrarFrase, 7000);

mostrarFrase();