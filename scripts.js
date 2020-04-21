var root = document.documentElement;
var form = document.getElementById('inputs');
var campo1 = document.getElementById('top');
var campo2 = document.getElementById('right');
var campo3 = document.getElementById('bottom');
var campo4 = document.getElementById('left');


form.addEventListener('submit', function(e) {
    // impede o envio do form
    e.preventDefault();

    root.style.setProperty('--border-radius', `${campo1.value}px`);
    root.style.setProperty('--border-radius2', `${campo2.value}px`);
    root.style.setProperty('--border-radius3', `${campo3.value}px`);
    root.style.setProperty('--border-radius4', `${campo4.value}px`);
});









