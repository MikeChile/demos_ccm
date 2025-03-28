//SIDEMENU
const sections = document.querySelectorAll(".section");
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute("href").split("#")[1];
        const section = document.getElementById(sectionId);
        const sectionTop = section.offsetTop - 100; // ajuste para que aparezca más abajo
        window.scrollTo({ top: sectionTop, behavior: "smooth" });

        // Activa la sección
        navLinks.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
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

//MENU
const menu = document.querySelector('.menu');

window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        menu.classList.add('menu-oculto');
        menuOculto = true;
    } else {
        menu.classList.remove('menu-oculto');
        menuOculto = false;
    }
});

const mobileLinks = document.getElementById('mobile-links');
const mobileLinkButton = document.getElementById('mobile-link-button');

mobileLinkButton.addEventListener('click', () => {
    mobileLinks.classList.toggle('show');
});