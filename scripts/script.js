// Ajuda a codificar de forma mais correta.
"use strict"
// ------------------------------- ||


// Main letiables |
const btn = document.getElementById('btn');
const inputText = document.getElementById('inputText');
const result = document.getElementById('resultado');
const increment = document.getElementById('incremente');
const inputOp = document.getElementById('inputOp');
const requerid = document.querySelectorAll('.requerid');
// ------------------------------------------------- ||

// event click to encrypt caesar or base64 |
btn.addEventListener('click', function () {

    if (increment.value == "") {
        requerid[0].style.display = 'block';
    } else if (changeCod.checked && inputOp.value == "1") {
        result.innerText = baseInc(inputText.value)
    } else if (changeCod.checked && inputOp.value == "2") {
        result.innerText = codeCaesar(inputText.value, parseInt(increment.value))
    } else if (changeDesc.checked && inputOp.value == "1") {
        result.innerText = baseDesc(inputText.value)
    } else if (changeDesc.checked && inputOp.value == "2") {
        result.innerText = caesarDesc(inputText.value, parseInt((increment.value)))
    }

    // Validações |
    if (inputText.value == "" && increment.value == "") {
        requerid[0].style.display = 'block';
        requerid[1].style.display = 'block';
    } else if (inputText.value == "") {
        requerid[1].style.display = 'block';
        requerid[0].style.display = 'none';
    } else if (inputText.value != "" && increment.value != "") {
        requerid[0].style.display = 'none';
        requerid[1].style.display = 'none';
    } else if (increment.value != "") {
        requerid[0].style.display = 'none';
    } else if (inputText.value != "") {
        requerid[1].style.display = 'none';
    }
    // ---------------------------------------------------------- ||
});
// --------------------------------------------------------------------------- ||


// Input options |
inputOp.addEventListener('change', muda);

function muda() {
    if (inputOp.value == "2") {
        inputIncrement.style.display = 'flex';
        incremente.style.height = '60px';
        incremente.style.width = '60px';
    } else {
        inputIncrement.style.display = 'none';
    }
}
// ---------------------------------------------- ||


// Change encode or decode |
function cod(){
    if (changeCod.checked) {
        btn.value = 'Codificar';
    }
}

function desc(){
    if (!changeCod.checked) {
        btn.value = 'Decodificar';
    }
}
// ------------------------------- ||


// script code cesar |
function codeCaesar(text, inc) {
    
    let txtCodificado = '';
    let asciiP = '';

    for (let i = 0; i < text.length; i++) {
        
        if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
            asciiP = (((text.charCodeAt(i) - 65) + inc) % 26) + 65
        } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
            asciiP = (((text.charCodeAt(i) - 97) + inc) % 26) + 97
        } else {
            asciiP = text.charCodeAt(i);
        }
        
        txtCodificado += String.fromCharCode(asciiP);
    }
    
    return txtCodificado
}
// -------------------------------------------------------------------- ||


// script decode cesar |
function caesarDesc(text, inc){
    
    let txtCodificado = '';
    let asciiP = '';

    for(let i = 0; i < text.length; i++){

        if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90) {
            if((text.charCodeAt(i) - 65) - inc < 0){
              asciiP = (((text.charCodeAt(i) - 65) - inc + 26) % 26) + 65;
            } else {
              asciiP = (((text.charCodeAt(i) - 65) - inc) % 26) + 65;
        }
            
        } else if (text.charCodeAt(i) >= 97 && text.charCodeAt(i) <= 122) {
            if ((text.charCodeAt(i) - 97) - inc < 0) {
              asciiP = (((text.charCodeAt(i) - 97) - inc + 26) % 26) + 97;
            } else {
              asciiP = (((text.charCodeAt(i) - 97) - inc) % 26) + 97;
            }
            
        } else {
            asciiP = text.charCodeAt(i);
        }
            txtCodificado += String.fromCharCode(asciiP)
        }
        
        return txtCodificado;
    }
// -------------------------------------------------------------------- ||


// script code or decode base64 |
function baseInc(txt) {
    return btoa(txt)
}

function baseDesc(txt) {
    return atob(txt)
}
// ------------------------------- ||
    
