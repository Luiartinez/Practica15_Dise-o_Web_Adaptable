//seleccionar el boton y el cuerpo de la pagina
const toggleButton = document.getElementById('toggleTheme');
const body = document.body;

//añadir un evento al clinck al boton
toggleButton.addEventListener('click', () => {
    //verificar la clase actual  y alternarla entre light-theme y dark-theme
    if (body.classList.contains('light-theme')){
        body.classList.remove('light-theme'); //quita el tema claro
        body.classList.add('dark-theme');//aplica el tema oscuro
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabPanels = document.querySelectorAll(".tab-panel");
  
    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Quitar la clase "active" de todas las pestañas y paneles
        tabButtons.forEach(btn => btn.classList.remove("active"));
        tabPanels.forEach(panel => panel.classList.remove("active"));
  
        // Añadir la clase "active" a la pestaña y panel seleccionados
        const tabId = button.getAttribute("data-tab");
        button.classList.add("active");
        document.getElementById(tabId).classList.add("active");
      });
    });
  });
  