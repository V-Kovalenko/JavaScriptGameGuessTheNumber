'use strict'
const resetInput = () => {
    document.querySelector('.number-input').value = ''
}
// function for GUESS-MESSAGE
const displayGuessMessage = (message) => {
    document.querySelector('.guess-message').textContent = message
}
// function FOR SCORE
const displayScore = (score) => {
    document.querySelector('.score').textContent = score
}
// Score number
let score = 20
displayScore(score)
// The secret number

let secretNumber = Number(Math.floor(Math.random() * 20) + 1)
// document.querySelector('.question').textContent = secretNumber

//*************** click on button
 document.querySelector('.check').addEventListener('click', function () {
    let guessingNumber = Number(document.querySelector('.number-input').value)

    // Not input
    if (!guessingNumber) {
        displayGuessMessage('Введите число!')
    // To won
    } else if (guessingNumber === secretNumber) {
        displayGuessMessage('Правильно!')
        document.querySelector('.question').textContent = secretNumber
        let highScore = document.querySelector('.highscore').textContent
        if (highScore < score) {
            document.querySelector('.highscore').textContent = score
        }
        let bodyColorGreen = document.querySelector('body')
        bodyColorGreen.style.backgroundColor = 'green'
        let element = document.querySelector('.question')
        element.style.fontSize = '12rem'
        // If much!!!!!   !!!!!!! !!!!! 1111
    } else if (guessingNumber !== secretNumber) {
        displayGuessMessage(guessingNumber < secretNumber ? 'Мало!!' : 'Много!')
        resetInput()
        if (score < 2) {
            displayGuessMessage('Вы проиграли!')
            displayScore('0')
        }else {
            displayScore(score -= '1')
        }

    }


    // else if (guessingNumber > secretNumber) {
    //     document.querySelector('.guess-message').textContent = 'Много!'
    //     resetInput()
    //
    //     if (score < 2) {
    //         document.querySelector('.guess-message').textContent = 'Вы проиграли!'
    //         document.querySelector('.score').textContent = 0
    //     } else {
    //         document.querySelector('.score').textContent = score -= 1
    //     }
    //
    // // If small
    // } else if (guessingNumber < secretNumber){
    //     document.querySelector('.guess-message').textContent = 'Мало!!'
    //     resetInput()
    //     if(score < 2) {
    //         document.querySelector('.guess-message').textContent = 'Вы проиграли!'
    //         document.querySelector('.score').textContent = 0
    //     } else {
    //         document.querySelector('.score').textContent = score -= 1
    //     }
    // }
})
// ************** btn again **************
document.querySelector('.again').addEventListener('click', function () {
    resetInput()
    let bodyColorBlack = document.querySelector('body')
    bodyColorBlack.style.backgroundColor='black'
    displayGuessMessage('Начни угадывать !')
    document.querySelector('.question').textContent = '???'
    secretNumber = Number(Math.floor(Math.random() * 20) + 1)
    score = 20
    displayScore(score)
    let element = document.querySelector('.question')
    element.style.fontSize = '4rem'
})


// const element = document.getElementById('test')
// element.classList.add('noviy-class')
