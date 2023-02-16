let barse = document.querySelector('.barse')
let close = document.querySelector('.close')
let nave = document.querySelector('.nave-bar')

barse.addEventListener('click', (e) => {

    nave.style.right = '0'

    let overLay = document.createElement('div');
    overLay.classList.add('over-lay');
    document.body.appendChild(overLay)
})
close.addEventListener('click', (e) => {
    document.querySelector('.over-lay').remove()
    nave.style.right = '-100%'
})
