let num = document.querySelector('#nume')
let anali = document.querySelector('#num')
let res= document.querySelector('#res')
let valores= []
function numero(n) {
    if(Number (n) >=1 && Number (n) <=100) {
        return true
    } else {
        return false
    }
}
function lista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
function adicionar() {
    if (numero(num.value) && !lista(num.value, valores)) {
        valores.push(Number(num.value))
        var item = document.createElement('option')
        item.text= `valor ${num.value} adicionado`
        anali.appendChild(item)
    } else {
        alert('Valor inválido ou já encontrado na lista')
    }
    num.value= ''
    num.focus()
}
function finalizar() {
    if(valores.length == 0) {
        alert('Nenhum valor adicionado')
    } else{
        let tot = valores.length
        res.innerHTML= ''
        res.innerHTML+= `<p>Ao todo, temos ${tot} números cadastrado</p>`
    }
}