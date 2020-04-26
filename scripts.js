var root = document.documentElement;
var form = document.getElementById('inputs');
var campo1 = document.getElementById('top');
var campo2 = document.getElementById('right');
var campo3 = document.getElementById('bottom');
var campo4 = document.getElementById('left');
var empty  = document.getElementById('top')

form.addEventListener('submit', function(e) {
    
    e.preventDefault();

    root.style.setProperty('--border-radius', `${campo1.value}px`);
    root.style.setProperty('--border-radius2', `${campo2.value}px`);
    root.style.setProperty('--border-radius3', `${campo3.value}px`);
    root.style.setProperty('--border-radius4', `${campo4.value}px`);
    
    document.getElementById("box-text").innerText = `border-radius: ${campo1.value}px ${campo2.value}px
    ${campo3.value}px ${campo4.value}px;`

   if(campo1.value !=0, campo2.value == 0, campo3.value == 0, campo4.value == 0) { 
        var count = 2
        while (count < 5) {  
            root.style.setProperty(`--border-radius${count}`, `${campo1.value}px`)
            count++
        }
    }
});










