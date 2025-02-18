
//MENU
const menu = document.querySelector('.menu');
const botónMenu = document.createElement('button');
botónMenu.textContent = 'Menú';
botónMenu.className = 'botón-menu';
botónMenu.innerHTML = '<i class="bx bx-menu"></i> Menú';

document.body.appendChild(botónMenu);

let menuOculto = false;

botónMenu.addEventListener('click', () => {
  if (menuOculto) {
    menu.classList.remove('menu-oculto');
    botónMenu.classList.add('oculto');
    menuOculto = false;
  } else {
    menu.classList.add('menu-oculto');
    botónMenu.classList.remove('oculto');
    menuOculto = true;
  }
});

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    menu.classList.add('menu-oculto');
    botónMenu.classList.remove('oculto');
    menuOculto = true;
  } else {
    menu.classList.remove('menu-oculto');
    botónMenu.classList.add('oculto');
    menuOculto = false;
  }
});

const mobileLinks = document.getElementById('mobile-links');
const mobileLinkButton = document.getElementById('mobile-link-button');

mobileLinkButton.addEventListener('click', () => {
  mobileLinks.classList.toggle('show');
});

//DESTACADOS
document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      slide.style.opacity = "0";
      slide.style.transform = "translateX(-50%) scale(0.9)";

      if (i === index) {
        slide.classList.add("active");
        slide.style.opacity = "1";
        slide.style.transform = "translateX(-50%) scale(1)";
      }
    });
  }

  document.getElementById("prev-slide").addEventListener("click", function () {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
  });

  document.getElementById("next-slide").addEventListener("click", function () {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  });

  // Mostrar el primer slide al cargar
  showSlide(currentSlide);
});


//CENTROS
const imagenes = document.querySelectorAll('.imagen');
const nombres = document.querySelectorAll('.nombre');

imagenes.forEach((imagen, index) => {
  imagen.addEventListener('mouseover', () => {
    imagen.style.transform = 'rotateY(180deg)';
    nombres[index].style.transform = 'rotateY(0deg)';
    nombres[index].style.opacity = '1';
  });

  imagen.addEventListener('mouseout', () => {
    imagen.style.transform = 'rotateY(0deg)';
    nombres[index].style.transform = 'rotateY(180deg)';
    nombres[index].style.opacity = '0';
  });
});

//NUMEROS
$(document).ready(function () {
  // número count para stats, usando jQuery animate

  $('.counting').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },

      {

        duration: 3000,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
          //alert('finished');
        }

      });

  });
});

//FRASES
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