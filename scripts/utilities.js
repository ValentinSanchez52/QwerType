function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getScoreMessage(score) {
    let message = "Your score is " + score.success + " over " + score.total
    return message
}

function setScore(value) {
    let score = document.querySelectorAll(".scoreZone span")
    score[0].innerText = value
}

function setLetterPerSec(value) {
    let score = document.querySelectorAll(".scoreZone span")
    score[1].innerText = Math.round(value * 100) / 100
}

function setCurrentProposition(word) {
    let propositionZone = document.querySelector(".propositionZone")
    propositionZone.innerText = word
}

function confirmAnswer() {
    if (textInput.value === propositionZone.innerText) {
        score.succes++
        setScore(score.succes)
    }
    else score.fails++
    // Reset of text input and update of the current index
    textInput.value = ""
    propositionIndex = propositionArray[propositionIndex + 1] === undefined ? 0 : propositionIndex + 1

    setCurrentProposition(propositionArray[propositionIndex])
}
