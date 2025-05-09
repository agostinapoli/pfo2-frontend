
const navbar = document.querySelector(".navbarScroll");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 100) {
    navbar.classList.add("navbarDark");
  } else {
    navbar.classList.remove("navbarDark");
  }
});
/*modo oscuro*/ 

const form = document.getElementById("formulario-contacto");
    const mensaje = document.getElementById("mensaje-enviado");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      mensaje.classList.add("mostrar");
      form.reset();
    });

    const slides = document.querySelectorAll(".slide");
    const btnIzq = document.querySelector(".carrusel-btn.izquierda");
    const btnDer = document.querySelector(".carrusel-btn.derecha");
    let indice = 0;

    function mostrarSlide(i) {
      slides.forEach(slide => slide.classList.remove("active"));
      slides[i].classList.add("active");
    }

    btnIzq.addEventListener("click", () => {
      indice = (indice - 1 + slides.length) % slides.length;
      mostrarSlide(indice);
    });

    btnDer.addEventListener("click", () => {
      indice = (indice + 1) % slides.length;
      mostrarSlide(indice);
    });

    mostrarSlide(indice);

    /*COUNTDOWN*/
    function actualizarCountdown() {
  const countdown = document.getElementById("countdown");
  const finCursada = new Date("2025-07-30T23:59:59");
  const ahora = new Date();
  const diferencia = finCursada - ahora;

  if (diferencia <= 0) {
    countdown.textContent = "¡Finalizado!";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  countdown.textContent = `${dias}d ${String(horas).padStart(2, '0')}h ${String(minutos).padStart(2, '0')}m ${String(segundos).padStart(2, '0')}s`;
}

actualizarCountdown();
setInterval(actualizarCountdown, 1000);



