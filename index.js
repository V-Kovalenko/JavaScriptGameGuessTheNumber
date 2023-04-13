'use strict'
const resetInput = () => {
    document.querySelector('.number-input').value = ''
}


// Score number
let score = 20
document.querySelector('.score').textContent = score

// The secret number

let secretNumber = Number(Math.floor(Math.random() * 20) + 1)
// document.querySelector('.question').textContent = secretNumber

//*************** click on button
 document.querySelector('.check').addEventListener('click', function () {
    let guessingNumber = Number(document.querySelector('.number-input').value)

    // Not input
    if (!guessingNumber) {
        document.querySelector('.guess-message').textContent = 'Введите число!'

    // To won
    } else if (guessingNumber === secretNumber) {
        document.querySelector('.guess-message').textContent = 'Правильно!'
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
        resetInput()
        if (score < 2) {
            document.querySelector('.guess-message').textContent = guessingNumber < secretNumber ? 'Мало!!' : 'Много!'
            document.querySelector('.guess-message').textContent = 'Вы проиграли!'
            document.querySelector('.score').textContent = 0
        }else {
            document.querySelector('.score').textContent = score -= 1
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
    document.querySelector('.guess-message').textContent = 'Начни угадывать !'
    document.querySelector('.question').textContent = '???'
    secretNumber = Number(Math.floor(Math.random() * 20) + 1)
    score = 20
    document.querySelector('.score').textContent = score

    let element = document.querySelector('.question')
    element.style.fontSize = '4rem'
})


// const element = document.getElementById('test')
// element.classList.add('noviy-class')
