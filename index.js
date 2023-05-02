const elementScore0 = document.querySelector('#count-0')
const elementScore1 = document.querySelector('#count-1')
const elementDice = document.querySelector('.middle__dice')
const color = document.querySelector('.container')
//btn
const btnNew = document.querySelector('.header__button')
const btnQuit = document.querySelector('.middle__quit')
const btnLeave = document.querySelector('.middle__leave')

elementScore0.textContent = 0
elementScore1.textContent = 0
elementDice.classList.add('hidden')
let checkClick = false

const totalScore = [0, 0]
let currentScore = 0
let activePlayer = 0
btnLeave.disabled = true
btnNew.disabled = true

const switchActivePlayer = () => {
    color.classList.toggle('container_active')
    currentScore = 0
    document.querySelector(`#current-${activePlayer}`).textContent = currentScore
    activePlayer = activePlayer === 0 ? 1 : 0

}

btnQuit.addEventListener('click', function () {
    const randomNumber = Math.trunc(Math.random() * 6) + 1
    elementDice.classList.remove('hidden')
    elementDice.src = `./assets/img/dice${randomNumber}.png`
    checkClick = true
    btnLeave.disabled = false
    btnNew.disabled = false
    if (randomNumber !== 1) {
        currentScore += randomNumber
        document.querySelector(`#current-${activePlayer}`).textContent = currentScore

    } else {
        switchActivePlayer()
    }
})

btnLeave.addEventListener('click', function () {
    totalScore[activePlayer] += currentScore
    document.querySelector(`#count-${activePlayer}`).textContent = totalScore[activePlayer]
    if (totalScore[activePlayer] >= 100) {
        document.querySelector(`#count-${activePlayer}`).textContent = 'Victory!!!'
        btnQuit.disabled = true
        btnLeave.disabled = true
    } else {
        if (checkClick) {
            checkClick = false
            btnLeave.disabled = true
            switchActivePlayer()
        }
    }
})
btnNew.addEventListener('click', function () {
    checkClick = false
    btnQuit.disabled = false
    btnLeave.disabled = true
    btnNew.disabled = true
    totalScore[activePlayer] = 0

    document.querySelector(`#count-${activePlayer}`).textContent = 0
    document.querySelector(`#current-${activePlayer}`).textContent = 0
    switchActivePlayer()
    document.querySelector(`#count-${activePlayer}`).textContent = 0
    document.querySelector(`#current-${activePlayer}`).textContent = 0
    totalScore[activePlayer] = 0
})
