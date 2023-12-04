'use strict'
const botaoPesquisar = document.getElementById('pesquisar')
const textRaca = document.getElementById('raca')

function limparGaleria() {
    const container = document.getElementById('galeria')
    container.textContent = ''
}

function criarImagem(urlImagem) {
    const container = document.getElementById('galeria')
    const imagem = document.createElement('img')

    imagem.src = urlImagem
    container.appendChild(imagem)
}

async function carregarGaleria() {
    const raca = document.getElementById('raca').value.toLowerCase()
    const url = `https://dog.ceo/api/breed/${raca}/images`

    const response = await fetch(url)
    const data = await response.json()

    limparGaleria()
    data.message.forEach(criarImagem)
}

function capturarEnter(event) {
    if (event.inputType == 'insertLineBreak'){
        carregarGaleria()
    }
}

botaoPesquisar.addEventListener('click', carregarGaleria)

textRaca.addEventListener('beforeinput', capturarEnter)