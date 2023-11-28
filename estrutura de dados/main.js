'use strict'

const users = [
    {
        nome: 'Ana Coelho',
        id: 'N.: 12121212',
        email: 'ana@gmail.com',
        celular: '11971234567',
        cidade: 'Osasco',
        image: './img/ana-coelho.jpg',
        status: true
    },
    {
        nome: 'Hugo Gomes',
        id: 'N.: 13131313',
        email: 'hugo@gmail.com',
        celular: '11972737475',
        cidade: 'Osasco',
        image: './img/hugo-gomes.jpg',
        status: false
    },
    {
        nome: 'Joana Pereira',
        id: 'N.: 14141414',
        email: 'joana@gmail.com',
        celular: '11973747576',
        cidade: 'Osasco',
        image: './img/joana-pereira.jpg',
        status: true
    },
    {
        nome: 'José Chaves',
        id: 'N.: 15151515',
        email: 'jose@gmail.com',
        celular: '11974757677',
        cidade: 'Osasco',
        image: './img/jose-chaves.jpg',
        status: true
    },
    {
        nome: 'Mariana Silva',
        id: 'N.: 16161616',
        email: 'mariana@gmail.com',
        celular: '11975767778',
        cidade: 'Osasco',
        image: './img/mariana-silva.jpg',
        status: false
    }
]

const botaoExbir = document.getElementById('exibir')

function criarCard (user) {
    const container = document.getElementById('data-container')
    const card = document.createElement('div')

    let status
    if (user.status){
        status = ''
    } else{
        status = 'sombra'
    }

    //  let status pode se resumir em uma unica linha:
    // let status = user.status ? '' : 'sombra'
    
    card.className = `card ${status}`
    card.innerHTML = `
        <img src="${user.image}" alt="Foto da ${user.nome}" class="card__photo">
        <h3 class="card__name">${user.nome}</h3>
        <p class="card__user-id">${user.id}</p>
        <p class="card__email">${user.email}</p>
    `
    container.appendChild(card)
}


function limparContainer() { 
    const container = document.getElementById ('data-container')
container.textContent = ''
}

function exibir() {
    limparContainer()
    users.forEach(criarCard)
}

botaoExbir.addEventListener('click', exibir)
