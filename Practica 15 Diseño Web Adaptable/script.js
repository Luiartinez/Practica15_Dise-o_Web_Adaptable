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