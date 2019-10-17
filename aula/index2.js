let num = document.querySelector('#nume')
let an = documente.querySelector('#num')
let res= document
let valores= []
function numero (n) {
    if(Number (n) >=1 && Number (n) <=100) {
        return true
    } else {
        return false
    }
}
function lista (n, l) {
    if(l.indexOf(Number(n) != -1)) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (numero(num.value) && lista(num.value, valores)) {
        
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
}
