var root = document.documentElement;
var form = document.getElementById('inputs');
var campo1 = document.getElementById('top');
var campo2 = document.getElementById('right');
var campo3 = document.getElementById('bottom');
var campo4 = document.getElementById('left');
var copy = document.getElementById('copy-btn');


form.addEventListener('submit', function(e) {
    
    e.preventDefault();

    root.style.setProperty('--border-radius1', `${campo1.value}px`);
    root.style.setProperty('--border-radius2', `${campo2.value}px`);
    root.style.setProperty('--border-radius3', `${campo3.value}px`);
    root.style.setProperty('--border-radius4', `${campo4.value}px`);

    unicFillException(campo1,campo2,campo3,campo4)
    
    emptyException(campo1,campo2,campo3,campo4)
    
    var clipboard = `border-radius: ${campo1.value}px ${campo2.value}px ${campo3.value}px ${campo4.value}px;`
    
    document.getElementById("box-text").innerText = clipboard

    copy.addEventListener("click", function(){
        //Cria um elemento input (pode ser um textarea)
        let inputTest = document.createElement("input")
        inputTest.value = clipboard
        //Anexa o elemento ao body
        document.body.appendChild(inputTest)
        //seleciona todo o texto do elemento
        inputTest.select()
        //executa o comando copy
        //aqui é feito o ato de copiar para a area de trabalho com base na seleção
        document.execCommand('copy')
        //remove o elemento
        document.body.removeChild(inputTest)
    })
})




function unicFillException (campo1,campo2,campo3,campo4){
    if(campo1.value !=0 & campo2.value == 0 & campo3.value == 0 & campo4.value == 0) { 
        var count = 2
        while (count < 5) {  
            root.style.setProperty(`--border-radius${count}`, `${campo1.value}px`)
            campo2.value = campo1.value
            campo3.value = campo1.value
            campo4.value = campo1.value
            count++
        }
    }

    if(campo2.value !=0 & campo1.value == 0 & campo3.value == 0 & campo4.value == 0) { 
        var count = 1
        while (count < 5) {  
            root.style.setProperty(`--border-radius${count}`, `${campo2.value}px`)
            campo1.value = campo2.value
            campo3.value = campo2.value
            campo4.value = campo2.value
            count++
            if(count == 2){
                count++
            }
        }
    }

    if(campo3.value !=0 & campo1.value == 0 & campo2.value == 0 & campo4.value == 0) { 
        var count = 1
        while (count < 5) {  
            root.style.setProperty(`--border-radius${count}`, `${campo3.value}px`)
            campo1.value = campo3.value
            campo2.value = campo3.value
            campo4.value = campo3.value
            count++
            if(count == 3){
                count++
            }
        }
    }

    if(campo4.value !=0 & campo1.value == 0 & campo2.value == 0 & campo3.value == 0) { 
        var count = 1
        while (count < 5) {  
            root.style.setProperty(`--border-radius${count}`, `${campo4.value}px`)
            campo1.value = campo4.value
            campo2.value = campo4.value
            campo3.value = campo4.value
            count++
            if(count == 4){
                count++
            }
        }
    }
}

function emptyException (campo1,campo2,campo3,campo4){
    if (campo1.value == 0){
        campo1.value = 0
        root.style.setProperty('--border-radius1', `${campo1.value}px`);
    }

    if (campo2.value == 0){
        campo2.value = 0
        root.style.setProperty('--border-radius2', `${campo2.value}px`);
    }

    if (campo3.value == 0){
        campo3.value = 0
        root.style.setProperty('--border-radius3', `${campo3.value}px`);
    }

    if (campo4.value == 0){
        campo4.value = 0
        root.style.setProperty('--border-radius4', `${campo4.value}px`);
    }
}








