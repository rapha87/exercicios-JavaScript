function contar() {
    var start = document.querySelector('#txtstar')
    var end = document.querySelector('#txtend')
    var step = document.querySelector('#txtstep')
    var res = document.querySelector('#res')
    if (start.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        alert('[ERRO] preencha todos os campos')
    } else {
        res.innerHTML = 'contando:'
        var i = Number(start.value)
        var f = Number(end.value)
        var p = Number(step.value)
        if (i < f) {
            for (c = i; c <= f; c += p) {
                res.innerHTML += ` \u{1F449} ${c} `
            }
        } else {
            for (c = i; c >= f; c -= p) {
                res.innerHTML += ` \u{1F449} ${c} `
            }
        }
        res.innerHTML+= `\u{1F3C1}`
    } 
}
