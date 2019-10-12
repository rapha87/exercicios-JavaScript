function tabuada(){
    var n= document.querySelector('#txtnum')
    var tab= document.querySelector('#num')
    var res= document.querySelector('res')
    if(n.value.length == 0) {
        alert('{ERRO} Preencha o campo')
    } else {
        na= Number(n.value)
        tab.innerHTML= ''
        for(c=1; c<11; c++) {
            var item= document.createElement('option')
            item.text= `${na} x ${c} = ${na*c}`
            item.value= `tab ${c}`
            tab.appendChild(item)
        }

    }
}