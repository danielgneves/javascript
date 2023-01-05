function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') // Criei um elemento img
        img.setAttribute('id', 'foto') // Criei um id = "foto" para img
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/h-crianca.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/h-jovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/h-adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/h-idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/m-crianca.png')
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/m-jovem.png')
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/m-adulto.png')
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/m-idoso.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
        res.appendChild(img)

    }
}