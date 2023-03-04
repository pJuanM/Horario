function carregar() {
    let data = new Date()
    let hora = data.getHours()
    let secao = document.getElementById("secao")
    let imagem = document.getElementById("imagem")
    let msg2 = document.getElementById("msg2")
    let msg = document.getElementById("msg")


    msg.innerHTML = `Agora são ${hora} horas`

    if(hora >= 5 && hora <= 12 ) {
        msg2.innerHTML = `Tenha um bom dia!`
        document.querySelector("link[rel*='icon']").href = "imagens/manha.ico"
        document.body.style.backgroundImage = "linear-gradient(to left, #fd60aa, #85a7e0 "
        secao.style.backgroundImage = "linear-gradient(to top, #fd60aa, #85a7e0)"

        

    } else if (hora >= 13 && hora <= 18) {
        msg2.innerHTML = `Tenha uma boa tarde!`
        imagem.src = "imagens/tarde.png" 
        document.querySelector("link[rel*='icon']").href = "imagens/tarde.ico"

        document.body.style.backgroundImage = "linear-gradient(to left, #e64938, #572c5b)"
        secao.style.backgroundImage = "linear-gradient(to top,#e64938, #572c5b)"
    }else {
        msg2.innerHTML = `Tenha uma boa noite!`
        imagem.src = "imagens/noite.png"
        document.querySelector("link[rel*='icon']").href = "imagens/noite.ico"

        document.body.style.backgroundImage = "linear-gradient(to left, #c8f4f2, #00517c)"
        secao.style.backgroundImage = "linear-gradient(to top,#c8f4f2, #00517c)"
    }
}