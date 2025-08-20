'use strict'

function calcularSoma(){
            
    let v1 = parseInt(document.getElementById('n1').value)
    let v2 = parseInt(document.getElementById('n2').value)

    let total = v1 + v2

    document.getElementById('resultado').innerHTML = total

}