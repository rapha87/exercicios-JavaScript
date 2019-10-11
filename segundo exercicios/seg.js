function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.querySelector('#txtano')
    var res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[ERRO] Tente novamente')

    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fAno.value
        res.innerHTML = `idade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'homem.criança.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'homem.jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'homem.adulto.jpg')
            } else {
                img.setAttribute('src', 'homem.idoso.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'mulher.criança.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'mulher.jovem.jpg')
            } else if (idade < 50) {
                img.setAttribute('src', 'mulher.adulta.jpg')
            } else {
                img.setAttribute('src', 'mulher.idosa.jpg')
            }
        } else {
            genero = 'gosto universal'
        }
    }res.innerHTML = `Detectamos ${genero} com ${idade} anos`
    res.appendChild(img)
}