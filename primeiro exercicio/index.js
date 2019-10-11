function carregar() {
    var msg= document.querySelector('#msg')
    var img= document.querySelector('#imagem')
    var data= new Date()
    var hora= data.getHours()
    msg.innerHTML= `Agora são ${hora} horas.`
    if (hora>=0 && hora<12) {
        img.src='img.manhã.png'
        document.body.style.background= '#e2cd9f '
    } else if (hora>=12 && hora<18) {
        img.src='img.tarde.png'
        document.body.style.background= "#b9846f"
    } else if (hora >=18 && hora<24){
        img.src='img.noite.png'
        document.body.style.background= '#515154'
    } else {
        msg.innerHTML ='hora inválida'
    }
}