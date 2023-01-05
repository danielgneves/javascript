function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia!
        img.src = 'imagens/imagem-manha.png'
        document.body.style.background = '#B28447'
    } else if (hora > 12 && hora < 18) {
        //Boa tarde!
        img.src = 'imagens/imagem-tarde.png'
        document.body.style.background = '#F48021'
    } else {
        //Boa noite!
        img.src = 'imagens/imagem-noite.png'
        document.body.style.background = '#3C3A3D'
    }
}
