function botaosim() {
    var boby = document.body
    document.querySelector('#sim').remove()
    document.querySelector('#nao').remove()
    document.querySelector('#texo').remove()
    boby.style.background = '#ff3b8a'
    //cria uma nova div
    let divtexo2 = document.createElement('div')
    divtexo2.id = 'diva'
    document.body.appendChild(divtexo2)
    //adicionar textobunito1 e textobunito2
    let textobonito = document.createElement("p")
    textobonito.id ='texo2'
    textobonito.innerText = 'Então Minha princesa saiba q as vezes, fico pensando em como a vida ficou mais feliz desde que vc entrou nela. Cada sorriso seu ilumina meu dia, e cada palavra que você diz soa como uma melodia que eu não posso parar de ouvir. Você é a pessoa que transforma até os momentos mais simples em algo especial. Eu te amo mais a cada dia, minha princesa. Você é a razão do meu sorriso e o motivo de eu querer ser uma pessoa cada vez melhor.'
    divtexo2.appendChild(textobonito)

    let novobutao = document.createElement("button")
    novobutao.id = 'butao1' 
    novobutao.innerText = 'eu tbm te amo'
    document.body.appendChild(novobutao)
    novobutao.onclick = function(){
        window.location.href = 'https://www.tiktok.com/@raio_astronomico/video/7187902766184942853'
        alert('😍🥰😍🥰😍')
    }

}
function botaonao(){
    var boby = document.body
    document.querySelector('#sim').remove()
    document.querySelector('#nao').remove()
    document.querySelector('#texo').remove()
    boby.style.background = '#746dc9'
    //cria um titulo e botoes
    let titulotriste = document.createElement("h1")
    titulotriste.id ='titulo3'
    titulotriste.innerText = 'N me ama?'
    document.body.appendChild(titulotriste)

    let butaofeliz = document.createElement("button")
    butaofeliz.id = 'butaofeliz' 
    butaofeliz.innerText = 'Amo simmm'
    document.body.appendChild(butaofeliz)
    butaofeliz.onclick = function() {
        var boby = document.body
        document.querySelector('#titulo3').remove()
        document.querySelector('#butaofeliz').remove()
        document.querySelector('#butaotriste').remove()
        boby.style.background = '#ff3b8a'
        
        alert('To de olho viu rum')
        var emojidesconfiado = document.createElement('p')
        emojidesconfiado.id = 'emojidesconfiado'
        emojidesconfiado.innerText = '🤨'
        document.body.appendChild(emojidesconfiado)

        //cria uma nova div
        let divtexo2 = document.createElement('div')
        divtexo2.id = 'diva'
        document.body.appendChild(divtexo2)
        //adicionar textobunito1 e textobunito2
        let textobonito = document.createElement("p")
        textobonito.id ='texo2'
        textobonito.innerText = 'Então Minha princesa saiba q as vezes, fico pensando em como a vida ficou mais feliz desde que vc entrou nela. Cada sorriso seu ilumina meu dia, e cada palavra que você diz soa como uma melodia que eu não posso parar de ouvir. Você é a pessoa que transforma até os momentos mais simples em algo especial. Eu te amo mais a cada dia, minha princesa. Você é a razão do meu sorriso e o motivo de eu querer ser uma pessoa cada vez melhor.'
        divtexo2.appendChild(textobonito)

    }
    let butaotriste = document.createElement("button")
    butaotriste.id = 'butaotriste' 
    butaotriste.innerText = 'n amo'
    document.body.appendChild(butaotriste)
    butaotriste.onclick = function() {
        document.querySelector('#titulo3').remove()
        document.querySelector('#butaofeliz').remove()
        document.querySelector('#butaotriste').remove()
        boby.style.background = '#394142'
        var emojitriste = document.createElement('p')
        emojitriste.id = 'emojitriste'
        emojitriste.innerText = '🥺'
        document.body.appendChild(emojitriste)

        alert('ele vai ficar sabendo😭😠')
    }
}