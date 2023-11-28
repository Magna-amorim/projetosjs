'use strict'

const botaoExibir = document.getElementById('exibir')
const botaoVendas100 = document.getElementById('vendas100')
const botaoBonus = document.getElementById('bonus')


const numeros = [80, 50, 23, 7, 100, 254, 30, 500]

// const botaovendas100 = document.getElementById('vendas100')

function criarCard(data) {
    const container = document.getElementById('data-container')
    const card = document.createElement('div')
    card.textContent = data
    container.appendChild(card)
}


function limparContainer() {
    const container = document.getElementById('data-container')
    container.textContent = ''
}

function exibir() {
    limparContainer()
    numeros.forEach (criarCard)
}

function vendas100 (){
    limparContainer ()
    const numeros100 = numeros.filter( numero => numero > 100)
    numeros100.forEach(criarCard)
}

function vendasBonus () {
    limparContainer()
    const numerosBonus = numeros.map (numero => numero + 10)
    numerosBonus.forEach(criarCard)
}


botaoExibir.addEventListener('click', exibir)
botaoVendas100.addEventListener('click', vendas100)
botaoBonus.addEventListener('click', vendasBonus)