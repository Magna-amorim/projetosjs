'use strict'

const forma1 = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')


function mudarCor () {
    forma1.classList.toggle('vermelho')
}

function mudarForma () {
    forma2.classList.toggle('circulo')
}

function esquerda () {
    forma3.classList.toggle('esquerda')
}

function movimentar () {
    forma4.classList.toggle('movimentar')
}

function matrix () {
    forma5.classList.toggle('matrix')
}

function degrade () {
    forma6.classList.toggle('degrade')
}

forma1.addEventListener('click', mudarCor)
forma2.addEventListener('click', mudarForma)
forma3.addEventListener('click', esquerda)
forma4.addEventListener('click', movimentar)
forma5.addEventListener('click', matrix)
forma6.addEventListener('click', degrade)