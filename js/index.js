
// Funcion scroll
window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
        header.classList.toggle('cambio', window.scrollY > 350);
    
});


// Funcion reloj digital
function reloj() {
    let horas = document.getElementById('horas');
    let minutos = document.getElementById('minutos');
    let segundos = document.getElementById('segundos');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();


    horas.innerHTML = h;
    minutos.innerHTML = m;
    segundos.innerHTML = s;

}

let intervaloTiempo = setInterval(reloj, 1000);