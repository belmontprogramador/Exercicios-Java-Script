function verificar(){
     var data = new Date()
     var ano = data.getFullYear()
     var fano = document.getElementById('txtano')
     var res = document.querySelector('div#res')
     if (fano.value.length == 0 || fano.value > ano){
        window.alert ('[ERRO] Verfique os dados e tente novamente')
     }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = "Homem"
            if(idade >=0 && idade <= 2){
                //bebe
                img.setAttribute('src', 'bhomem.png')
            }else if (idade > 2 && idade <= 18){
                // jovem
                img.setAttribute('src', 'hjovem.png')
            }else if(idade > 18 && idade <= 50){
                //adulto
                img.setAttribute('src', 'hadulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'hidoso.png')
            }
        }else if (fsex[1].checked) {
            genero = "Mulher"
            if(idade >=0 && idade <= 2){
                //bebe
                img.setAttribute('src', 'bmulher.png')
            }else if (idade > 2 && idade <= 18){
                // jovem
                img.setAttribute('src', 'mjovem.png')
            }else if(idade > 18 && idade <= 50){
                //adulto
                img.setAttribute('src', 'madulto.png')
            }else{
                //idoso
                img.setAttribute('src', 'midosa.png')
            }
        }
        res.style.textAling = "center"
        res.innerHTML = `Detectamos ${genero} com a idade ${idade} anos`
        res.appendChild(img)
    }

}