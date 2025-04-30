document.addEventListener("DOMContentLoaded", () => {
  const toggleTheme = () => {
    const html = document.documentElement;
    if (html.classList.contains("dark")) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log("Tema cambiado a claro");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("Tema cambiado a oscuro");
    }
  };

  // Aplica el tema guardado en localStorage al cargar la página
  const theme = localStorage.getItem("theme");
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
    console.log("Tema oscuro aplicado al cargar");
  } else {
    document.documentElement.classList.remove("dark");
    console.log("Tema claro aplicado al cargar");
  }

  // Vincula el evento de clic al botón
  const themeToggleButton = document.querySelector("#theme-toggle-button");
  if (themeToggleButton) {
    themeToggleButton.addEventListener("click", toggleTheme);
  } else {
    console.error("No se encontró el botón de alternancia de tema");
  }
});

themeToggleButton.addEventListener("click", () => {
  toggleTheme();
  console.log("Clase actual en <html>:", document.documentElement.className);
});