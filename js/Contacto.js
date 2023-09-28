  document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      if (nombre === "" || email === "" || mensaje === "") {
        event.preventDefault(); // Prevent form submission
        alert("Por favor, complete todos los campos del formulario.");
      }
    });
  });

