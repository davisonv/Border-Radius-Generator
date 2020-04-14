/*function mostrarValor() {
    alert(document.getElementById("top").value);
}

document.getElementById("top").onkeypress = function(e) {
    // 13 é a tecla <ENTER>. Se ela for pressionada, mostrar o valor
    if (e.keyCode == 13) {
        mostrarValor();
        e.preventDefault();
    }
}

document.getElementById("button").onclick = function(e) {
    mostrarValor();
    e.preventDefault();
}*/

var form = document.getElementById('inputs');
var campo1 = document.getElementById('top');
var campo2 = document.getElementById('right');
var campo3 = document.getElementById('bottom');
var campo4 = document.getElementById('left');

form.addEventListener('submit', function(e) {
    // alerta o valor do campo
    console.log(campo1.value);

    // impede o envio do form
    e.preventDefault();
});


document.querySelector("box").style.borderRadius = campo1;




