'use strict'

const botaoSequencia = document.getElementById('botao-sequencia')
const botaoImpar = document.getElementById('botao-impar')
const botaoPar = document.getElementById('botao-par')
const botaoMultiplos = document.getElementById('botao-multiplos')



function gerarSequencia () {
    const quantidade = document.getElementById ('quantidade')
    const resultado = document.getElementById ('resultado')

    resultado.textContent = " " 
    for (let contador=1;contador<=quantidade.value;contador++){
    //     resultado.textContent += " " + contador
    const span = document.createElement('span')
    span.textContent = contador
    resultado. appendChild (span)
    } 

}

function gerarNumeroImpares () {
    const quantidade = document.getElementById ('quantidade')
    const resultadoImpar = document.getElementById ('resultado-impar')

    resultadoImpar.textContent = " " 
    for ( let contador=1;contador<=quantidade.value;contador += 2){
        // resultadoImpar.textContent += " " + contador
        const span = document.createElement('span')
        span.textContent = contador
        resultadoImpar. appendChild (span)
    }
}

function gerarNumeroPar () {
    const quantidade = document.getElementById ('quantidade')
    const resultadoPar = document.getElementById ('resultado-par')

    resultadoPar.textContent = " " 
    for ( let contador=2;contador<=quantidade.value;contador += 2){
        // resultadoPar.textContent += " " + contador
        const span = document.createElement('span')
        span.textContent = contador
        resultadoPar. appendChild (span)
    }
}

function gerarNumeroMultiplos () {
    const quantidade = document.getElementById ('quantidade')
    const resultadoMultiplos = document.getElementById ('resultado-multiplos')

    resultadoMultiplos.textContent = " " 
    for ( let contador=5;contador<=quantidade.value;contador += 5){
        // resultadoMultiplos.textContent += " " + contador
        const span = document.createElement('span')
        span.textContent = contador
        resultadoMultiplos. appendChild (span)
    }
}


botaoSequencia.addEventListener('click', gerarSequencia)
botaoImpar.addEventListener('click' , gerarNumeroImpares)
botaoPar.addEventListener('click' , gerarNumeroPar)
botaoMultiplos.addEventListener('click' , gerarNumeroMultiplos)