document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    // Validación de campos vacíos
    if (nombre === "" || email === "" || mensaje === "") {
      event.preventDefault(); // Prevenir el envío del formulario
      alert("Por favor, complete todos los campos del formulario.");
    }

    // Validación de formato de correo electrónico
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
    if (!email.match(emailRegex)) {
      event.preventDefault(); // Prevenir el envío del formulario
      alert("Formato incorrecto. Ingrese un correo electrónico válido.");
    }
  });
});


var preguntas = document.querySelectorAll(".pregunta");

preguntas.forEach(function (pregunta) {
  pregunta.addEventListener("click", function () {
    var respuesta = pregunta.nextElementSibling;
    if (respuesta.style.display === "none" || respuesta.style.display === "") {
      respuesta.style.display = "block";
    } else {
      respuesta.style.display = "none";
    }
  });
});