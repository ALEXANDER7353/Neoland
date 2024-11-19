

document.addEventListener("DOMContentLoaded", () => {
  initializeLoginForm();
});

/**
 * Inicializa el formulario de login y maneja la validación de usuario.
 */
function initializeLoginForm() {
  const loginForm = document.getElementById("loginForm");
  const errorMessage = document.getElementById("error-message");

  const validUser = {
    username: "admin",
    password: "1234",
  };

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    validateLogin(username, password, validUser)
      ? handleLoginSuccess(username)
      : displayError(errorMessage, "Usuario o contraseña incorrectos.");
  });
}

/**
 * Valida el login del usuario comparando los datos ingresados con los datos correctos.
 * @param {string} username - Nombre de usuario ingresado.
 * @param {string} password - Contraseña ingresada.
 * @param {Object} validUser - Objeto con los datos de usuario y contraseña válidos.
 * @returns {boolean} - Retorna true si los datos coinciden, false en caso contrario.
 */
function validateLogin(username, password, validUser) {
  return username === validUser.username && password === validUser.password;
}

/**
 * Muestra un mensaje de error.
 * @param {HTMLElement} errorElement - Elemento HTML donde se muestra el error.
 * @param {string} message - Mensaje a mostrar.
 */
function displayError(errorElement, message) {
  errorElement.textContent = message;
  errorElement.style.display = "block"; // Mostramos el mensaje de error solo cuando hay un error
}
/**
 * Maneja el caso de éxito en el login.
 * @param {string} username - Nombre del usuario logueado.
 */
function handleLoginSuccess(username) {
  // Guardamos el estado de login en localStorage
  localStorage.setItem("loggedIn", "true");
  localStorage.setItem("username", username);

 window.location.href="../index.html"
}
