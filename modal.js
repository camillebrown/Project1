const startBtn = document.querySelector('.modal-close-start')
const modalStart = document.querySelector('.modal-start')
const modalEndBtn = document.querySelector('.modal-close-end')
const modal = document.querySelector('.modal-overlay')
let modalClose = document.querySelector('.modal-close')
let iconSymbol = document.querySelector('.icon-symbol')
let modalTitle = document.querySelector('.modal-title')
let modalText = document.querySelector('.modal-content')
let modalEnd = document.querySelector('.modal-end')

startBtn.addEventListener('click', ()=>{
    modalStart.style.visibility = 'hidden'
    modalStart.style.opacity = '0'
})

const finalScore = document.querySelector('#finalscore')
const mostRecentScore = JSON.parse(localStorage.getItem('mostRecentScore'))

finalScore.innerText = mostRecentScore

modalEndBtn.addEventListener('click', ()=>{
    window.location = 'index.html'
    modalEnd.style.visibility = 'hidden'
    modalEnd.style.opacity = '0'
    localStorage.setItem('mostRecentScore', 0)
})

