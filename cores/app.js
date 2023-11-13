'use strict'

function limparCores() {
    titulo.classList.remove('azul')
    titulo.classList.remove('vermelho')
    titulo.classList.remove('verde')

}
function trocarCor() {
    const titulo = document.getElementById('titulo')

    const corEscolhida = prompt('Digite azul, vermelho ou verde')

    if (corEscolhida == 'vermelho') {
        limparCores()
        titulo.classList.add('vermelho')
        titulo.classList.add('vermelho')

    } else if (corEscolhida == 'azul') {
        limparCores()
        titulo.classList.add('azul')

    } else if (corEscolhida == 'verde') {
        limparCores()
        titulo.classList.add('verde')

    }
    else {
        limparCores()
    }


}

const botaoTrocarCor = document.getElementById('trocar-cor')

botaoTrocarCor.addEventListener('click', trocarCor)