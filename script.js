const input = document.getElementById('busqueda');
const btnBuscar = document.getElementById('buscar-btn');
const btnSuerte = document.getElementById('suerte-btn');

input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        buscar();
    }
});

btnBuscar.addEventListener('click', buscar);
btnSuerte.addEventListener('click', buscar);

function buscar() {
    const query = encodeURIComponent(input.value.trim());
    if (query) {
        window.location.href = `https://google.com/search?q=${query}`;
    }
}