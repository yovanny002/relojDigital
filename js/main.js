let contador_num = document.getElementById('contador');
for(i = 0; i < 100; i++){
    let span = document.createElement('span');
    span.textContent = i;
    contador_num.appendChild(span);
}
let i_numero = contador_num.getElementsByTagName('span');
let index = 0;

function siguente() {
    i_numero[index].style.display = 'none';
    index = (index + 1) % i_numero.length;
    i_numero[index].style.display = 'initial';
}
function anterior() {
    i_numero[index].style.display = 'none';
    index = (index - 1 + i_numero.length)% i_numero.length;
    i_numero[index].style.display = 'initial';
}